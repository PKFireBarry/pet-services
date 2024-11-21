import Link from "next/link"
import { PawPrintIcon as Paw, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-purple-600 dark:bg-purple-900 text-white">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <Link href="#" className="flex items-center">
            <Paw className="h-8 w-8 text-yellow-400" />
            <span className="ml-2 text-2xl font-bold">Paw Perfect</span>
          </Link>
          <p className="mt-2 text-sm">© 2024 Paw Perfect. All rights reserved.</p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-sm hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-sm hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
        </nav>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <Link href="#" className="text-white hover:text-yellow-400 transition-colors">
            <Facebook className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-white hover:text-yellow-400 transition-colors">
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-white hover:text-yellow-400 transition-colors">
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

