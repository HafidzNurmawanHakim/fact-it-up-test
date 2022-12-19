import { createContext, FC, useContext } from "react";

type AppControllerParam = {};

interface AppControllerProps {
  children: any;
}

const initsAppControllerParam: AppControllerParam = {};

const AppControllerContext = createContext<AppControllerParam>(
  initsAppControllerParam
);

const useAppController = () => {
  return useContext(AppControllerContext);
};

const AppControllerProvider: FC<AppControllerProps> = ({ children }) => {
  return (
    <AppControllerContext.Provider value={{}}>
      {children}
    </AppControllerContext.Provider>
  );
};

export { AppControllerProvider, useAppController };
