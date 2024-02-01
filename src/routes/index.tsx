// Core
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// Libs
import { Box, useTheme } from "native-base";

// Routes
import { PublicRoutes } from "./public.routes";
import { PrivateRoutes } from "./private.routes";

export const Routes = () => {
  // Hooks
  const { colors } = useTheme();
  const user = false; // User Authenticated

  // Consts
  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer>
        {user ? <PrivateRoutes /> : <PublicRoutes />}
      </NavigationContainer>
    </Box>
  );
};
