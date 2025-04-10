import { useState } from 'react';
import { Habit } from '../types/habit';
import { HabitCard } from '../components/HabitCard';
import { AddHabitDialog } from '../components/AddHabitDialog';

export const HabitsPage = () => {
  const [habits, setHabits] = useState<Habit[]>([
    {
      id: '1',
      name: 'Утренняя зарядка',
      description: '15 минут упражнений',
      createdAt: new Date('2024-01-01'),
      completedDates: []
    },
    {
      id: '2',
      name: 'Чтение',
      description: '30 минут чтения',
      createdAt: new Date('2024-01-01'),
      completedDates: []
    }
  ]);

  const handleToggleHabit = (habitId: string, date: Date) => {
    setHabits(prevHabits => {
      return prevHabits.map(habit => {
        if (habit.id === habitId) {
          const isCompleted = habit.completedDates.some(
            d => d.toDateString() === date.toDateString()
          );
          
          return {
            ...habit,
            completedDates: isCompleted
              ? habit.completedDates.filter(d => d.toDateString() !== date.toDateString())
              : [...habit.completedDates, date]
          };
        }
        return habit;
      });
    });
  };

  const handleAddHabit = ({ name, description }: { name: string; description: string }) => {
    const newHabit: Habit = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      description,
      createdAt: new Date(),
      completedDates: []
    };
    setHabits(prev => [...prev, newHabit]);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Мои привычки</h1>
        <AddHabitDialog onAdd={handleAddHabit} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {habits.map(habit => (
          <HabitCard
            key={habit.id}
            habit={habit}
            onToggle={handleToggleHabit}
          />
        ))}
      </div>
    </div>
  );
}; 