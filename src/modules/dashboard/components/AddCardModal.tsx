import { RxCross2 } from 'react-icons/rx';

import InputField from '../../../components/InputField';
import MultiSelectField from '../../../components/MultiSelectField';
import Button from '../../../components/Button';
import { useState } from 'react';

interface AddCardModalProps {
  className?: string;
  open?: boolean;
  onClose: () => void;
}

interface Data {
  title?: string;
  subject?: string;
  time?: string;
  weekDays?: string[];
  description?: string;
}

export default function AddCardModal({ open, onClose, className, ...props }: AddCardModalProps) {
  const [data, setData] = useState<Data>({});

  if (!open) return null;

  type Click = React.MouseEvent<HTMLDivElement, MouseEvent>;
  const closeModal = (e: Click) => e.target === e.currentTarget && onClose();

  function submitHandler() {
    console.log({
      ...data,
    });
    onClose();
  }

  function setWeekDays(weekDays: string[]) {
    setData(prev => ({ ...prev, weekDays }));
  }

  console.log('data', data.weekDays);

  return (
    <>
      <div
        onClick={closeModal}
        className={`${className} z-10 fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50`}
        {...props}>
        <div className={`z-20 absolute bg-white w-1/2 h-1/2 rounded-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
          <div className='bg-yellow-light rounded-t-2xl flex justify-between items-center px-8 py-4'>
            <h1 className='text-yellow-dark'>Add a Deadline or a Task</h1>
            <div
              onClick={() => onClose()}
              className='rounded-full p-1 hover:bg-yellow hover:text-yellow-dark'>
              <RxCross2 className='w-8 h-8 text-yellow-dark' />
            </div>
          </div>
          <div>
            {/** @tabs */}
            <div className='flex h-8 justify-around items-center bg-yellow text-white'>
              <h1>option1</h1>
              <h1>option2</h1>
              <h1>option3</h1>
            </div>
            {/** @content */}
            <div className='p-8 flex flex-col gap-8'>
              <div className='flex justify-between'>
                <div className='flex flex-col justify-center align-middle gap-4'>
                  <InputField placeholder='Add Title' />
                  <InputField placeholder='Add Subject' />
                </div>
                <div className='flex flex-col justify-center align-middle gap-4'>
                  <InputField
                    type='time'
                    fit
                  />
                  <MultiSelectField
                    options={['Mo', 'Tu', 'We', 'Th', 'Fr', 'Ss', 'Su']}
                    onChange={setWeekDays}
                  />
                </div>
              </div>
              <InputField placeholder='Add Description' />

              <Button
                onClick={submitHandler}
                text='Add Task'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
