import { SlLogin, SlLogout } from 'react-icons/sl';

interface ButtonProps {
  text: string;
  onClick: () => unknown;
  color?: 'pink' | 'yellow' | 'green' | 'blue' | 'purple';
  rounded?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function Button({ text, onClick, color = 'pink', className = '', children, ...props }: ButtonProps) {
  return (
    <button
      className={`py-2 px-4 border-b-4 rounded-md align-middle
      ${color === 'pink' && 'bg-pink hover:bg-pink-dark border-pink-dark'}
      ${color === 'yellow' && 'bg-yellow hover:bg-yellow-dark border-yellow-dark'}
      ${color === 'blue' && 'bg-blue hover:bg-blue-dark border-blue-dark'}
      ${color === 'green' && 'bg-green hover:bg-green-dark border-green-dark'}
      ${color === 'purple' && 'bg-purple hover:bg-purple-dark border-purple-dark'}
      ${className}`}
      onClick={onClick}
      {...props}>
      {text}
      {text === 'Sign In' && <SlLogout className='inline-block ml-2' />}
      {text === 'Sign Out' && <SlLogin className='inline-block ml-2' />}
      {children}
    </button>
  );
}
