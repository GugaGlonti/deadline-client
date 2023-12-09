import { useNavigate } from 'react-router';

interface DEADLINEProps {
  className?: string;
}

export default function DEADLINE({ className, ...porps }: DEADLINEProps) {
  const navigate = useNavigate();

  function clickHandler() {
    navigate('/');
  }

  return (
    <h1
      onClick={clickHandler}
      className={`text-3xl tracking-title  pl-4 ${className}`}
      {...porps}>
      DEADLINE
    </h1>
  );
}
