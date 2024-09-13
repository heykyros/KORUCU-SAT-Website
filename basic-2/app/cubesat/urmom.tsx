// 'use client'
// import Navbar from "../components/Navbar";
// import { Canvas } from '@react-three/fiber';
// import { CubeSatScene } from "../components/CubeSatScene";
// import Earth from "@/public/Earth.png";
// import Image from 'next/image';
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// export default function CubesatPage() {
//     return(
//         <>
//         <ParallaxLayer>
//             <div className=" h-[100vh] w-[100vw]">
//                 <Parallax speed={50}>
//                     <div className="fixed top-[50vh] left-[3vw] w-full h-full z-0">
//                         <Image src={Earth} alt = "Earth image" className="scale-75"></Image>
//                     </div>
//                 </Parallax>

//                 <div className=" w-full h-auto flex flex-col items-center p-2 z-10 drop-shadow-2xl">
//                     <Navbar />
                    
//                     <Parallax speed={0}>
//                         <div className="text-6xl drop-shadow-xl font-poppins font-bold text-center mt-[30vh]">KorucuSAT</div>
//                     </Parallax>

//                     <Parallax speed={0}>
//                         <p className="text-2xl drop-shadow-xl font-poppins font-semibold text-center mt-[6vh] w-1/2">
//                             The Society’s flagship educational endeavor: A 3U CubeSAT developed to analyze the effect of the Sun on Earth’s ionosphere.
//                         </p>
//                     </Parallax>

//                     <Parallax speed={1}>
//                         <div className="flex w-2/3 h-[20vh] justify-between mt-[40vh]">
//                             <div className="flex flex-col">
//                                 <h1 className="text-5xl font-poppins font-bold">22</h1>
//                                 <p className="text-2xl font-poppins font-medium">STUDENTS CURRENTLY INVOLVED</p>
//                             </div>
//                             <div className="flex flex-col">
//                                 <h1 className="text-5xl font-poppins font-bold">200+</h1>
//                                 <p className="text-2xl font-poppins font-medium">IMPACTED THROUGH OUTREACH</p>
//                             </div>
//                             <div className="flex flex-col">
//                                 <h1 className="text-5xl font-poppins font-bold">3</h1>
//                                 <p className="text-2xl font-poppins font-medium">OFFICIAL UNIVERSITY AFFILIATIONS</p>
//                             </div>
//                         </div>
//                     </Parallax>

//                     <Parallax speed={-3}>
//                         <div className="mt-[40vh] w-2/3 flex flex-col items-center">
//                             <h1 className="text-6xl font-poppins font-bold text-center">
//                                 OUR MOST <span className="bg-gradient-to-r from-orange-300 to-orange-700 bg-clip-text text-transparent">AMBITIOUS</span> PROJECT YET
//                             </h1>
//                             <p className="mt-[10vh] text-xl font-poppins w-3/4 text-center">
//                                 KorucuSat aims to correlate the intensity of solar radiation in Earth’s upper ionosphere with both geomagnetic activity and plasma density. Currently, the satellite team is engaged in writing an application for NASA’s Cubesat Launch Initiative (CSLI) grant, which offers comprehensive funding for all launch-associated costs.
//                             </p>
//                             <p className="mt-[10vh] text-xl font-poppins w-3/4 text-center mb-[30vh]">
//                                 Beyond the science mission, the team has a strong educational mission. The team has initiated an outreach program for schools in the metro Atlanta area underrepresented in STEM fields.
//                             </p>
//                         </div>
//                     </Parallax>
//                 </div>
//             </div>
//             </ParallaxLayer>
//         </>
//     )
// }