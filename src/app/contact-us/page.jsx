"use client"
import { Pacifico, Nunito } from "next/font/google";
const pacifico = Pacifico({ subsets: ['latin'], weight: ["400"] })
const nunito = Nunito({ subsets: ['latin'], weight: ["variable"] })

import Navbar from "@/Components/ReusableComponet/Navbar"
import Footer from "@/Components/ReusableComponet/Footer"
const contactUS = () => {
    return (
        <>
            <Navbar />
            <section class="text-gray-600 lg:pt-[8%] pt-[40%] pb-[5%] body-font relative">
                <div class="container px-5  mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h2 className={pacifico.className + " text-3xl text-center p-[5%] lg:text-5xl text-[#C21C20]"}>
                            Get in Touch
                        </h2>
                        <p class={nunito.className+" lg:w-2/3 mx-auto leading-relaxed text-md"}>Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-2">
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <input type="text" id="name" name="name" placeholder="Name" class="w-full shadow-md bg-opacity-50 rounded border border-[#C21C20]    text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <input type="text" id="number" name="number" placeholder="Phone Number" class="w-full shadow-md bg-opacity-50 border-[#C21C20] rounded border     text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <input type="email" id="email" name="email" placeholder="Email" class="w-full shadow-md bg-opacity-50 rounded border border-[#C21C20]    text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <textarea id="message" placeholder="Message" name="message" class="w-full shadow-md bg-opacity-50 rounded border border-[#C21C20]   h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div class="p-2 w-full text-center">
                                <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Login</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default contactUS