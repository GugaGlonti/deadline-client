import { IoAdd } from 'react-icons/io5';

export default function Dashboard() {
  return (
    <div className='w-full'>
      <div className='flex flex-col'>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>

        <IoAdd
          className={`
          h-12 w-12
          text-yellow hover:text-yellow-light bg-yellow-dark
          rounded-full
          `}
        />
      </div>
    </div>
  );
}
