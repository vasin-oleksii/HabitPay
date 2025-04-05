import { Box } from "@chakra-ui/react";

const SelectHabit = ({ allHabits }: { allHabits: string[] }) => {
  return (
    <Box mt="4">
      <select name="habitSelect" id="habitSelect">
        {allHabits.map((el, i) => (
          <option key={i} value={el}>
            {el}
          </option>
        ))}
      </select>
    </Box>
  );
};

export default SelectHabit;
