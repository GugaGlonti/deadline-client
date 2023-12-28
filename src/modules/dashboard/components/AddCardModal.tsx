import { useState } from 'react';

import { RxCross2 } from 'react-icons/rx';

import { auth } from '../../../config/firebase.config';

import useSetDeadlines from '../hooks/useSetDeadlines';

import InputField from '../../../components/InputField';
import Button from '../../../components/Button';

interface AddCardModalProps {
  className?: string;
  open?: boolean;
  onClose: () => void;
}

export default function AddCardModal({ open, onClose, className, ...props }: AddCardModalProps) {
  const [singleOccurrence, setSingleOccurrence] = useState(true);

  const [title, setTitle] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [occurrences, setOccurences] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');

  const { setDeadlines } = useSetDeadlines();

  if (!open) return null;

  // prettier-ignore
  function clearData() {
    setTitle('');   setSubject(''); setDescription('');   setOccurences('');
    setTime('');    setDate('');    setSingleOccurrence(true);
  }

  type Click = React.MouseEvent<HTMLDivElement, MouseEvent>;
  const outsideClickCloseModal = (e: Click) => e.target === e.currentTarget && closeModal();
  const foreCloseModal = () => closeModal();

  function closeModal() {
    clearData();
    onClose();
  }

  async function submitHandler() {
    const doc: Deadline = {
      userId: auth.currentUser!.uid,
      title,
      subject,
      description,
      date: new Date(`${date} ${time}`),
      singleOccurrence,
      occurrences: singleOccurrence ? 1 : Number(occurrences),
    };

    await setDeadlines(doc);
    closeModal();
  }

  return (
    <>
      <div
        onClick={outsideClickCloseModal}
        className={`${className} z-10 fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50`}
        {...props}>
        <div className={`z-20 absolute bg-white w-1/2 rounded-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
          <div className='bg-green-light rounded-t-2xl flex justify-between items-center px-8 py-4'>
            <h1 className='text-gray-900'>Add a Deadline or a Task</h1>
            <div
              onClick={foreCloseModal}
              className='rounded-full p-1 hover:bg-green hover:text-green-dark'>
              <RxCross2 className='w-8 h-8 text-green-dark' />
            </div>
          </div>
          <div>
            {/** @tabs */}
            <div className='flex h-8 justify-around items-center bg-green text-white'>
              <h1>Basic Deadline</h1>
            </div>
            {/** @content */}
            <div className='p-8 flex flex-col gap-16'>
              <div className='flex justify-between gap-8 flex-col lg:flex-row'>
                <InputField
                  className='w-full'
                  placeholder='Add Title'
                  onChange={setTitle}
                />
                <InputField
                  className='w-full'
                  placeholder='Add Subject'
                  onChange={setSubject}
                />
              </div>

              <div className='flex justify-between gap-8 flex-col lg:flex-row'>
                <InputField
                  className='w-full'
                  type='date'
                  onChange={setDate}
                />
                <InputField
                  className='w-full'
                  type='time'
                  onChange={setTime}
                />
              </div>

              <div className='flex justify-between gap-8 flex-col lg:flex-row'>
                {!singleOccurrence ? (
                  <InputField
                    type='number'
                    placeholder='Occurences'
                    onChange={setOccurences}
                  />
                ) : (
                  <div />
                )}
                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    className='w-6 h-6 accent-green-dark m-6'
                    checked={singleOccurrence}
                    onChange={() => setSingleOccurrence(prev => !prev)}
                  />
                  <h1 className='text-gray-400'>One Time</h1>
                </div>
              </div>

              <InputField
                placeholder='Add Description'
                onChange={setDescription}
              />
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
