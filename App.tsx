// Core
import { StatusBar } from "react-native";

// Fonts
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

// Libs
import { NativeBaseProvider } from "native-base";

// Components
import { Loading } from "@components/Loading";

// Theme
import { THEME } from "./src/theme";

// Core Routes
import { Routes } from "@routes/index";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return (
      <NativeBaseProvider theme={THEME}>
        <Loading />
      </NativeBaseProvider>
    );
  }

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      
      <Routes />
    </NativeBaseProvider>
  );
}
