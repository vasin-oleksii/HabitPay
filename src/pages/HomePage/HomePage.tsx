import { Flex, Heading } from "@chakra-ui/react";
import GenerateBlocs from "./GenerateBlocs";
import SelectHabit from "./SelectHabit";
import AddNewHabit from "./AddNewHabit";
import { useState } from "react";

export interface Habit {
  habit: string;
  data: Date;
  streak: number[];
  id: number;
}

const HomePage = () => {
  const [allHabits, setAllHabits] = useState<Habit[]>([]);
  const [currentHabit, setCurrentHabit] = useState<Habit>({
    habit: "",
    data: new Date(),
    streak: [],
    id: 0,
  });

  const addNewHabit = (habit: Habit) => {
    setAllHabits((prev) => [...prev, habit]);
  };

  const selectCurrentHabit = (habit: Habit) => {
    setCurrentHabit(habit);
  };

  const deleteHabit = (id: number) => {
    setAllHabits((prev) => prev.filter((hab) => hab.id !== id));
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
    >
      <AddNewHabit handleClick={addNewHabit} />
      <SelectHabit
        allHabits={allHabits}
        handleClick={selectCurrentHabit}
        handleDelete={deleteHabit}
        currentHabit={currentHabit}
      />

      {currentHabit.id ? (
        <GenerateBlocs
          countBlocs={100}
          currentHabit={currentHabit}
          allHabits={allHabits}
        />
      ) : (
        <Heading>Create & Choice one habit</Heading>
      )}
    </Flex>
  );
};

export default HomePage;
