import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import Avatar from '../components/Avatar';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {/* Header */}
      <header className='flex w-full p-5 justify-between'>
        {/* Left */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>
        {/* Right */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer' />
          <Avatar url='https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg' />
        </div>
      </header>
      {/* Body */}
      <form className='flex flex-col items-center mt-44 flex-grow w-4/5'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png'
          className='h-[100px] w-[300px]'
          alt=''
        />
        <div className='w-full flex mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 mr-3 text-gray-500' />
          <input type='text' className='focus:outline-none flex-grow' />
          <MicrophoneIcon className='h-5' />
        </div>
        <div className='flex flex-col sm:flex-row w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:space-x-4'>
          <button className='btn'>Google Search</button>
          <button className='btn'>I'm feeling lucky</button>
        </div>
      </form>
    </div>
  );
}
