import { useNavigation } from "@react-navigation/native";
import { PublicRoutesProps, PublicRoutesName } from "@routes/public.routes";
import { ReactNode, createContext, useCallback, useContext } from "react";

type Props = {
  handleNavigate: (_: PublicRoutesName) => void;
  handleGoBack: () => void;
};

export const UsePublicRouteNavigationContext = createContext({} as Props);

export const UsePublicRouteNavigationContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const navigation = useNavigation<PublicRoutesProps>();

  const handleNavigate = useCallback(
    (route: PublicRoutesName) => {
      navigation.navigate(route);
    },
    [navigation]
  );

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <UsePublicRouteNavigationContext.Provider
      value={{ handleNavigate, handleGoBack }}
    >
      {children}
    </UsePublicRouteNavigationContext.Provider>
  );
};

export const usePublicRoutesNavigation = () => {
  return useContext(UsePublicRouteNavigationContext);
};
