import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Habit, HabitPost } from '../../types/types';
import {
  addHabit,
  deleteHabit,
  fetchHabits,
  toggleHabit,
} from '../../services/habitsApi';

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

export const toggleHabitOperation = createAsyncThunk<Habit, Habit['id']>(
  'habits/toggleHabit',
  async (id, { rejectWithValue }) => {
    try {
      const habit = await toggleHabit(id);
      return habit;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addhabitOperation = createAsyncThunk<HabitPost, HabitPost>(
  'habits/addHabit',
  async (item, { rejectWithValue }) => {
    try {
      const habit = addHabit(item);
      return habit;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
