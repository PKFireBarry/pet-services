import Link from "next/link"
import { PawPrintIcon as Paw } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full px-4 lg:px-6 h-16 flex items-center bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        <Link className="flex items-center justify-center" href="#">
          <Paw className="h-8 w-8 text-pink-500" />
          <span className="ml-2 text-2xl font-bold text-purple-600 dark:text-purple-300">Paw Perfect</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-pink-500 dark:hover:text-pink-300 transition-colors" href="#">
            Services
          </Link>
          <Link className="text-sm font-medium hover:text-pink-500 dark:hover:text-pink-300 transition-colors" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-pink-500 dark:hover:text-pink-300 transition-colors" href="#">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

