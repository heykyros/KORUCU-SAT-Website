'use client';

import { Canvas } from '@react-three/fiber'
import { Scene } from "../components/Scene"
import Navbar from '../components/Navbar';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Link from 'next/link';
import TwinklingBackground from '../components/Twinkle';
import Moon from "@/public/moonfr.png";
import Image from 'next/image';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Mission() {
  return (
    <>
      <TwinklingBackground />
      <div className="relative w-[100vw] h-[100vh] z-0 flex flex-col items-center overflow-x-hidden">
        
            <div className="relative w-full h-auto flex flex-col items-center p-2 z-10">
              <Navbar />
              <h1 className='text-6xl mt-[12vh] font-poppins font-semibold'>About Us</h1>
              <p className="my-[8vh] text-xl font-poppins w-3/4 lg:w-1/2 text-center text-gray-400">
              The Astronomy Society of Fulton Science Academy (ASFSA) is a vibrant community composed of current students, alumni, faculty, and affiliated enthusiasts and experts passionate about exploring space. ASFSA is dedicated to inspiring and educating the next generation of scientists, engineers, and informed global citizens through immersive, hands-on experiences in space exploration and astronomical research.
              <br />Our mission is to foster a diverse and enthusiastic epistemic community that actively contributes to scientific discovery while equipping students with the skills and knowledge necessary to address the challenges facing humanity. We strive to cultivate a deep understanding of the universe and its intricate connections to the Earth system by engaging students in cutting-edge projects, including CubeSat satellite development, radio and optical telescope construction, astrophotography, and space research focusing on deep sky objects, planets, the Moon, and the Sun.
              <br />ASFSA exemplifies Fulton Science Academy Private School&apos;s iCare values—integrity, curiosity, advocacy, resiliency, and empathy. Through our commitment to rigorous scientific research and ethical practices, we uphold the highest standards of integrity. We foster curiosity by encouraging students to explore the wonders of the cosmos and engage in innovative projects. Our members are advocates for STEM education, actively participating in outreach to inspire and educate others. We also promote resiliency by equipping students with the skills to navigate complex challenges in space exploration, while our focus on mentorship and collaboration underscores the importance of empathy in building a supportive and inclusive community.
              </p>
            </div>

            <h1 className='text-5xl mt-[12vh] font-poppins font-semibold'>Our Vision</h1>
            <p className="my-[8vh] text-xl font-poppins w-3/4 lg:w-1/2 text-center text-gray-400">
              ASFSA is a dynamic network of current students, alumni, faculty, and affiliated experts and enthusiasts, all dedicated to cultivating the next generation of space explorers. Our vision is to build an epistemic community united by a shared passion for exploring and discovering the vastness of space. We strive to equip our members with the necessary resources, tools, knowledge, and skills to become recognized and trusted sources of astronomical expertise.
              <br />We are committed to training future experts who will advance our understanding of the universe through collaborative research, education, and innovation. These experts will be empowered to influence and guide the global scientific community and public policy by providing authoritative insights and solutions to complex astronomical and space-related challenges.
              <br />Through our dedication to knowledge-sharing and interdisciplinary collaboration, we aim to foster a network of experts and enthusiasts who contribute to scientific, educational, and technological advancements, deepening humanity&apos;s understanding of the cosmos and its connection to our world.
              <br />The ASFSA community regularly gathers for collaborative projects, field trips, and hands-on learning experiences. In the near future, our goal is to organize astronomy and space conferences that bring together students, experts, and alumni to showcase their research, share projects, and exchange ideas and experiences. These events will foster a vibrant community of learners, providing opportunities for networking, mentorship, and the advancement of knowledge in the fields of astronomy and space science.
              <br />The ASFSA team has embarked on publishing a peer-reviewed student research journal—Scripta Astronomia—to provide a scientific platform for our community to share their research and projects. This initiative empowers students to take active roles as editors, reviewers, and core contributors, fostering a culture of academic rigor, collaboration, and scholarly communication within the ASFSA. Through Scripta Astronomia, we aim to highlight the innovative work of our members, encouraging them to contribute meaningfully to the broader scientific community and advance their expertise in astronomy and space science.
            </p>
    

          
            <div className='flex w-full flex-col items-center'>
              <h3 className="text-2xl lg:text-3xl w-3/4 lg:w-1/2 font-poppins text-button-purple font-semibold text-center">OUR MISSION</h3>
              <h1 className="text-4xl lg:text-5xl w-3/4 lg:w-1/2 mt-6 mb-[6vh] font-poppins font-semibold text-center">Astronomy through creation <br />and connection.</h1>

              <div className="flex flex-col lg:flex-row gap-4 justify-center items-center sm:w-full lg:w-3/4 h-auto min-h-[200px] mb-20">
                <div className="w-3/4 lg:w-1/3 h-min-[200px] flex flex-col bg-gradient-to-r from-gray-50/20 to-gray-50/10 p-6 rounded-2xl backdrop-blur">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 stroke-button-purple">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                  <h1 className="text-lg font-semibold font-poppins mt-2">Promote STEM Engagement</h1>  
                  <p className="text-md font-poppins mt-2">Through outreach and collaboration, the Astronomy Society strives to expand its impact, promote a passion for STEM, and make meaningful contributions to the broader scientific community.</p>
                </div>

                <div className="w-3/4 lg:w-1/3 h-min-[200px] flex flex-col bg-gradient-to-r from-gray-50/20 to-gray-50/10 p-6 rounded-2xl backdrop-blur">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 stroke-button-purple">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                  <h1 className="text-lg font-semibold font-poppins mt-2">Build a Connected Society</h1>  
                  <p className="text-md font-poppins mt-2">We are dedicated to building a network of students, alumni, and faculty who collaborate on projects. Our team regularly meets at astronomy events, fostering ongoing connections and collaboration.</p>
                </div>

                <div className="w-3/4 lg:w-1/3 h-min-[200px] flex flex-col bg-gradient-to-r from-gray-50/20 to-gray-50/10 p-6 rounded-2xl backdrop-blur">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 stroke-button-purple">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
                  </svg>
                  <h1 className="text-md font-semibold font-poppins mt-2">Foster a Diverse Community</h1>  
                  <p className="text-md font-poppins mt-2">The Society seeks to build a diverse and enthusiastic community that actively contributes to scientific discovery and develops essential skills and knowledge for addressing global challenges.</p>
                </div>
              </div>
            </div>
      </div>
    </>
  );
}