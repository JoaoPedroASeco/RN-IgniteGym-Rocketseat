// Core
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from "@expo/vector-icons";

// Libs
import { HStack, Heading, Icon, Image, Text, VStack } from "native-base";

// Types
type Props = TouchableOpacityProps & {
  title: string;
  description: string;
};

export const ExerciseCard = ({ title, description, ...rest }: Props) => {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="gray.500"
        alignItems="center"
        p={2}
        pr={4}
        rounded="md"
        mb={3}
      >
        <Image
          source={{
            uri: "https://blog.totalpass.com.br/wp-content/uploads/2022/04/exercicios-fisicos.jpg",
          }}
          alt="imagem do exercicio"
          w={16}
          h={16}
          rounded="md"
          mr={4}
        />

        <VStack flex={1}>
          <Heading color="white" fontFamily="heading" fontSize="lg">
            {title}
          </Heading>

          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            {description}
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  );
};
