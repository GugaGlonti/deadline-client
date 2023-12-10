import { useState } from 'react';

interface MultiSelectFieldProps {
  className?: string;
  label?: string;
  options: string[];
  color?: 'pink' | 'yellow' | 'green' | 'blue' | 'purple';
  weekDays: string[];
  setWeekDays: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function MultiSelectField({ className, label, options, weekDays, setWeekDays, color = 'green', ...props }: MultiSelectFieldProps) {
  function addSelected(option: string) {
    if (!weekDays.includes(option)) return setWeekDays(prev => [...prev, option]);
    setWeekDays(prev => prev.filter(item => item !== option));
  }

  return (
    <div
      className={className}
      {...props}>
      {!!label && <label>{label}</label>}
      <div className='flex justify-between align-middle h-12 gap-1'>
        {options.map((option, index) => (
          <SingleSelect
            key={index}
            option={option}
            color={color}
            onSelected={addSelected}
            className={`
                h-12 w-12
                flex justify-center items-center
                border-4 rounded-full
              `}
          />
        ))}
      </div>
    </div>
  );
}

interface SingleSelectProps {
  option: string;
  className?: string;
  color?: 'pink' | 'yellow' | 'green' | 'blue' | 'purple';
  onSelected: (option: string) => void;
}

function SingleSelect({ option, onSelected, className, color }: SingleSelectProps) {
  const [selected, setSelected] = useState(false);
  const clickHandler = () => {
    setSelected(prev => !prev);
    onSelected(option);
  };

  return (
    <div
      className={`${className}
      ${color === 'pink' && 'border-pink-dark hover:bg-pink-light caret-pink'}
      ${color === 'yellow' && 'border-yellow-dark hover:bg-yellow-light caret-yellow'}
      ${color === 'blue' && 'border-blue-dark hover:bg-blue-light caret-blue'}
      ${color === 'green' && 'border-green-dark hover:bg-green-light caret-green'}
      ${color === 'purple' && 'border-purple-dark hover:bg-purple-light caret-purple'}

      ${selected && color === 'pink' && 'bg-pink-dark text-white'}
      ${selected && color === 'yellow' && 'bg-yellow-dark text-white'}
      ${selected && color === 'blue' && 'bg-blue-dark text-white'}
      ${selected && color === 'green' && 'bg-green-dark text-white'}
      ${selected && color === 'purple' && 'bg-purple-dark text-white'}
      `}
      onClick={clickHandler}>
      <h1>{option}</h1>
    </div>
  );
}
