'use client'
import Navbar from "../components/Navbar";
import Cage from "@/public/cage.png";
import Dob from "@/public/dob.png";
import Radio from "@/public/radiotel.png";
import Station from "@/public/station.png";
import Image from 'next/image';
import Box from '@/public/box.png';
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
                        <Image src={Dob} alt="Radio Telescope" className="w-[18vw] mt-[5%] min-w-[800px] lg:min-w-0 "/>
                    </div>
                    <div className="flex flex-col w-[50vw] text-center">
                        <h1 className="w-4/5 text-[18px] leading-8 self-center mt-[10%]">A group of our students is currently researching and developing a small radio telescope to learn how radio telescopes function and how they are used to image celestial objects.

A radio telescope is a specialized antenna designed to detect radio waves emitted by celestial objects. It captures these waves and converts them into data, which is then processed to create images of astronomical phenomena, such as galaxies, stars, and nebulae, allowing astronomers to study the universe beyond the visible spectrum.

</h1>

                    </div>

                </div>
            </div>

            
            <div className="dob flex w-[80vw] h-[50vh] mt-[5%] flex-col">
                <div className="flex w-[80vw] h-[50vh]flex-row">
                    <div className="flex flex-col w-[50vw] items-start">
                        <h1 className="text-white font-semibold text-[36px]">Dobsonian Telescope  
                        </h1>
                        <Image src={Radio} alt="Dobsonian Telescope" className="w-[18vw] mt-[5%] min-w-[800px] lg:min-w-0 "/>
                    </div>
                    <div className="flex flex-col w-[50vw] text-center">
                        <h1 className="w-4/5 text-[18px] leading-8 self-center mt-[10%]">Our team constructed a 16 inch Dobsonian telescope and equipped it with a motorized system. A Dobsonian telescope is a simple, cost-effective type of reflecting telescope known for its large aperture and ease of use. It consists of a Newtonian optical tube mounted on a basic, altazimuth mount that sits on the ground. The primary mirror at the base of the tube collects light and focuses it to a secondary mirror, which then directs the image to the eyepiece. Its construction typically involves inexpensive materials like plywood for the mount and standard glass for the mirrors, making it an ideal choice for amateur astronomers.


</h1>

                    </div>

                </div>
            </div>

                        
            <div className="dob flex w-[80vw] h-[50vh] mt-[5%] flex-col">
                <div className="flex w-[80vw] h-[50vh]flex-row">
                    <div className="flex flex-col w-[50vw] items-start">
                        <h1 className="text-white font-semibold text-[36px]">Ground Radio Station
  
                        </h1>
                        <Image src={Station} alt="Ground Station" className="w-[18vw] mt-[5%] min-w-[800px] lg:min-w-0 "/>
                    </div>
                    <div className="flex flex-col w-[50vw] text-center">
                        <h1 className="w-4/5 text-[18px] leading-8 self-center mt-[10%]">
                        The Communications team of the satellite project built a Ground Radio Station capable of tracking and communicating with satellites. This station will be used to communicate with KorucuSAT and other satellites.

A ground radio station is a facility equipped with antennas and communication equipment used to track and communicate with satellites. It sends and receives radio signals, allowing the exchange of data, commands, and telemetry. By accurately pointing its antenna towards a satellite's position, it can maintain communication as the satellite moves across the sky.



</h1>

                    </div>

                </div>
            </div>


            <div className="box flex w-[80vw] h-[50vh] mt-[5%] flex-col">
                <div className="flex w-[80vw] h-[50vh]flex-row">
                    <div className="flex flex-col w-[50vw] items-start">
                        <h1 className="text-white font-semibold text-[36px]">Glove Box
  
                        </h1>
                        <Image src={Box} alt="Glove Box" className="w-[18vw] mt-[5%] min-w-[800px] lg:min-w-0 "/>
                    </div>
                    <div className="flex flex-col w-[50vw] text-center">
                        <h1 className="w-4/5 text-[18px] leading-8 self-center mt-[10%]">
                        A student team from our Small Satellite Research and Development group is currently constructing a glovebox for use in building our CubeSat.
A glove box is a sealed container designed to handle hazardous or sensitive materials in a controlled environment. It features built-in gloves that allow users to manipulate objects inside without direct contact. The interior can be filled with inert gas, like nitrogen or argon, to maintain an oxygen-free or moisture-free atmosphere, essential for working with reactive chemicals or delicate materials. Access is typically through airtight ports, preserving the internal conditions and ensuring safety.





</h1>

                    </div>

                </div>
            </div>
            




        </div>




     
      
                
            
        </>
    )
}

