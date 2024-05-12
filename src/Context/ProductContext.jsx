"use client"
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [productData, setProductData] = useState([])

    useEffect(() => {

        axios.get(`https://ladusamrat-api.vercel.app/product/`)
            .then((res) => {
                setProductData(res.data.product)
            }).catch((error) => {
                console.log("Error===> ", error)
            })
    }, [])

    return <ProductContext.Provider value={{ productData }}>{children}</ProductContext.Provider>

}

const useProductContext = () => {
    return useContext(ProductContext)
}


export { useProductContext, ProductProvider }