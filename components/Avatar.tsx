interface Props {
  url: string;
}

function Avatar({ url }: Props) {
  return (
    <img
      loading='lazy'
      src={url}
      alt='profile pic'
      className='h-10 rounded-full w-10 transition duration-150 transform hover:scale-110 cursor-pointer'
    />
  );
}

export default Avatar;
