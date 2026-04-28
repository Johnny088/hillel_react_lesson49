import { useDispatch } from 'react-redux';
import type { Habit } from '../../types/types';
import css from './HabitCard.module.css';
import {
  deleteHabitOperation,
  toggleHabitOperation,
} from '../../redux/habits/habitsOperation';
import type { AppDispatch } from '../../redux/store';

interface Props {
  item: Habit;
}
export const HabitCard = ({ item }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const onChangeStatus = (): void => {
    dispatch(toggleHabitOperation(item.id));
  };

  const removeHabitHandler = () => {
    dispatch(deleteHabitOperation(item.id));
  };
  return (
    <>
      <label>
        {item.title}
        <input
          type="checkbox"
          checked={item.isCompleted}
          onChange={onChangeStatus}
        />
      </label>
      <button className={css.deleteBtn} onClick={removeHabitHandler}>
        delete
      </button>
    </>
  );
};
