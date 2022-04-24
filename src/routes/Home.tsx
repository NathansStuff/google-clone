import Avatar from '../components/Avatar';

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className='flex w-full p-5 justify-between'>
        {/* Left */}
        <div className='flex space=x=4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>
        {/* Right */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
          {/* Icon */}
          <Avatar url='https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg' />
        </div>
      </header>
    </>
  );
}
