import Card from '../cards/Card';

export default function Dashboard() {
  const selection = [
    <Card
      title='Mathe AB'
      subject='Mathe für Info III'
      description='lorem ipsum dolor sit amet'
      color='red'
    />,
    <Card
      title='AlDat AB'
      subject='Algorithmen und Datenstrukturen'
      description='lorem ipsum dolor sit amet'
      color='green'
    />,
    <Card
      title='Info AB'
      subject='Informatik'
      description='lorem ipsum dolor sit amet'
      color='blue'
    />,
    <Card
      title='Rechnernetze AB'
      subject='Rechnernetze'
      description='lorem ipsum dolor sit amet'
      color='yellow'
    />,
    <Card
      title='Data Science AB'
      subject='Data Science'
      description='lorem ipsum dolor sit amet'
      color='green'
    />,
  ];

  const randomSelectionWithMultipliedAmount = selection
    .map(card => [card, card, card])
    .flat()
    .sort(() => Math.random() - 0.5);

  return (
    <div className='w-full'>
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
