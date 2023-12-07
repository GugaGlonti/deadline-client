import Card from '../cards/Card';

export default function Dashboard() {
  function randomColor() {
    const colors = ['red', 'green', 'blue', 'yellow', 'gray'];
    const randomIndex = Math.trunc(Math.random() * 4);
    return colors[randomIndex] as 'red' | 'green' | 'blue' | 'yellow' | 'gray';
  }

  const selection = [
    <Card
      title='Mathe AB'
      subject='Mathe für Info III'
      description='lorem ipsum dolor sit amet'
      color={randomColor()}
    />,
    <Card
      title='AlDat AB'
      subject='Algorithmen und Datenstrukturen'
      description='lorem ipsum dolor sit amet'
      color={randomColor()}
    />,
    <Card
      title='Info AB'
      subject='Informatik'
      description='lorem ipsum dolor sit amet'
      color={randomColor()}
    />,
    <Card
      title='Rechnernetze AB'
      subject='Rechnernetze'
      description='lorem ipsum dolor sit amet'
      color={randomColor()}
    />,
    <Card
      title='Data Science AB'
      subject='Data Science'
      description='lorem ipsum dolor sit amet'
      color={randomColor()}
    />,
  ];

  const randomSelectionWithMultipliedAmount = selection
    .map(card => Array(5).fill(card))
    .flat()
    .sort(() => Math.random() - 0.5);

  return (
    <div className='w-full h-fill'>
      <div className='flex flex-col'>
        <>
          <div className='flex flex-wrap justify-evenly'>
            {randomSelectionWithMultipliedAmount.map((card, index) => (
              <div
                key={index}
                className='m-8'>
                {card}
              </div>
            ))}
          </div>
        </>
      </div>
    </div>
  );
}
