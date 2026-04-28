import type { RootState } from '../store';

export const selectHabits = (state: RootState) => state.habits.items;
export const selectIsLoading = (state: RootState) => state.habits.isLoading;
export const selectError = (state: RootState) => state.habits.isError;
