"use client"
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ['latin'], weight: ["400"] , fallback: ["Arial", "Times New Roman"],})

const TestimonialCard = () => {
    return (
        <>
            <a href="#" class="block max-w-sm p-6 bg-white rounded-lg shadow">
                <h5 class={nunito.className + " mb-2 text-1xl font-normal tracking-tight text-[#C21C20]"}>Harsh Goenka</h5>
                <p class={nunito.className + " font-light text-black"}>Misal, Pohe, Upma, Sabudana, Amboli, Thalipeeth, Masale Bhaat, Vada Pav, Misal are a few of the...</p>
            </a>

        </>
    )
}
export default TestimonialCard