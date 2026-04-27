import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Habit } from '../../types/types';
import { deleteHabit, fetchHabits } from '../../services/habitsApi';

export const getHabitOperation = createAsyncThunk<Habit[], void>(
  'habits/getHabits',
  async (_, { rejectWithValue }) => {
    try {
      const habits = await fetchHabits();
      return habits;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteHabitOperation = createAsyncThunk<Habit, Habit['id']>(
  'habits/deleteHabit',
  async (id, { rejectWithValue }) => {
    try {
      const habit = await deleteHabit(id);
      return habit;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
