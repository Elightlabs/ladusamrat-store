"use client"

import Navbar from "@/Components/ReusableComponet/Navbar";
import ProductFilter from "@/Components/ProductPageComponent/ProductFilter";
import ProductListSection from "@/Components/ProductPageComponent/ProductLisSection";
import Footer from "@/Components/ReusableComponet/Footer";
import axios from "axios";
import { useEffect, useState } from "react";


const Product = () => {
    const [productData, setProductData] = useState([])

    useEffect(() => {

        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/product/`)
            .then((res) => {
                setProductData(res.data.product)
            }).catch((error) => {
            })
    }, [])
    return (
        <>
            <Navbar />
            {/* <ProductFilter /> */}

            <div className="lg:pt-[10%] pt-[40%] ">
                <ProductListSection productData={productData} />
            </div>
            <Footer />
        </>
    )
}
export default Product;