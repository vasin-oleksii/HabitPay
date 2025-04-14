import Block from "@/components/ui/blocs/Block";
import { Box, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DayOfWeek from "./DayOfWeek";
import { Habit } from "./HomePage";

const GenerateBlocs = ({
  currentHabit,
  handleClickBlock,
}: {
  currentHabit: Habit;
  handleClickBlock: (id: number, updateStreak: number) => void;
}) => {
  const DAYS_TO_SHOW = 100;
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
    handleClickBlock(currentHabit.id, i);
  };

  for (let i = 0; i <= DAYS_TO_SHOW; i++) {
    const isBlocClicked = blocsClicked.includes(i);
    const isBlocInStreak = currentHabit.streak.includes(i);

    blocs.push(
      <Box onClick={() => handleClickBlock(currentHabit.id, i)} key={i}>
        <Block
          isBlocClicked={isBlocClicked || isBlocInStreak}
          handleClick={handleClick}
          index={i}
        />
      </Box>
    );
  }

  useEffect(() => {
    setBlocsClicked([]);
  }, [currentHabit]);

  return (
    <Grid
      mt="4rem"
      templateRows="repeat(7, 1fr)"
      gridAutoFlow="column"
      gap={4}
      alignItems="center"
      overflowX="auto"
      width="50vw"
      pb="5"
    >
      <DayOfWeek />
      {blocs}
    </Grid>
  );
};

export default GenerateBlocs;
