interface SignInWithButtonProps {
  provider: 'Google' | 'Github';
  onClick: () => void;
  className?: string;
  src?: string;
}
export default function SignInWithButton({ provider, onClick, className = '', src = '', ...props }: SignInWithButtonProps) {
  return (
    <button
      className={`rounded-full bg-white py-4 px-8 flex justify-between gap-4 items-center ${className}}`}
      onClick={onClick}
      {...props}>
      <img
        className='w-8 h-8'
        src={src}
        alt={`${provider} Logo`}
      />
      Sign In with {provider}
    </button>
  );
}
