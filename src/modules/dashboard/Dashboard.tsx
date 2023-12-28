import { useState } from 'react';

import useDeadlines from './hooks/useDeadlines';

import AddCard from './components/AddCard';
import AddCardModal from './components/AddCardModal';
import Alert from '../../components/Alert';
import { Deadlines } from './components/Deadlines';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const onClose = () => setIsModalOpen(false);

  const { deadlines, isLoading } = useDeadlines();

  if (isLoading) {
    return <div className='w-full h-fill flex items-center justify-center'>Loading...</div>;
  }

  return (
    <div className='w-full h-fill'>
      {!deadlines?.length && (
        <Alert
          text='You have no deadlines'
          className='mt-16'
        />
      )}
      <Deadlines deadlines={deadlines!} />
      <AddCardModal
        open={isModalOpen}
        onClose={onClose}
      />
      <AddCard onClick={openModal} />
    </div>
  );
}
