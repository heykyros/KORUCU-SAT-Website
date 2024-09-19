"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import logo from '@/public/Logo Full.svg'
import Image from 'next/image'

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "KorucuSAT", href: "/cubesat" },
  {
    name: "Projects",
    href: "/projects",
    dropdownItems: [
      { name: "Project 1", href: "/projects/1" },
      { name: "Project 2", href: "/projects/2" },
      { name: "Project 3", href: "/projects/3" },
    ],
  },
  { name: "Contact", href: "/contact" },
]

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener("resize", listener)
    return () => window.removeEventListener("resize", listener)
  }, [matches, query])

  return matches
}

const NavItem = ({ item, isMobile }: { item: any; isMobile: boolean }) => {
  if (item.dropdownItems) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <motion.button
            className="flex items-center text-lg font-medium text-white-900 hover:scale-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.name} <ChevronDown className="ml-1 h-4 w-4" />
          </motion.button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {item.dropdownItems.map((dropdownItem: any) => (
            <DropdownMenuItem key={dropdownItem.name}>
              <Link href={dropdownItem.href} className="w-full">
                {dropdownItem.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={item.href}
        className="text-lg font-medium text-white-300 hover:scale-50"
      >
        {item.name}
      </Link>
    </motion.div>
  )
}

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const NavItems = () => (
    <>
      {navItems.map((item) => (
        <NavItem key={item.name} item={item} isMobile={isMobile} />
      ))}
    </>
  )

  if (!isClient) {
    return null // or a loading spinner
  }

  return (
    <nav className="bg-transparent w-full mt-2">
      <div className=" mx-auto px-4 sm:px-6 lg:px-[5vw]">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 hover:scale-110 duration-300 transition">
            <Link href="/" className="text-xl font-bold text-white-900">
              <Image src={logo} alt="Logo" className='w-[20vh] h-full' />
            </Link>
          </div>
          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="default" size="icon" className="md:hidden bg-transparent stroke-none">
                  <Menu className="h-10 w-10" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px] bg-white/10 backdrop-blur border-0">
                <nav className="flex flex-col space-y-4 mt-4">
                  <NavItems />
                </nav>
              </SheetContent>
            </Sheet>
          ) : (
            <div className="hidden md:flex md:flex-1 md:justify-end pr-4">
              <div className="flex space-x-8 items-center text-xl">
                <NavItems />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}