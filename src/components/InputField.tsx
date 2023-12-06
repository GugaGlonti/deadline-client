interface InputFieldProps {
  label: string;
  type: 'text' | 'password';
  value: string;
  onChange: (value: string) => void;
  className?: string;
  color?: 'pink' | 'yellow' | 'green' | 'blue' | 'purple';
}

export default function InputField({ label, type, value, onChange, className = '', color = 'pink', ...props }: InputFieldProps) {
  return (
    <div
      className={`flex flex-col ${className}`}
      {...props}>
      <label className='text-sm'>{label}</label>
      <input
        className={`
        py-2 px-4 border-b-4 rounded-md
        ${color === 'pink' && 'border-pink-dark hover:bg-pink-light caret-pink'}
        ${color === 'yellow' && 'border-yellow-dark hover:bg-yellow-light caret-yellow'}
        ${color === 'blue' && 'border-blue-dark hover:bg-blue-light caret-blue'}
        ${color === 'green' && 'border-green-dark hover:bg-green-light caret-green'}
        ${color === 'purple' && 'border-purple-dark hover:bg-purple-light caret-purple'}
        `}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
