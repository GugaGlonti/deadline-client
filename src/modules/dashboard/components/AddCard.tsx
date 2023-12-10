import { GrAdd } from 'react-icons/gr';

interface AddCardProps {
  className?: string;
  onClick?: () => void;
}

export default function AddCard({ className, onClick, ...props }: AddCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
      ${className}
      fixed bottom-16 right-16
      border-2 border-green-dark rounded-full
      `}
      {...props}>
      <GrAdd
        className={`
        w-20 h-20 rounded-full p-2
        bg-green text-green-light
        hover:bg-green-dark
        `}
      />
    </div>
  );
}
