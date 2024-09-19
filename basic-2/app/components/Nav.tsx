"use client"
import logo from '@/public/Logo Full.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useLayoutEffect, useRef } from 'react';

export default function Navbar() {
    const windowWidth = useRef(0);
    const mobile = useRef(false);
    // console.log(windowWidth);
    useEffect(() => {
        windowWidth.current = window.innerWidth;
        mobile.current = windowWidth.current <= 768;
        // console.log(windowWidth);
    });
    console.log(mobile.current);
    if (!mobile.current) {
        return (    
            <>
                {console.log('desktop')}
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
    } else {
        return(
            <>
                {/* mobile navbar, will have burger on the right side and the logo on the left side */}
                
            </>
        )
    }
}
