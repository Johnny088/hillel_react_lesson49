import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import type { Habit } from '../../types/types';
import {
  addhabitOperation,
  deleteHabitOperation,
  getHabitOperation,
  toggleHabitOperation,
} from './habitsOperation';

interface HabitState {
  items: Habit[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: HabitState = {
  items: [],
  isLoading: false,
  isError: false,
};

const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getHabitOperation.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(deleteHabitOperation.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
      })
      .addCase(toggleHabitOperation.fulfilled, (state, { payload }) => {
        state.items = state.items.map(item =>
          item.id === payload.id
            ? { ...item, isCompleted: !item.isCompleted }
            : item,
        );
      })
      .addCase(addhabitOperation.fulfilled, (state, { payload }) => {
        state.items.push(payload); // = [...state.items, ...payload]
      })
      .addMatcher(
        isAnyOf(
          getHabitOperation.pending,
          deleteHabitOperation.pending,
          toggleHabitOperation.pending,
          addhabitOperation.pending,
        ),
        state => {
          state.isLoading = true;
        },
      )
      .addMatcher(
        isAnyOf(
          getHabitOperation.fulfilled,
          deleteHabitOperation.fulfilled,
          toggleHabitOperation.fulfilled,
          addhabitOperation.fulfilled,
        ),
        state => {
          state.isLoading = false;
          state.isError = false;
        },
      )
      .addMatcher(
        isAnyOf(
          getHabitOperation.rejected,
          deleteHabitOperation.rejected,
          toggleHabitOperation.rejected,
          addhabitOperation.rejected,
        ),
        state => {
          state.isLoading = false;
          state.isError = true;
        },
      ),
});

export default habitsSlice.reducer;
