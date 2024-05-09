"use client"

import Navbar from "@/Components/ReusableComponet/Navbar";
import ProductListSection from "@/Components/ProductPageComponent/ProductLisSection";
import Footer from "@/Components/ReusableComponet/Footer";
import { useParams } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";

const CategoryProduct = async () => {
    const { category } = useParams();
    const [productData, setProductData] = useState([])

    useEffect(() => {

        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/product/`)
            .then((res) => {
                setProductData(res.data.product)
            }).catch((error) => {
                // console.log("Error===> ", error)
            })
    }, [])
    return (
        <>
            <Navbar />
            {/* <ProductFilter /> */}
            <div className="lg:pt-[10%] pt-[40%] ">
                <ProductListSection productData={productData?.filter((product) => {
                    return category === product.category._id
                })} />
            </div>
            <Footer />
        </>
    )
}
export default CategoryProduct;