import { useSelector } from 'react-redux';
import { AddNewHabitForm } from '../AddNewHabitForm/AddNewHabitForm';
import { HabitCard } from '../HabitCard/HabitCard';
import { HabitsEmptyState } from '../HabitEmptyState/HabitEmptyState';
import css from './HabitsList.module.css';
import { selectHabits } from '../../redux/habits/habitsSelector';
export const HabitsList = () => {
  const habits = useSelector(selectHabits);
  return (
    <div className={css.container}>
      <h1>Todays tasks</h1>
      {habits.length === 0 ? (
        <HabitsEmptyState />
      ) : (
        <ul>
          {habits.map(habit => (
            <li key={habit.id}>
              <HabitCard item={habit} />
            </li>
          ))}
        </ul>
      )}
      <AddNewHabitForm />
    </div>
  );
};
