export interface Habit {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
  completedDates: Date[];
}

export interface HabitStats {
  totalDays: number;
  completedDays: number;
  streak: number;
  lastCompleted?: Date;
} 