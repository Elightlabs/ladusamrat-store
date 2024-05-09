"use client"

import Navbar from "@/Components/ReusableComponet/Navbar";
import ProductFilter from "@/Components/ProductPageComponent/ProductFilter";
import ProductListSection from "@/Components/ProductPageComponent/ProductLisSection";
import Footer from "@/Components/ReusableComponet/Footer";
import { useProductContext } from "@/Context/ProductContext";


const Product = () => {
    const { productData } = useProductContext()
    return (
        <>
            <Navbar />
            {/* <ProductFilter /> */}

            <div className="lg:pt-[10%] pt-[40%] ">
                <ProductListSection productData={productData}/>
            </div>
            <Footer />
        </>
    )
}
export default Product;