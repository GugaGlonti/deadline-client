interface InputFieldProps {
  label: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'tel' | 'url' | 'search';
  name?: string;
  autoComplete?: string;
  placeholder?: string;
  id?: string;
  value?: string;
  required?: boolean;
  onChange?: (value: string) => void;
  className?: string;
  color?: 'pink' | 'yellow' | 'green' | 'blue' | 'purple';
}

export default function InputField({ label, type = 'text', name = '', id = '', autoComplete = '', placeholder = '', required = false, value, onChange = () => {}, className = '', color = 'pink', ...props }: InputFieldProps) {
  return (
    <div
      className={`flex flex-col ${className}`}
      {...props}>
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
      <input
        className={`
        py-2 px-4 border-b-4 rounded-md
        ${color === 'pink' && 'border-pink-dark hover:bg-pink-light caret-pink text-pink-dark outline-pink-dark'}
        ${color === 'yellow' && 'border-yellow-dark hover:bg-yellow-light caret-yellow text-yellow-dark outline-yellow-dark'}
        ${color === 'blue' && 'border-blue-dark hover:bg-blue-light caret-blue text-blue-dark outline-blue-dark'}
        ${color === 'green' && 'border-green-dark hover:bg-green-light caret-green text-green-dark outline-green-dark'}
        ${color === 'purple' && 'border-purple-dark hover:bg-purple-light caret-purple text-purple-dark outline-purple-dark'}
        `}
        id={id}
        type={type}
        name={name}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
