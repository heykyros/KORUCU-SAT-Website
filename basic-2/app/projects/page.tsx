'use client'
import Navbar from "../components/Navbar";
import Cage from "@/public/cage.png";
import Radio from "@/public/radiotel.png";
import Image from 'next/image';
import TwinklingBackground from "../components/Twinkle";

export default function Projects() {
    return(
        <>
        <TwinklingBackground />
        <Navbar />
        <div className="page w-full flex items-center flex-col justify-center h-full">
            <div className="helmholtz flex w-[80vw] h-[50vh] mt-[5%] flex-col">
                <div className="flex w-[80vw] h-[5vh]flex-row">
                    <h1 className="text-button-purple text-[22px] font-medium">Projects</h1>
                </div>
                <div className="flex w-[80vw] h-[50vh] mt-8 flex-row">
                    <div className="flex flex-col w-[50vw] items-start">
                        <h1 className="text-white font-semibold text-[36px]">Helmholtz Cage</h1>
                        <Image src={Cage} alt="Helmholtz Cage" className="w-[18vw] mt-[5%] min-w-[800px] lg:min-w-0 "/>
                    </div>
                    <div className="flex flex-col w-[50vw] text-center">
                        <h1 className="w-4/5 text-[18px] leading-8 self-center mt-[10%]">One of our ongoing projects is the Helmholtz Cage. A group of students involved in the Small Satellite Research and Development project is building a Helmholtz Cage to simulate and study Earth’s magnetic field.

A Helmholtz cage is a device made of a set of square coils arranged in a specific configuration to create a uniform magnetic field within its volume. It is commonly used in scientific experiments, particularly in physics and engineering, to cancel out external magnetic fields or simulate different magnetic environments, allowing for precise testing and calibration of sensors and electronic devices.
</h1>

                    </div>

                </div>
            </div>

            <div className="radiotelescope flex w-[80vw] h-[50vh] mt-[5%] flex-col">
                <div className="flex w-[80vw] h-[50vh]flex-row">
                    <div className="flex flex-col w-[50vw] items-start">
                        <h1 className="text-white font-semibold text-[36px]">Radio Telescope  
                        </h1>
                        <Image src={Radio} alt="Radio Telescope" className="w-[18vw] mt-[5%] min-w-[800px] lg:min-w-0 "/>
                    </div>
                    <div className="flex flex-col w-[50vw] text-center">
                        <h1 className="w-4/5 text-[18px] leading-8 self-center mt-[10%]">A group of our students is currently researching and developing a small radio telescope to learn how radio telescopes function and how they are used to image celestial objects.

A radio telescope is a specialized antenna designed to detect radio waves emitted by celestial objects. It captures these waves and converts them into data, which is then processed to create images of astronomical phenomena, such as galaxies, stars, and nebulae, allowing astronomers to study the universe beyond the visible spectrum.

</h1>

                    </div>

                </div>
            </div>




        </div>




     
      
                
            
        </>
    )
}

