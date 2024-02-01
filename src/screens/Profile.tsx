// Core
import { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";

// Components
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";

// Libs
import {
  Center,
  Heading,
  ScrollView,
  Skeleton,
  Text,
  VStack,
  useToast,
} from "native-base";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

// Consts
const PHOTO_SIZE = 33;

export const Profile = () => {
  // Hooks
  const toast = useToast();

  // States
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("https://github.com/JoaoPedroASeco.png");

  // Functions
  const handleUserPhotoSelect = async () => {
    setLoading(true);

    try {
      const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (canceled) {
        return;
      }

      if (assets && assets[0].uri) {
        const imageURI = assets[0].uri;

        const { size }: any = await FileSystem.getInfoAsync(imageURI);

        const sizeInMB = size / 1024 / 1024;

        if (size && sizeInMB > 5) {
          return toast.show({
            title: "Essa imagem e muito grande. Escolha uma de ate 5MB",
            placement: "top",
            bgColor: "red.500",
          });
        }

        setImage(imageURI);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
              source={{ uri: image }}
              alt="Foto do usuario"
              mb={3}
            />
          )}

          <TouchableOpacity onPress={handleUserPhotoSelect}>
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
          <Heading fontFamily="heading" color="gray.200" fontSize={"md"} mb={2}>
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
