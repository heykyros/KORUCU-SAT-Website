import logo from '@/public/Logo Full.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            <div className="flex justify-between items-center w-full h-[10vh] z-10">
                <Link href="/" className='lg:ml-[105px] h-full hover:scale-110 transition duration-500'>
                    <Image src={logo} alt="image" className='w-full h-full' />
                </Link>
                {/* div containing all the links to projects */}
                <div className="flex-grow h-full flex justify-center space-x-16 items-center">
                    <Link href="/about" className='font-poppins font-medium text-xl hover:scale-110 transition duration-500'>About</Link>
                    <Link href="/cubesat" className='font-poppins font-medium text-xl hover:scale-110 transition duration-500'>Projects</Link>
                    <Link href="/blog" className='font-poppins font-medium text-xl hover:scale-110 transition duration-500'>Blog</Link>
                </div>
                <Link href="/contact" className='mr-[115px] relative flex items-center justify-center w-[144px] h-[45px] text-center font-poppins font-medium border-custom-purple backdrop-blur text-xl rounded-3xl bg-transparent border-2 hover:scale-110 transition duration-500 '>
                    <span className="relative z-10">Contact</span>
                </Link>
            </div>
        </>
    )
}
