import Card from '../../cards/Card';

interface DeadlinesProps {
  deadlines: Deadline[];
}
export function Deadlines({ deadlines }: DeadlinesProps) {
  return (
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
  );
}
