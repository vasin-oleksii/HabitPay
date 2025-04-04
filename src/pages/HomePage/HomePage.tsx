import Header from "@/components/header/Header";
import { Flex } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
    >
      <Header />
    </Flex>
  );
};

export default HomePage;
