import { useState } from 'react';
import Card from '../cards/Card';

import AddCard from './components/AddCard';
import AddCardModal from './components/AddCardModal';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const randomSelectionWithMultipliedAmount = selection
    .map(card => Array(0).fill(card))
    .flat()
    .sort(() => Math.random() - 0.5);

  const openModal = () => setIsModalOpen(true);
  const onClose = () => setIsModalOpen(false);

  return (
    <div className='w-full h-fill'>
      <div className='flex flex-wrap justify-evenly'>
        {randomSelectionWithMultipliedAmount.map((card, index) => (
          <div
            key={index}
            className='m-8'>
            {card}
          </div>
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

function randomColor() {
  const colors = ['red', 'green', 'blue', 'yellow', 'gray'];
  const randomIndex = Math.trunc(Math.random() * 4);
  return colors[randomIndex] as 'red' | 'green' | 'blue' | 'yellow' | 'gray';
}

const selection = [
  <Card
    title='Mathe AB'
    subject='Mathe für Info III'
    description='lorem ipsum dolor sit amet lorem'
    color={randomColor()}
    iteration={[1, 1]}
  />,
  <Card
    title='AlDat AB ____ ____'
    subject='Algorithmen und Datenstrukturen'
    description='lorem ipsum dolor sit amet lorem ipsum'
    color={randomColor()}
    iteration={[1, 2]}
    priority={1}
  />,
  <Card
    title='Info AB'
    subject='Informatik'
    description='lorem ipsum dolor sit amet lorem ipsum dolo'
    color={randomColor()}
    priority={2}
  />,
  <Card
    title='Rechnernetze AB'
    subject='Rechnernetze'
    description='lorem ipsum dolor sit amet lor sit amet sad lorem ipsum dolor sit amet'
    color={randomColor()}
    iteration={[8, 12]}
  />,
  <Card
    title='Data Science AB'
    subject='Data Science'
    description='lorem ipsum dolor sit amet lorem ipsum dolor sit amet sad lorem ipsum dolor sit amet sad lorem ipsum dolor sit amet sad'
    color={randomColor()}
    priority={3}
  />,
];
