import { useEffect, useState } from 'react';

import Card from '../cards/Card';
import AddCard from './components/AddCard';
import AddCardModal from './components/AddCardModal';

import { Deadline } from '../../types/Deadline';
import { FirestoreService } from '../../services/firestore.service';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deadlines, setDeadlines] = useState<Deadline[]>([]);
  const [refresh, triggerRefresh] = useState(true);

  useEffect(() => {
    FirestoreService.getCollection('deadlines', setDeadlines);
  }, [refresh]);

  const openModal = () => setIsModalOpen(true);
  const onClose = () => setIsModalOpen(false);

  return (
    <div className='w-full h-fill'>
      <div className='flex flex-wrap justify-evenly'>
        {deadlines.map((deadline, index) => (
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
        onUpdate={triggerRefresh}
      />
      <AddCard onClick={openModal} />
    </div>
  );
}
