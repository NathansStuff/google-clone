interface Props {
  url: string;
  className?: string
}

function Avatar({ url, className }: Props) {
  return (
    <img
      loading='lazy'
      src={url}
      alt='profile pic'
      className={`h-10 rounded-full w-10 transition duration-150 transform hover:scale-110 cursor-pointer ${className}`}
    />
  );
}

export default Avatar;
