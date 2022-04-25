import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'

export default function Header() {
  const router = useRouter()
  const searchInputRef = useRef<HTMLInputElement>(null)

  const search = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const term = searchInputRef.current?.value
    if (!term) return
    router.push(`/search?term=${term}`)
  }

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full items-center p-6">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => router.push('/')}
        />
        <form className="mx-5 flex max-w-3xl flex-grow items-center rounded-full border border-gray-200 px-6 py-3 shadow-lg">
          <input
            ref={searchInputRef}
            className="w-full flex-grow focus:outline-none"
            type="text"
          />
          <XIcon
            className="h-7 w-7 transform cursor-pointer text-gray-500 transition duration-100 hover:scale-125 sm:mr-3"
            onClick={() => (searchInputRef.current!.value = '')}
          />
          <MicrophoneIcon className="mr-3 hidden h-6 border-l-2 border-gray-300 pl-4 text-blue-500 sm:inline-flex" />
          <SearchIcon className="hidden h-6 text-blue-500 sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
        />
      </div>
      <HeaderOptions />
    </header>
  )
}
