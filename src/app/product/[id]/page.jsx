"use client"
import Navbar from "@/Components/ReusableComponet/Navbar"
import ProductViewSection from "@/Components/ProductDetailComponent/ProductViewSection"
import ProductListSection from "@/Components/ProductPageComponent/ProductLisSection"
import Footer from "@/Components/ReusableComponet/Footer"
import { useParams } from "next/navigation"
import { useCallback, useEffect, useMemo, useState } from "react"
import axios from "axios"
import { useProductContext } from "@/Context/ProductContext"


const SingleProduct = () => {
    const { id } = useParams();
    const { productData } = useProductContext()
    const [productDetails, setProductDetails] = useState();
    useEffect(() => {
        axios.get(`https://ladusamrat-api.vercel.app/product/${id}`)
            .then((res) => {
                setProductDetails(res.data.product)
            }).catch((err) => {
                console.log(err.message)
            })
    }, [])
    return (
        <>
            <Navbar />
            <ProductViewSection key={productDetails?.toString()} product={productDetails} />
            <ProductListSection productData={productData.filter((product) => {
                return product._id !== id
            })} />
            <Footer />
        </>
    )
}
export default SingleProduct
