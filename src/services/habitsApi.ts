import axios from 'axios';
import type { Habit, HabitPost } from '../types/types';

axios.defaults.baseURL = 'https://69ef11659163f839f893700b.mockapi.io/api';

export const fetchHabits = async () => {
  const { data } = await axios.get<Habit[]>('/habits');
  return data;
};

export const deleteHabit = async (id: Habit['id']) => {
  const { data } = await axios.delete<Habit>(`habits/${id}`);
  return data;
};

export const toggleHabit = async (habit: Habit) => {
  const { data } = await axios.put<Habit>(`habits/${habit.id}`, {
    isCompleted: !habit.isCompleted,
  });
  return data;
};

export const addHabit = async (habit: HabitPost) => {
  const { data } = await axios.post<Habit>('/habits', habit);
  return data;
};
