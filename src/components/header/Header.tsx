import { Center, Heading, Text, VStack } from "@chakra-ui/react";

const Header = () => {
  return (
    <Center>
      <VStack>
        <Heading>Welcome to HabitPay 🦎</Heading>
        <Text fontSize="lg">
          HabitPay is a platform for tracking your habits.
        </Text>
      </VStack>
    </Center>
  );
};

export default Header;
