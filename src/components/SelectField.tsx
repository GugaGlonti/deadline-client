interface SelectFieldProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  color?: 'pink' | 'yellow' | 'green' | 'blue' | 'purple';
  options?: string[];
}

export default function SelectField({ label, value, onChange, className = '', color = 'green', options = ['Add Options'], ...props }: SelectFieldProps) {
  return (
    <div
      className={`flex flex-col ${className}`}
      {...props}>
      {!!label && (
        <label
          className={`
          text-sm font-semibold
          ${color === 'pink' && 'text-pink-dark'}
          ${color === 'yellow' && 'text-yellow-dark'}
          ${color === 'blue' && 'text-blue-dark'}
          ${color === 'green' && 'text-green-dark'}
          ${color === 'purple' && 'text-purple-dark'}
        `}>
          {label}
        </label>
      )}
      <select
        className={`
        py-2 px-4 border-b-4 rounded-md
        ${color === 'pink' && 'border-pink-dark hover:bg-pink-light caret-pink'}
        ${color === 'yellow' && 'border-yellow-dark hover:bg-yellow-light caret-yellow'}
        ${color === 'blue' && 'border-blue-dark hover:bg-blue-light caret-blue'}
        ${color === 'green' && 'border-green-dark hover:bg-green-light caret-green'}
        ${color === 'purple' && 'border-purple-dark hover:bg-purple-light caret-purple'}
        `}
        value={value}
        onChange={e => onChange(e.target.value)}>
        {options.map((option, index) => (
          <option
            key={index}
            value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
