import { useDispatch } from 'react-redux';

import type { AppDispatch } from '../../redux/store';
import { addhabitOperation } from '../../redux/habits/habitsOperation';
import type { HabitPost } from '../../types/types';

export const AddNewHabitForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const submitHandler = (formData: FormData) => {
    const title = formData.get('title') as string;
    const habitTitle = title.trim();
    if (habitTitle === '') {
      return;
    }

    const newHabit: HabitPost = {
      title,
      isCompleted: false,
    };

    dispatch(addhabitOperation(newHabit));
  };

  return (
    <form action={submitHandler}>
      <input name="title" type="text" />
      <button>add</button>
    </form>
  );
};
