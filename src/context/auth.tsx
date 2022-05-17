import {
  AuthContextProps,
  AuthLogin,
  AuthSignUp,
  AuthLogout,
} from "./interface";
import { useState, createContext, useEffect, useCallback } from "react";
import firebase from "../firebase/firebase";

export const AuthContext = createContext({});
function AuthProvider({ children }: AuthContextProps) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function loadingAuth() {
      const storageUser = localStorage.getItem("userAuth");

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
      setLoading(false);
    }
    loadingAuth();
  }, []);

  //Função de login
  const signIn: any = useCallback<AuthLogin>(async (email, password) => {
    try {
      setLoadingAuth(true);
      const dataUser = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      const userProfile = await firebase
        .firestore()
        .collection("users")
        .doc(dataUser.user?.uid)
        .get();

      let data: any = {
        uid: dataUser.user?.uid,
        nome: userProfile.data()?.nome,
        sobrenome: userProfile.data()?.lastName,
        email: dataUser.user?.email,
        avatarUrl: null,
      };

      setUser(data);
      storageUser(data);
      setLoadingAuth(false);
    } catch (err) {
      return err;
      setLoadingAuth(false);
    }
  }, []);

  //Função De Cadastro
  const signUp: any = useCallback<AuthSignUp>(
    async (name, lastName, email, password) => {
      setLoadingAuth(true);
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (res) => {
          let uid = res.user?.uid;
          await firebase
            .firestore()
            .collection("users")
            .doc(uid)
            .set({
              nome: name,
              sobrenome: lastName,
              avatarUrl: null,
            })
            .then(() => {
              let data: any = {
                uid: uid,
                nome: name,
                sobrenome: lastName,
                email: res.user?.email,
                avatarUrl: null,
              };
              setUser(data);
              storageUser(data);
              setLoadingAuth(false);
            });
        })
        .catch((err) => {
          setLoadingAuth(false);
        });
    },
    [null]
  );

  //Salvar informações no LocalStorage
  function storageUser(data: any) {
    localStorage.setItem("userAuth", JSON.stringify(data));
  }

  const logout = useCallback<AuthLogout>(async () => {
    await firebase.auth().signOut();
    localStorage.removeItem("userAuth");
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        // authenticated: Valor de usuario quem vem em object convertido pra bollean com !!
        authenticated: !!user,
        user,
        loading,
        signUp,
        logout,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
