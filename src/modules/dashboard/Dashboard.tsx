import { useState } from 'react';

import useDeadlines from './hooks/useDeadlines';

import Card from '../cards/Card';
import AddCard from './components/AddCard';
import AddCardModal from './components/AddCardModal';

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
      <div className='flex flex-wrap justify-evenly p-8 gap-16'>
        {deadlines!.map((deadline, index) => (
          <Card
            key={index}
            title={deadline.title}
            subject={deadline.subject || 'No subject'}
            description={deadline.description}
            color={'red'}
            iteration={[0, 0]}
            priority={0}
          />
        ))}
      </div>
      <AddCardModal
        open={isModalOpen}
        onClose={onClose}
      />
      <AddCard onClick={openModal} />
    </div>
  );
}
