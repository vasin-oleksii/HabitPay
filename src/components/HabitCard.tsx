import { useState, useEffect } from 'react';
import { Habit, HabitStats } from '../types/habit';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Progress } from './ui/progress';

interface HabitCardProps {
  habit: Habit;
  onToggle: (habitId: string, date: Date) => void;
}

const calculateStats = (habit: Habit): HabitStats => {
  const today = new Date();
  const startDate = new Date(habit.createdAt);
  const totalDays = Math.ceil((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  const completedDays = habit.completedDates.length;
  
  let streak = 0;
  let currentStreak = 0;
  const sortedDates = [...habit.completedDates].sort((a, b) => b.getTime() - a.getTime());
  
  if (sortedDates.length > 0) {
    const lastCompleted = new Date(sortedDates[0]);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (lastCompleted.toDateString() === today.toDateString() || 
        lastCompleted.toDateString() === yesterday.toDateString()) {
      currentStreak = 1;
      let checkDate = new Date(lastCompleted);
      
      for (let i = 1; i < sortedDates.length; i++) {
        checkDate.setDate(checkDate.getDate() - 1);
        if (sortedDates[i].toDateString() === checkDate.toDateString()) {
          currentStreak++;
        } else {
          break;
        }
      }
    }
  }
  
  streak = currentStreak;
  
  return {
    totalDays,
    completedDays,
    streak,
    lastCompleted: sortedDates[0]
  };
};

export const HabitCard = ({ habit, onToggle }: HabitCardProps) => {
  const [stats] = useState<HabitStats>(() => calculateStats(habit));
  const [progress, setProgress] = useState(0);
  const today = new Date();
  const isCompletedToday = habit.completedDates.some(
    date => date.toDateString() === today.toDateString()
  );
  
  const completionRate = (stats.completedDays / stats.totalDays) * 100;
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(completionRate);
    }, 100);
    return () => clearTimeout(timer);
  }, [completionRate]);

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{habit.name}</span>
          <Checkbox
            checked={isCompletedToday}
            onCheckedChange={() => onToggle(habit.id, today)}
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span>Прогресс</span>
              <span>{Math.round(completionRate)}%</span>
            </div>
            <Progress value={progress} className="transition-all duration-500" />
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">{stats.streak}</div>
              <div className="text-sm text-muted-foreground">Дней подряд</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.completedDays}</div>
              <div className="text-sm text-muted-foreground">Выполнено</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.totalDays}</div>
              <div className="text-sm text-muted-foreground">Всего дней</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 