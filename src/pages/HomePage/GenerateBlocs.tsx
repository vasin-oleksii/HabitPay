import Block from "@/components/ui/blocs/Block";
import { Grid } from "@chakra-ui/react";
import { useState } from "react";
import DayOfWeek from "./DayOfWeek";
import { Habit } from "./HomePage";

const GenerateBlocs = ({
  countBlocs,
  currentHabit,
  allHabits,
}: {
  countBlocs: number;
  currentHabit: Habit;
  allHabits: Habit[];
}) => {
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
      <Block
        isBlocClicked={isBlocClicked}
        handleClick={handleClick}
        index={i}
        key={i}
      />
    );
  }

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
