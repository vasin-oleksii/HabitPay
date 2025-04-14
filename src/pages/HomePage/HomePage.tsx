import { Flex, Heading } from "@chakra-ui/react";
import GenerateBlocs from "./GenerateBlocs";
import SelectHabit from "./SelectHabit";
import AddNewHabit from "./AddNewHabit";
import { useEffect, useState } from "react";

export interface Habit {
  habit: string;
  data: Date;
  streak: number[];
  id: number;
}

const HomePage = () => {
  const [allHabits, setAllHabits] = useState<Habit[]>(
    JSON.parse(localStorage.getItem("habits") || "[]") || []
  );
  const [currentHabit, setCurrentHabit] = useState<Habit>(
    JSON.parse(localStorage.getItem("currentHabit") || "{}") || {
      habit: "",
      data: new Date(),
      streak: [],
      id: 0,
    }
  );

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(allHabits));
  }, [allHabits]);

  useEffect(() => {
    localStorage.setItem("currentHabit", JSON.stringify(currentHabit));
  }, [currentHabit]);

  const addNewHabit = (habit: Habit) => {
    setAllHabits((prev) => [...prev, habit]);
  };

  const selectCurrentHabit = (habit: Habit) => {
    setCurrentHabit(habit);
  };

  const deleteHabit = (id: number) => {
    setAllHabits((prev) => prev.filter((hab) => hab.id !== id));
  };

  const addCompleteTaskInStack = (id: number, updateStreak: number) => {
    setAllHabits((allHabitsPrev) =>
      allHabitsPrev.map((habit) => {
        if (habit.id === id) {
          return { ...habit, streak: [...habit.streak, updateStreak] };
        }

        return habit;
      })
    );
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
          currentHabit={currentHabit}
          handleClickBlock={addCompleteTaskInStack}
        />
      ) : (
        <Heading>
          {!allHabits.length ? "Create &" : ""} Choice one habit
        </Heading>
      )}
    </Flex>
  );
};

export default HomePage;
