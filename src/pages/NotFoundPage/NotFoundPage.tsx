import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

const NotFoundPage = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      h="100vh"
      flexDirection="column"
    >
      <Flex alignItems="center" justifyContent="center" flexDirection="row">
        <Text color="teal.600" fontWeight="bold" fontSize="6xl">
          404
        </Text>
        - Page Not Found
        <Heading as="h1" fontSize="4xl" color="teal.600"></Heading>
      </Flex>
      <p>The page you are looking for does not exist.</p>
      <Box mt="4">
        <a href="/">
          <Button colorPalette="teal" variant="outline">
            Go back to Home
          </Button>
        </a>
      </Box>
    </Flex>
  );
};

export default NotFoundPage;
