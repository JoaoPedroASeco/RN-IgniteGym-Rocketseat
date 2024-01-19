import { usePrivateRoutesNavigation } from "@context/usePrivateRoutesNavigationContext copy";
import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import BodySVG from "@assets/body.svg";
import SeriesSVG from "@assets/series.svg";
import RepetitionsSVG from "@assets/repetitions.svg";
import { Button } from "@components/Button";

export const Exercise = () => {
  const { handleGoBack } = usePrivateRoutesNavigation();

  return (
    <VStack flex={1}>
      <VStack px={8} pt={12} bg={"gray.600"}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
        </TouchableOpacity>

        <HStack
          justifyContent={"space-between"}
          mt={4}
          mb={8}
          alignItems={"center"}
        >
          <Heading color={"gray.100"} fontSize={"lg"} flexShrink={1}>
            Puxada Frontal
          </Heading>

          <HStack alignItems={"center"}>
            <BodySVG />
            <Text color={"gray.200"} ml={1} textTransform={"capitalize"}>
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>
      <ScrollView>
        <VStack p={8}>
          <Image
            source={{
              uri: "https://blog.totalpass.com.br/wp-content/uploads/2022/04/exercicios-fisicos.jpg",
            }}
            alt="imagem do exercicio"
            h={80}
            w={"full"}
            rounded="lg"
            mb={3}
            resizeMode="cover"
          />

          <Box bg={"gray.600"} rounded={"md"} pb={4} px={4}>
            <HStack
              alignContent={"center"}
              justifyContent={"space-around"}
              mb={6}
              mt={5}
            >
              <HStack alignItems={"center"}>
                <SeriesSVG />
                <Text color={"gray.200"} ml={2}>
                  3 séries
                </Text>
              </HStack>

              <HStack alignItems={"center"}>
                <RepetitionsSVG />
                <Text color={"gray.200"} ml={2}>
                  12 repetições
                </Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
};
