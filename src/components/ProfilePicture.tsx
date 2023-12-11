interface ProfilePictureProps {
  src: string;
  alt?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function ProfilePicture({ src, alt, className = '', size = 'md', ...props }: ProfilePictureProps) {
  if (!alt) alt = src;

  if (!src) {
    return (
      <div
        className={`
        ${className}
        ${size === 'sm' && 'w-8 h-8'}
        ${size === 'md' && 'w-16 h-16'}
        ${size === 'lg' && 'w-24 h-24'}
        ${size === 'xl' && 'w-32 h-32'}
        rounded-full
        bg-gray-300
        `}
        {...props}
      />
    );
  }

  return (
    <img
      className={`
      ${className}
      ${size === 'sm' && 'w-8 h-8'}
      ${size === 'md' && 'w-16 h-16'}
      ${size === 'lg' && 'w-24 h-24'}
      ${size === 'xl' && 'w-32 h-32'}
      rounded-full
      `}
      alt={alt}
      src={src}
      {...props}
    />
  );
}
