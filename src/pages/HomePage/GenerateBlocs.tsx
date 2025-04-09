import Block from "@/components/ui/blocs/Block";
import { Grid } from "@chakra-ui/react";
import { useState } from "react";
import DayOfWeek from "./DayOfWeek";
import { Habit } from "./HomePage";

const GenerateBlocs = ({
  currentHabit,
  allHabits,
}: {
  currentHabit: Habit;
  allHabits: Habit[];
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
  };

  for (let i = 0; i <= DAYS_TO_SHOW; i++) {
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
  console.log(currentHabit.streak);
  console.log(allHabits);

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
