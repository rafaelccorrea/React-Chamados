import Rotas from "./routes";
import AuthProvider from "./context/auth"

function AppStored() {
  return (
    <>
      <Rotas />
    </>
  );
}

export function App() {
  return (
    <>
    <AuthProvider> 
      <AppStored />
    </AuthProvider>
    </>
  );
}
