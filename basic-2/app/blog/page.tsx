import Navbar from "../components/Navbar"
export default function Blog() {
    return (
        <>
            <Navbar />
            <div className="h-screen w-screen flex flex-col items-center p-[10vh]">
                <h1 className="text-center text-5xl font-poppins font-medium">Blog</h1>
                <h2 className="mt-8 text-2xl font-poppins text-center">
                    No posts yet, check back later!
                </h2>
            </div>
        </>
    )
}