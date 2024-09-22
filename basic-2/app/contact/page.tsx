import Navbar from "../components/Navbar";
import TwinklingBackground from "../components/Twinkle";
import Image from "next/image";
import Moon from "@/public/moonbg.png";

export default function ContactPage() {
  return (
    <div className="h-screen w-screen overflow-hidden scrollbar-hide relative">
      <Navbar />
      <TwinklingBackground />
      <div className="flex flex-col items-center justify-center h-full z-10 relative">
        <h1 className="text-center text-5xl mb-8 font-poppins font-medium">Get in Touch</h1>
        <h2 className="mb-[50vh] text-2xl font-poppins text-center">
          Email: astro@fultonscienceacademy.org <br /><br />
          Address: 3035 Fanfare Way, Alpharetta, GA 30009
        </h2>
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <Image
          src={Moon}
          alt="Moon"
          layout="responsive"
          className="w-full"
          style={{ transform: 'translateY(55%)' }}
        />
      </div>
    </div>
  );
}