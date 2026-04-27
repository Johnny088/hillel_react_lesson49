import { useDispatch } from 'react-redux';
import type { Habit } from '../../types/types';
import css from './HabitCard.module.css';
import { removeHabit, toggleHabit } from '../../redux/habits/habitsSlice';

interface Props {
  item: Habit;
}
export const HabitCard = ({ item }: Props) => {
  const dispatch = useDispatch();
  const onChangeStatus = (): void => {
    dispatch(toggleHabit(item.id));
  };

  const removeHabitHandler = () => {
    dispatch(removeHabit(item.id));
  };
  return (
    <>
      <label>
        {item.title}
        <input
          type="checkbox"
          checked={item.isChecked}
          onChange={onChangeStatus}
        />
      </label>
      <button className={css.deleteBtn} onClick={removeHabitHandler}>
        delete
      </button>
    </>
  );
};
