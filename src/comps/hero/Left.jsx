import { Button } from "@/components/ui/button"
import { FaArrowRight } from "react-icons/fa";


const Left = () => {
    return (
        <div>
            <p className="font-bold mt-2">ABOUT US</p>
            <h1 className="text-5xl font-bold mt-10">Shaping the Next Generation of HR Tech Recruitment.</h1>
            <p className="text-xl text-gray-400 mt-10">At Everything Talent, we help you launch your recruitment into a new dimension.</p>
            <Button
                className="mt-10 p-5 w-60 flex justify-center items-center group relative overflow-hidden border-2 border-transparent text-black"
                variant="outline"
            >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 group-hover:opacity-100 opacity-0 transition-opacity pointer-events-none"></span>
                <span className="absolute inset-0 bg-white group-hover:bg-clip-padding group-hover:border-2 group-hover:border-transparent group-hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-md"></span>
                <span className="relative z-10 flex items-center justify-center w-full h-full bg-white gap-2">
                    Start for Free Today
                    <div className="w-10 transform transition-transform group-hover:translate-x-2">
                        <FaArrowRight />
                    </div>
                </span>
            </Button>
        </div>
    )
}

export default Left
