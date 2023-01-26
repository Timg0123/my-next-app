import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Toggle from './Toggle'

const Navbar = () => {
  return (
    <nav className="flex justify-between mx-14 mt-5 pb-3 border-b-[1px] border-neutral-400">
      <h1 className="text-4xl font-semibold flex gap-5 items-center">
        <FontAwesomeIcon icon={faUserNinja} />
        Ninja List
      </h1>
      <div className="flex gap-10 items-center">
        <Toggle />

        <Link href="/" className="text-xl hover:text-indigo-500 duration-150">
          Home
        </Link>
        <Link
          href="/about"
          className="text-xl hover:text-indigo-500 duration-150"
        >
          About
        </Link>
        <Link
          href="/ninjas"
          className="text-xl hover:text-indigo-500 duration-150"
        >
          Ninja Listing
        </Link>
      </div>
    </nav>
  )
}
export default Navbar
