import { createContext, FC, useContext } from "react";

type AuthContextProps = {
  test: string;
};

const initAuthContextProps = {
  test: "test",
};

const AuthContext = createContext<AuthContextProps>(initAuthContextProps);

const useAuth = () => {
  return useContext(AuthContext);
};

interface AuthProviderProps {
  children: any;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  return (
    <AuthContext.Provider value={{ test: "test" }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
