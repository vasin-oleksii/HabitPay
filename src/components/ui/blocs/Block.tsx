import { Box } from "@chakra-ui/react";

const Block = ({
  isBlocClicked,
  handleClick,
  index,
}: {
  isBlocClicked: boolean;
  handleClick: (index: number) => void;
  index: number;
}) => {
  return (
    <Box
      h="40px"
      w="40px"
      bgColor={isBlocClicked ? "#6D28D9" : "#18181B"}
      borderRadius="md"
      borderColor="#27272A"
      borderWidth="2px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontSize="lg"
      onClick={() => handleClick(index)}
      boxShadow="md"
      transition="background-color 0.2s"
      cursor="pointer"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.code === "Enter") handleClick(index);
      }}
      _hover={{
        bgColor: isBlocClicked ? "#18181B" : "#6D28D9",
        transform: "scale(1.05)",
      }}
    >
      {isBlocClicked ? index + 1 : ""}
    </Box>
  );
};

export default Block;
