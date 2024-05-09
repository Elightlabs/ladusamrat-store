import { Pacifico, Nunito } from "next/font/google";
import TestimonialCard from "../ReusableComponet/TestimonialCard"
const pacifico = Pacifico({ subsets: ['latin'], weight: ["400"] })

const TestimonialSection = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center mb-[5%] px-[5%]">
                <div className="h-[3px]  my-[5%] w-full bg-gradient-to-r from-transparent via-[#C21C20] to-transparent">
                </div>
                <h2 className={pacifico.className + " text-3xl text-center lg:text-5xl text-[#C21C20] "}>
                    Testimonials
                </h2>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 mt-5">
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
            </div>
        </>
    )
}
export default TestimonialSection