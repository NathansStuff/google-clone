import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import { useRef } from 'react'
import Image from 'next/image'

import Footer from '../components/Footer'
import Avatar from '../components/Avatar'
import { useRouter } from 'next/router'

export default function Home() {
  const searchInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const search = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const term = searchInputRef.current?.value
    if (!term) return
    router.push(`/search?term=${term}`)
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {/* Header */}
      <header className="flex w-full justify-between p-5">
        {/* Left */}
        <div className="flex items-center space-x-4">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* Right */}
        <div className="flex items-center space-x-4">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 cursor-pointer rounded-full p-2 hover:bg-gray-100" />
          <Avatar url="https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg" />
        </div>
      </header>
      {/* Body */}
      <form className="mt-44 flex w-4/5 flex-grow flex-col items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
          height={100}
          width={300}
        />
        <div className="mt-5 flex w-full max-w-md items-center rounded-full border border-gray-200 px-5 py-3 focus-within:shadow-lg hover:shadow-lg sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="mr-3 h-5 text-gray-500" />
          <input
            type="text"
            className="flex-grow focus:outline-none"
            ref={searchInputRef}
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="mt-8 flex w-1/2 flex-col justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
          <button className="btn" onClick={search}>
            Google Search
          </button>
          <button className="btn" onClick={search}>
            I'm feeling lucky
          </button>
        </div>
      </form>
      <Footer />
    </div>
  )
}
