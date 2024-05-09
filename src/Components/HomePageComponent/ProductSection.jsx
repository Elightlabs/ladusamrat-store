"use client"
import { Pacifico, Nunito } from "next/font/google";
import Productcard from "../ReusableComponet/ProductCard"
const pacifico = Pacifico({ subsets: ['latin'], weight: ["400"] })

import { useProductContext } from "@/Context/ProductContext";
const ProductSection = () => {
    const { productData } = useProductContext()
    return (
        <>
            <div className="h-[3px]  my-[5%] w-full bg-gradient-to-r from-transparent via-[#C21C20] to-transparent">
            </div>
            <div className="flex flex-col justify-center items-center w-full px-[5%] bg-[#FFF2E9] pb-[5%]">
                <h2 className={pacifico.className + " text-3xl text-center lg:text-5xl text-[#C21C20]"}>
                    Our Must Try
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 mt-5 ">
                    {productData?.map((product) => {
                        return <Productcard key={product._id} product={product}/>
                    })}
                </div>
            </div>

        </>
    )
}

export default ProductSection