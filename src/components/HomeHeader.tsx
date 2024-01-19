// Core
import { TouchableOpacity } from "react-native";

// Libs
import { HStack, Heading, Icon, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

// Components
import { UserPhoto } from "./UserPhoto";

export const HomeHeader = () => {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <HStack alignItems="center" flex={1}>
        <UserPhoto
          size={16}
          source={{ uri: "https://github.com/JoaoPedroASeco.png" }}
          alt="user photo"
          mr={4}
        />
        <VStack>
          <Text color="gray.100">Olá,</Text>
          <Heading color="gray.100">Joao Pedro</Heading>
        </VStack>
      </HStack>

      <TouchableOpacity>
        <Icon as={MaterialIcons} name="logout" size={7} color="gray.200" />
      </TouchableOpacity>
    </HStack>
  );
};
