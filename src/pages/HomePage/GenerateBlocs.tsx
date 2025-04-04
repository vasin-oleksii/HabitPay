import { Box, Grid } from "@chakra-ui/react";
import { useState } from "react";

const GenerateBlocs = ({ countBlocs }: { countBlocs: number }) => {
  const [blocsClicked, setBlocsClicked] = useState<number[]>([]);

  const blocs = [];

  const handleClick = (i: number) => {
    setBlocsClicked((prev) => {
      if (prev.includes(i)) {
        return prev.filter((bloc) => bloc !== i);
      } else {
        return [...prev, i];
      }
    });
  };

  for (let i = 0; i <= countBlocs; i++) {
    const isBlocClicked = blocsClicked.includes(i);

    blocs.push(
      <Box
        key={i}
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
        onClick={() => handleClick(i)}
        boxShadow="md"
        transition="background-color 0.2s"
        cursor="pointer"
        _hover={{
          bgColor: isBlocClicked ? "#18181B" : "#6D28D9",
          transform: "scale(1.05)",
        }}
      />
    );
  }

  return (
    <Grid templateRows="repeat(7, 1fr)" gridAutoFlow="column" gap={4}>
      {blocs}
    </Grid>
  );
};

export default GenerateBlocs;
