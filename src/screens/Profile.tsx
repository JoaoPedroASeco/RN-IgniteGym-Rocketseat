import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import {
  Center,
  Heading,
  ScrollView,
  Skeleton,
  Text,
  VStack,
} from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const PHOTO_SIZE = 33;

export const Profile = () => {
  const [loading, setLoading] = useState(false);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView>
        <Center mt={6} px={10}>
          {loading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.400"
              endColor="gray.600"
            />
          ) : (
            <UserPhoto
              size={PHOTO_SIZE}
              source={{ uri: "https://github.com/JoaoPedroASeco.png" }}
              alt="Foto do usuario"
              mb={3}
            />
          )}

          <TouchableOpacity>
            <Text color="green.500" fontWeight="bold" fontSize="md" mb={8}>
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input
            bg="gray.600"
            placeholder="Nome"
            value=""
            onChangeText={() => {}}
          />

          <Input
            bg="gray.600"
            placeholder="E-Mail"
            value=""
            onChangeText={() => {}}
            isDisabled
          />
        </Center>

        <VStack px={10} mt={12} mb={9}>
          <Heading color="gray.200" fontSize={"md"} mb={2}>
            Alterar Senha
          </Heading>

          <Input bg="gray.600" placeholder="Senha antiga" secureTextEntry />

          <Input bg="gray.600" placeholder="Nova senha" secureTextEntry />

          <Input
            bg="gray.600"
            placeholder="Confirme a nova senha"
            secureTextEntry
          />

          <Button title="Atualizar" />
        </VStack>
      </ScrollView>
    </VStack>
  );
};
