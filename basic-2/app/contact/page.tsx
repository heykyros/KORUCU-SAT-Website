import Navbar from "../components/Navbar";

export default function ContactPage() {

    return(
        <>
            <Navbar />
            <div className="h-screen w-screen flex flex-col items-center p-[10vh]">
                <h1 className="text-center text-5xl font-poppins font-medium">Get in Touch</h1>
                <h2 className="mt-8 text-2xl font-poppins text-center">
                    Email: astro@fultonscienceacademy.org <br /><br />
                    Address: 3035 Fanfare Way, Alpharetta, GA 30009
                </h2>

            </div>
        </>
    )
}