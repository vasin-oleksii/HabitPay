import { Flex } from "@chakra-ui/react";
import GenerateBlocs from "./GenerateBlocs";
import SelectHabit from "./SelectHabit";
import AddNewHabit from "./AddNewHabit";
import { useState } from "react";

const HomePage = () => {
  const [allHabits, setAllHabits] = useState<string[]>([]);
  // const [currentHabit, setCurrentHabit] = useState<string>("");

  const addNewHabit = (habit: string) => {
    setAllHabits((prev) => [...prev, habit]);
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
    >
      <AddNewHabit handleClick={addNewHabit} />
      <SelectHabit allHabits={allHabits} />
      <GenerateBlocs countBlocs={100} />
    </Flex>
  );
};

export default HomePage;
