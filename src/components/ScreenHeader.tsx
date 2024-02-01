// Libs
import { Center, Heading } from "native-base";

// Types
type Props = {
  title: string;
};

export const ScreenHeader = ({ title }: Props) => {
  return (
    <Center bg="gray.600" pb={6} pt={16}>
      <Heading fontFamily="heading" color="gray.100" fontSize="xl">
        {title}
      </Heading>
    </Center>
  );
};
