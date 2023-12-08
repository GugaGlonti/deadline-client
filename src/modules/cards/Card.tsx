interface CardProps {
  title: string;
  subject: string;
  priority?: number;
  iteration?: [number, number];
  description?: string;
  color?: 'gray' | 'red' | 'green' | 'blue' | 'yellow';
}

export default function Card({ title, subject, description, color = 'gray', priority, iteration }: CardProps) {
  const progressPercentage = Math.trunc(Math.random() * 100);

  return (
    <div className='rounded-md w-96'>
      <div
        className={`h-32 rounded-t-m
        ${color === 'gray' && 'bg-gray-300'}
        ${color === 'red' && 'bg-red-300'}
        ${color === 'green' && 'bg-emerald-300'}
        ${color === 'blue' && 'bg-blue'}
        ${color === 'yellow' && 'bg-yellow'}
        `}>
        <div className='flex justify-between pt-4 px-8'>
          {!!priority && <h1>{priority}</h1>}
          {!!iteration && <h1>{`( ${iteration[0]} / ${iteration[1]} )`}</h1>}
        </div>
      </div>

      <div className='h-1 w-full bg-gray-300'>
        <div
          style={{ width: `${progressPercentage}%` }}
          className={`h-full ${progressPercentage < 70 ? 'bg-red-600' : 'bg-green-600'}`}
        />
      </div>

      <div className='bg-white shadow-md rounded-md p-4'>
        <div className='flex flex-col'>
          <div className='flex justify-between'>
            <h2 className='text-xl font-bold'>{title}</h2>
            <h3 className='text-md font-semibold text-end'>{subject}</h3>
          </div>
          <p className='text-gray-500'>{description}</p>
        </div>
      </div>
    </div>
  );
}
