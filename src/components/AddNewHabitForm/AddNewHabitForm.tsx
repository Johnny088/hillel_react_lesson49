import { useDispatch } from 'react-redux';
import { addHabit } from '../../redux/habits/habitsSlice';
import type { AppDispatch } from '../../redux/store';

export const AddNewHabitForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const submitHandler = (formData: FormData) => {
    const title = formData.get('title') as string;
    const habitTitle = title.trim();
    if (habitTitle === '') {
      return;
    }
    dispatch(addHabit(habitTitle));
  };
  return (
    <form action={submitHandler}>
      <input name="title" type="text" />
      <button>add</button>
    </form>
  );
};
