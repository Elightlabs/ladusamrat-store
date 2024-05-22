"use client"
import { Pacifico, Nunito } from "next/font/google";
import Image from "next/image"
const pacifico = Pacifico({ subsets: ['latin'], weight: ["400"] , fallback: ["Arial", "Times New Roman"],})
const nunito = Nunito({ subsets: ['latin'], weight: ["variable"], fallback: ["Arial", "Times New Roman"],})

const OfferSection = () => {


    return (
        <>
            <div className=" bg-[#FFF2E9] mx-[5%]">
                <div className="h-[3px]  my-[5%] w-full bg-gradient-to-r from-transparent via-[#C21C20] to-transparent">
                </div>
                <div className="hidden w-full lg:flex">
                    <div className="w-[70%] pr-[5%] flex flex-col justify-center items-center gap-y-6">
                        <h2 className={pacifico.className + " text-5xl text-[#C21C20]"}>
                            Special Offers
                        </h2>
                        <p className={nunito.className + " font-semibold text-justify"}>
                            Lorem ipsum dolor sit amet consectetur. Morbi risus quam enim nibh sed orci pretium volutpat. Convallis vitae volutpat aliquam sit egestas pharetra dignissim sodales nulla. Et fames in egestas volutpat egestas sit dignissim ultricies purus. Turpis risus cum nec in arcu dolor senectus. Quis at fringilla tempor hac. Egestas eu scelerisque eget mauris arcu sem nec urna eu. Integer id tristique turpis vestibulum vitae nullam vestibulum. Platea enim at a luctus at. Habitasse condimentum viverra scelerisque ut a pellentesque eleifend. Molestie augue odio cras adipiscing sit ut lacus libero.
                        </p>
                        <button type="button" class=" focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Explore</button>
                    </div>
                    <div className="w-[30%]">

                        <div class="grid grid-cols-2  md:grid-cols-2 gap-4">
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="/Assets/HomePage/img1.png" alt="" />
                            </div>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="/Assets/HomePage/img2.png" alt="" />
                            </div>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="/Assets/HomePage/img3.png" alt="" />
                            </div>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="/Assets/HomePage/img4.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col w-full lg:hidden">
                    <div className="w-full flex flex-col justify-center  items-center gap-y-5">
                        <h2 className={pacifico.className + " text-3xl text-center text-[#C21C20]"}>
                            Special Offers
                        </h2>
                        <div className="w-full">
                            <div class="grid grid-cols-2  md:grid-cols-2 gap-4">
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="/Assets/HomePage/img1.png" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="/Assets/HomePage/img2.png" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="/Assets/HomePage/img3.png" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="/Assets/HomePage/img4.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <p className={nunito.className + " font-semibold text-justify"}>
                            Lorem ipsum dolor sit amet consectetur. Morbi risus quam enim nibh sed orci pretium volutpat. Convallis vitae volutpat aliquam sit egestas pharetra dignissim sodales nulla. Et fames in egestas volutpat egestas sit dignissim ultricies purus. Turpis risus cum nec in arcu dolor senectus. Quis at fringilla tempor hac. Egestas eu scelerisque eget mauris arcu sem nec urna eu. Integer id tristique turpis vestibulum vitae nullam vestibulum. Platea enim at a luctus at. Habitasse condimentum viverra scelerisque ut a pellentesque eleifend. Molestie augue odio cras adipiscing sit ut lacus libero.
                        </p>
                        <button type="button" onClick={()=>alert("hello")} class=" focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Explore</button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default OfferSection