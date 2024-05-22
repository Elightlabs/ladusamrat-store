"use client"
import { Pacifico, Nunito } from "next/font/google";
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination,Autoplay } from 'swiper/modules';

const pacifico = Pacifico({ subsets: ['latin'], weight: ["400"], fallback: ["Arial", "Times New Roman"],})
const nunito = Nunito({ subsets: ['latin'], weight: ["variable"] , fallback: ["Arial", "Times New Roman"],})

const HeroSection = () => {
    return (
        <>
            <div className="bg-[#FFF2E9] lg:h-screen w-full  flex lg:pt-[10%] pt-[40%] px-[5%]">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={{
                        dynamicBullets: true,
                        clickable:true,
                    }}
                    style={{
                        "--swiper-pagination-color": "#C21C20",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "8px",
                      }}
                    autoplay={{ delay: 2000 }}
                    className="mySwiper w-full h-full"
                >
                    <SwiperSlide className="w-full lg:h-full h-[200px]">
                        <div className="w-full lg:h-full h-[200px] relative border-4 border-white-800 rounded-2xl">
                            <img className=" rounded-2xl w-full h-full object-cover absolute top-0 left-0" src="/Assets/HeroSection.png" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-full lg:h-full h-[200px]">
                        <div className="w-full lg:h-full h-[200px] relative border-4 border-white-800 rounded-2xl">
                            <img className=" rounded-2xl w-full h-full object-cover absolute top-0 left-0" src="/Assets/HeroSection.png" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
export default HeroSection