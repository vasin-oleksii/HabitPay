import {  Center, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const App = () => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center" h="100vh">
      <Center>
        <VStack>

        <Heading>Hello HabitPay 🦎</Heading>
        <Text fontSize="lg">
          HabitPay is a platform for tracking your habits.
        </Text>
        </VStack>
      </Center>



    </Flex>
  );
};

export default App;
