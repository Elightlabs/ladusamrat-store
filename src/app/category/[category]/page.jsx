"use client"

import Navbar from "@/Components/ReusableComponet/Navbar";
import ProductFilter from "@/Components/ProductPageComponent/ProductFilter";
import ProductListSection from "@/Components/ProductPageComponent/ProductLisSection";
import Footer from "@/Components/ReusableComponet/Footer";
import { useProductContext } from "@/Context/ProductContext";
import { useParams } from "next/navigation";


const CategoryProduct = () => {
    const { category } = useParams();
    const { productData } = useProductContext()
    console.log(category);
    console.log(productData);
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