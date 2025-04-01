import { Box, Center, Heading, Button,  VStack, Text } from "@chakra-ui/react";
import React from "react";

const App = () => {
  const [total, setTotal] = React.useState(localStorage.getItem('totalMoney') || '0');
  const [history, setHistory] = React.useState<string[]>(JSON.parse(localStorage.getItem('moneyHistory') || '[]'));

  const handleMoneyChange = (value: string) => {
    const currentMoney = parseInt(localStorage.getItem('totalMoney') || '0');
    const moneyMap = {
      'ruby': 4.5,
      'lateFood': 1,
      'posture': 1,
      'sleep': 1, 
      'reword': 1,
      'tdclub': 1,
      'running': 3,
      'paratage': 2.5
    };
    
    const newTotal = currentMoney + (moneyMap[value as keyof typeof moneyMap] || 0);
    const timestamp = new Date().toLocaleString();
    const historyEntry = `Added €${moneyMap[value as keyof typeof moneyMap]} at ${timestamp}`;
    
    const newHistory = [...history, historyEntry];
    localStorage.setItem('totalMoney', newTotal.toString());
    localStorage.setItem('moneyHistory', JSON.stringify(newHistory));
    
    setTotal(newTotal.toString());
    setHistory(newHistory);
  };

  const clearMoney = () => {
    localStorage.setItem('totalMoney', '0');
    localStorage.setItem('moneyHistory', '[]');
    setTotal('0');
    setHistory([]);
  };

  return (
    <Box p={8} bg="gray.50" minH="100vh">
      <Center>
        <VStack >
          <Heading color="purple.600">Hey 👋 Welcome to HabitPay</Heading>
          <Box 
            bg="white" 
            p={6} 
            borderRadius="lg" 
            boxShadow="md"
            minW="300px"
          >
            <select
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleMoneyChange(e.target.value)}
              bg="white"
              mb={4}
            >
              <option value="">Select an amount...</option>
              <option value="ruby">Ruby (€4.50)</option>
              <option value="lateFood">Еда после 19:00 (€1)</option>
              <option value="posture">Пресс, осанка + шея (€1)</option>
              <option value="sleep">Спать до 00:00 (€1)</option>
              <option value="reword">Reword 5min (€1)</option>
              <option value="tdclub">TDClub 10min (-€1)</option>
              <option value="running">Бег (€3)</option>
              <option value="paratage">ParatageFile (€2.50)</option>
            </select>
            
            <Text fontSize="2xl" fontWeight="bold" color="green.500" mb={4}>
              Total money: €{total}
            </Text>

            {history.length > 0 && (
              <VStack align="stretch" mb={4} maxH="200px" overflowY="auto">
                <Text fontWeight="bold">History:</Text>
                {history.map((entry, index) => (
                  <Text key={index} fontSize="sm" color="gray.600">
                    {entry}
                  </Text>
                ))}
              </VStack>
            )}

            <Button 
              w="full"
              colorScheme="red"
              onClick={clearMoney}
            >
              Clear Money & History
            </Button>
          </Box>
        </VStack>
      </Center>
    </Box>
  );
};

export default App;
