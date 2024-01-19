// Core
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

// Types
export type PublicRoutes = {
  SignIn: undefined;
  SignUp: undefined;
};

export type PublicRoutesName = "SignIn" | "SignUp";

export type PublicRoutesProps = NativeStackNavigationProp<PublicRoutes>;

// Screens
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

// Consts
const { Screen, Navigator } = createNativeStackNavigator<PublicRoutes>();

// Context
import { UsePublicRouteNavigationContextProvider } from "@context/usePublicRoutesNavigationContext";

export const PublicRoutes = () => {
  return (
    <UsePublicRouteNavigationContextProvider>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="SignIn" component={SignIn} />
        <Screen name="SignUp" component={SignUp} />
      </Navigator>
    </UsePublicRouteNavigationContextProvider>
  );
};
