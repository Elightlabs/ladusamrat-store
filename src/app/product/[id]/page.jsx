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
    const [productData, setProductData] = useState([])

    useEffect(() => {

        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/product/`)
            .then((res) => {
                setProductData(res.data.product)
            }).catch((error) => {
                console.log("Error===> ", error)
            })
    }, [])
    const [productDetails, setProductDetails] = useState();
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/product/${id}`)
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
