import { Flex } from "@chakra-ui/react";
import GenerateBlocs from "./GenerateBlocs";
import SelectHabit from "./SelectHabit";
import AddNewHabit from "./AddNewHabit";
import { useState } from "react";

const HomePage = () => {
  const [allHabits, setAllHabits] = useState<string[]>([]);
  const [currentHabit, setCurrentHabit] = useState<string>("");

  const addNewHabit = (habit: string) => {
    setAllHabits((prev) => [...prev, habit]);
  };

  const selectCurrentHabit = (habit: string) => {
    setCurrentHabit(habit);
  };

  const deleteHabit = (habit: string) => {
    setAllHabits((prev) => prev.filter((hab) => hab !== habit));
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
      <GenerateBlocs countBlocs={100} />
    </Flex>
  );
};

export default HomePage;
