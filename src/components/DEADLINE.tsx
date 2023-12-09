interface DEADLINEProps {
  className?: string;
}

export default function DEADLINE({ className, ...porps }: DEADLINEProps) {
  return (
    <h1
      className={`text-3xl tracking-title  pl-4 ${className}`}
      {...porps}>
      DEADLINE
    </h1>
  );
}
