// Libs
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

// Images
import BackgroudImg from "@assets/background.png";
import LogoSVG from "@assets/logo.svg";

// Components
import { Input } from "@components/Input";
import { Button } from "@components/Button";

// Hooks
import { usePublicRoutesNavigation } from "@context/usePublicRoutesNavigationContext";

// Types
type FormDataProps = {
  email: string;
  password: string;
};

// Schemas
const signInSchema = yup.object({
  email: yup.string().required("Informe o E-Mail").email("Email invalido"),
  password: yup
    .string()
    .required("Informe a Senha")
    .min(6, "A senha deve ter pelo menos 6 digitos"),
});

export const SignIn = () => {
  // Hooks
  const { handleNavigate } = usePublicRoutesNavigation();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
    // defaultValues: {
    //   name: "",
    //   email: "",
    //   confirmPassword: "",
    //   password: "",
    // },
  });

  const handleSignIn = (data: FormDataProps) => console.log(data);

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

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                value={value}
                onChange={onChange}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                value={value}
                onChange={onChange}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Button title="Acessar" onPress={handleSubmit(handleSignIn)} />
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
