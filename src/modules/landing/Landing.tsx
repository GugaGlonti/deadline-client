export default function Landing() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h1 className='text-4xl font-bold'>Welcome to Deadline</h1>

      <p className='mt-4 text-lg text-gray-500'>Manage deadlines easily and efficiently</p>

      <div className='flex mt-8'>
        <button className='px-4 py-2 text-lg font-bold text-blue-500 bg-white rounded-lg'>Go To Dashboard</button>
      </div>
    </div>
  );
}
