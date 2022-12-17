import { createContext, FC, useContext } from "react";

type AuthContextProps = {};

const initAuthContextProps = {};

const AuthContext = createContext<AuthContextProps>(initAuthContextProps);

const useAuth = () => {
  return useContext(AuthContext);
};

interface AuthProviderProps {
  children: any;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export { useAuth, AuthProvider };
