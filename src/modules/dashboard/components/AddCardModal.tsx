import { RxCross2 } from 'react-icons/rx';

interface AddCardModalProps {
  className?: string;
  open?: boolean;
  onClose: () => void;
}

export default function AddCardModal({ open, onClose, className, ...props }: AddCardModalProps) {
  if (!open) return null;

  type Click = React.MouseEvent<HTMLDivElement, MouseEvent>;
  const closeModal = (e: Click) => e.target === e.currentTarget && onClose();

  return (
    <>
      <div
        className={`${className} z-10
        fixed top-0 left-0 w-screen h-screen
        bg-black bg-opacity-50`}
        {...props}
        onClick={closeModal}>
        <div
          className={`z-20
          absolute bg-white w-1/2 h-1/2 rounded-2xl
          top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
          <div
            className='bg-yellow-light rounded-t-2xl
            flex justify-between items-center px-8 py-4'>
            <h1 className='text-yellow-dark'>Add a Deadline or a Task</h1>
            <div
              onClick={() => onClose()}
              className='rounded-full p-1 hover:bg-yellow hover:text-yellow-dark'>
              <RxCross2 className='w-8 h-8 text-yellow-dark' />
            </div>
          </div>
          <div>
            <h1>TEST</h1>
          </div>
        </div>
      </div>
    </>
  );
}
