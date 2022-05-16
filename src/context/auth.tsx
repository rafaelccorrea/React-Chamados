import AuthContextProps from "./interface";
import { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext({});
function AuthProvider({ children }: AuthContextProps) {
  const [user, setUser] = useState({ id: 1, name: 'Rafael'});
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function loadingAuth() {
      const storageUser = localStorage.getItem('userAuth')
  
      if(storageUser){
        setUser(JSON.parse(storageUser))
        setLoading(false);
      }
      setLoading(false);
    }
    loadingAuth();
  }, [])

  return (
    <AuthContext.Provider
      value={{
        // authenticated: Valor de usuario quem vem em object convertido pra bollean com !!
        authenticated: !!user,
        user,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
