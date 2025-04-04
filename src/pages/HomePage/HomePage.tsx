import { Flex } from "@chakra-ui/react";
import GenerateBlocs from "./GenerateBlocs";

const HomePage = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
    >
      <GenerateBlocs countBlocs={100} />
    </Flex>
  );
};

export default HomePage;
