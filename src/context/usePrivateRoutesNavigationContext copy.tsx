import { useNavigation } from "@react-navigation/native";
import { PrivateRoutesProps, PrivateRoutesName } from "@routes/private.routes";
import { ReactNode, createContext, useCallback, useContext } from "react";

type Props = {
  handleNavigate: (_: PrivateRoutesName) => void;
  handleGoBack: () => void;
};

export const UsePrivateRouteNavigationContext = createContext({} as Props);

export const UsePrivateRouteNavigationContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const navigation = useNavigation<PrivateRoutesProps>();

  const handleNavigate = useCallback(
    (route: PrivateRoutesName) => {
      navigation.navigate(route);
    },
    [navigation]
  );

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <UsePrivateRouteNavigationContext.Provider
      value={{ handleNavigate, handleGoBack }}
    >
      {children}
    </UsePrivateRouteNavigationContext.Provider>
  );
};

export const usePrivateRoutesNavigation = () => {
  return useContext(UsePrivateRouteNavigationContext);
};
