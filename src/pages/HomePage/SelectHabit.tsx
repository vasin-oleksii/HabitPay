import { Flex, Text } from "@chakra-ui/react";

import { FaDeleteLeft } from "react-icons/fa6";

const SelectHabit = ({
  allHabits,
  handleClick,
  currentHabit,
  handleDelete,
}: {
  allHabits: string[];
  handleClick: (habit: string) => void;
  currentHabit: string;
  handleDelete: (habit: string) => void;
}) => {
  return (
    <Flex mt="4" flexDir="row" width="50vw" overflowX="auto">
      {allHabits.map((el, i) => {
        const isCurrentClicked = currentHabit === el;

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
            <Text>{el}</Text>
            {isCurrentClicked && (
              <Flex
                ml="1"
                _hover={{
                  color: "red.400",
                }}
                onClick={() => handleDelete(el)}
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
