"use client"
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
export const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState();
    useEffect(() => {
        axios.get(`https://ladusamrat-api.vercel.app/category/get`)
            .then((res) => {
                setCategories(res.data.category)
            }).catch((error) => {
                console.log("Error===> ", error)
            })
    }, [])


    return <CategoryContext.Provider value={{ categories }} >{children}</CategoryContext.Provider>
}

const useCatgoryContext = () => {
    return useContext(CategoryContext);
}

export { useCatgoryContext, CategoryProvider }