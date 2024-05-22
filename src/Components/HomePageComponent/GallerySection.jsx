"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination, Autoplay } from 'swiper/modules';
import { Pacifico, Nunito } from "next/font/google";
const pacifico = Pacifico({ subsets: ['latin'], weight: ["400"] , fallback: ["Arial", "Times New Roman"],})
const GalllerySection = () => {
    return (
        <>

            <div className="hidden w-full px-[5%] lg:flex flex-col justify-center items-center">
                <div className="h-[3px]  my-[5%] w-full bg-gradient-to-r from-transparent via-[#C21C20] to-transparent">
                </div>
                <h2 className={pacifico.className + " mb-[2%] text-5xl text-[#C21C20]"}>
                    Gallery
                </h2>
                <div className="flex flex-row justify-center items-center">
                    <div className="w-[50%]">
                        <img className="pr-[2%]" src="/Assets/HomePage/img-gallery1.png" />
                    </div>
                    <div className="w-[50%] grid grid-cols-2  md:grid-cols-2 gap-4">
                        <img src="/Assets/HomePage/img-gallery2.png" />
                        <img src="/Assets/HomePage/img-gallery3.png" />
                        <img src="/Assets/HomePage/img-gallery4.png" />
                        <img src="/Assets/HomePage/img-gallery5.png" />
                    </div>
                </div>
            </div>

            <div className="w-full lg:hidden">
                <div className="h-[3px]  my-[5%] w-full bg-gradient-to-r from-transparent via-[#C21C20] to-transparent">
                </div>
                <h2 className={pacifico.className + " mb-5 text-3xl text-center  lg:text-5xl text-[#C21C20]"}>
                    Gallery
                </h2>
                <div className="flex flex-row justify-center items-center px-[5%] ">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        pagination={{
                            dynamicBullets: true,
                            clickable: true
                        }}
                        style={{
                            "--swiper-pagination-color": "#C21C20",
                            "--swiper-pagination-bullet-inactive-color": "#999999",
                            "--swiper-pagination-bullet-inactive-opacity": "1",
                            "--swiper-pagination-bullet-size": "8px",
                        }}
                        // autoplay={{ delay: 2000 }}
                        className="mySwiper w-full h-full"
                    >
                        <div className="w-full">
                            <SwiperSlide className="w-full">
                                <img src="/Assets/HomePage/img-gallery2.png" />
                            </SwiperSlide>
                            <SwiperSlide className="w-full">
                                <img src="/Assets/HomePage/img-gallery3.png" />
                            </SwiperSlide>
                            <SwiperSlide className="w-full">
                                <img src="/Assets/HomePage/img-gallery4.png" />
                            </SwiperSlide>
                            <SwiperSlide className="w-full">
                                <img src="/Assets/HomePage/img-gallery5.png" />
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </div>
        </>
    )

}

export default GalllerySection;