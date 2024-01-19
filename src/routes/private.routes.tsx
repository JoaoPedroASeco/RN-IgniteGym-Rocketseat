// Core
import { Platform } from "react-native";

// Navigation
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

// Screes
import { Exercise } from "@screens/Exercise";
import { History } from "@screens/History";
import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";

// Icons
import HomeSVG from "@assets/home.svg";
import HistorySVG from "@assets/history.svg";
import ProfileSVG from "@assets/profile.svg";

// Types
export type PrivateRoutes = {
  Home: undefined;
  History: undefined;
  Profile: undefined;
  Exercise: undefined;
};

export type PrivateRoutesName = "Home" | "History" | "Profile" | "Exercise";

export type PrivateRoutesProps = BottomTabNavigationProp<PrivateRoutes>;

// Consts
const { Screen, Navigator } = createBottomTabNavigator<PrivateRoutes>();

// Context
import { UsePrivateRouteNavigationContextProvider } from "@context/usePrivateRoutesNavigationContext copy";
import { useTheme } from "native-base";

export const PrivateRoutes = () => {
  const { sizes, colors } = useTheme();

  const iconSize = sizes[6];

  return (
    <UsePrivateRouteNavigationContextProvider>
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.green[500],
          tabBarInactiveTintColor: colors.gray[200],
          tabBarStyle: {
            backgroundColor: colors.gray[600],
            borderTopWidth: 0,
            height: Platform.OS === "android" ? "auto" : 96,
            paddingBottom: sizes[10],
            paddingTop: sizes[6],
          },
        }}
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <HomeSVG fill={color} width={iconSize} height={iconSize} />
            ),
          }}
        />
        <Screen
          name="History"
          component={History}
          options={{
            tabBarIcon: ({ color }) => (
              <HistorySVG fill={color} width={iconSize} height={iconSize} />
            ),
          }}
        />
        <Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <ProfileSVG fill={color} width={iconSize} height={iconSize} />
            ),
          }}
        />
        <Screen
          name="Exercise"
          component={Exercise}
          options={{
            tabBarButton: () => null,
          }}
        />
      </Navigator>
    </UsePrivateRouteNavigationContextProvider>
  );
};
