// Libs
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

// Images
import BackgroudImg from "@assets/background.png";
import LogoSVG from "@assets/logo.svg";

// Components
import { Input } from "@components/Input";
import { Button } from "@components/Button";

// Hooks
import { usePublicRoutesNavigation } from "@context/usePublicRoutesNavigationContext";

export const SignIn = () => {
  // Hooks
  const { handleNavigate } = usePublicRoutesNavigation();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <VStack flex={1} px={10} pb={16}>
        <Image
          source={BackgroudImg}
          defaultSource={BackgroudImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSVG />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" fontFamily="heading" mb={6}>
            Acesse sua conta
          </Heading>
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />

          <Button title="Acessar" />
        </Center>

        <Center mt={24}>
          <Heading color="gray.100" fontSize="xl" fontFamily="heading" mb={6}>
            Ainda não tem acesso?
          </Heading>

          <Button
            title="Criar conta"
            variant="outline"
            onPress={() => handleNavigate("SignUp")}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
};
