import { AuthContextProps, AuthLogin } from "./interface";
import { useState, createContext, useEffect, useCallback } from "react";
import firebase from "../firebase/firebase";

export const AuthContext = createContext({});
function AuthProvider({ children }: AuthContextProps) {
  const [user, setUser] = useState();
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

  //Função De Cadastro
  const signUp:any = useCallback<AuthLogin> (
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
 )


  //Salvar informações no LocalStorage
  function storageUser(data: any) {
    localStorage.setItem("userAuth", JSON.stringify(data));
  }

  return (
    <AuthContext.Provider
      value={{
        // authenticated: Valor de usuario quem vem em object convertido pra bollean com !!
        authenticated: !!user,
        user,
        loading,
        signUp
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
