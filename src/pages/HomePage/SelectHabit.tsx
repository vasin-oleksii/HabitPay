import { Flex, Text } from "@chakra-ui/react";

import { FaDeleteLeft } from "react-icons/fa6";
import { Habit } from "./HomePage";

const SelectHabit = ({
  allHabits,
  handleClick,
  currentHabit,
  handleDelete,
}: {
  allHabits: Habit[];
  handleClick: (habit: Habit) => void;
  currentHabit: Habit;
  handleDelete: (habit: number) => void;
}) => {
  return (
    <Flex mt="4" flexDir="row" width="50vw" overflowX="auto">
      {allHabits.map((el, i) => {
        const isCurrentClicked = currentHabit.id === el.id;

        return (
          <Flex
            key={i}
            py="2"
            px="4"
            borderWidth="1px"
            borderRadius="md"
            mb="2"
            bgColor={isCurrentClicked ? "green.400" : "#6D28D9"}
            mr="2"
            onClick={() => handleClick(el)}
            cursor="pointer"
            alignItems="center"
            justify="center"
            flexDir="row"
          >
            <Text>{el.habit}</Text>
            {isCurrentClicked && (
              <Flex
                ml="1"
                _hover={{
                  color: "red.400",
                }}
                onClick={() => handleDelete(el.id)}
              >
                <FaDeleteLeft />
              </Flex>
            )}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default SelectHabit;
