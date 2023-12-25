import { SlLogin, SlLogout } from 'react-icons/sl';

interface ButtonProps {
  text: string;
  onClick: () => unknown;
  color?: 'pink' | 'yellow' | 'green' | 'blue' | 'purple';
  rounded?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function Button({ text, onClick, color = 'green', className = '', children, ...props }: ButtonProps) {
  const colors = {
    pink: 'bg-pink hover:bg-pink-dark border-pink-dark',
    yellow: 'bg-yellow hover:bg-yellow-dark border-yellow-dark',
    blue: 'bg-blue hover:bg-blue-dark border-blue-dark',
    green: 'bg-green hover:bg-green-dark border-green-dark',
    purple: 'bg-purple hover:bg-purple-dark border-purple-dark',
  };

  return (
    <button
      className={`py-2 px-4 border-b-4 rounded-md align-middle
      ${colors[color]}
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
