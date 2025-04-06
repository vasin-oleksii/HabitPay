import { Button, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Habit } from "./HomePage";

const AddNewHabit = ({
  handleClick,
}: {
  handleClick: (inputValue: Habit) => void;
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [addedWithSuccsful, setAddedWithSuccsful] = useState<boolean>(false);

  const addNewHabit = () => {
    if (inputValue.length === 0) {
      return;
    }
    handleClick({
      habit: inputValue,
      data: new Date(),
      streak: [],
      id: Math.random(),
    });
    setAddedWithSuccsful(true);
    setInputValue("");
  };

  return (
    <Flex alignItems="center" justifyContent="center" flexDir="row">
      <Input
        bgColor="purple.600"
        placeholder="Drink every day 🚰🐳"
        size="xl"
        value={inputValue}
        onChange={(e) => {
          if (e.target.value.length) {
            setAddedWithSuccsful(false);
          }
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.code === "Enter") addNewHabit();
        }}
      />
      <Button
        ml="4"
        size="xs"
        onClick={addNewHabit}
        onKeyDown={(e) => {
          if (e.code === "Enter") addNewHabit();
        }}
      >
        Add new habit {addedWithSuccsful ? "☔️" : "☂️"}
      </Button>
    </Flex>
  );
};

export default AddNewHabit;
