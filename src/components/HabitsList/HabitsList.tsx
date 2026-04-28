import { useDispatch, useSelector } from 'react-redux';
import { AddNewHabitForm } from '../AddNewHabitForm/AddNewHabitForm';
import { HabitCard } from '../HabitCard/HabitCard';
import { HabitsEmptyState } from '../HabitEmptyState/HabitEmptyState';
import css from './HabitsList.module.css';
import { useEffect } from 'react';
import { getHabitOperation } from '../../redux/habits/habitsOperation';
import {
  selectError,
  selectHabits,
  selectIsLoading,
} from '../../redux/habits/habitsSelector';
import type { AppDispatch } from '../../redux/store';
import { HabitLoadingState } from '../HabitLoadingState/HabitLoadingState';
import { HabitErrorState } from '../HabitErrorState/HabitErrorState';

export const HabitsList = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const habits = useSelector(selectHabits);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getHabitOperation());
  }, []);

  return (
    <div className={css.container}>
      {isLoading && <HabitLoadingState />}
      {!isLoading &&
        !isError &&
        (habits.length === 0 ? (
          <HabitsEmptyState />
        ) : (
          <>
            <h1>Todays tasks</h1>
            <ul className={css.list}>
              {habits.map(habit => (
                <li key={habit.id}>
                  <HabitCard item={habit} />
                </li>
              ))}
            </ul>
            <AddNewHabitForm />
          </>
        ))}
      {isError && <HabitErrorState />}
    </div>
  );
};
