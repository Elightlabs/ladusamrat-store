"use client"
import axios from "axios";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";


export const CustomerContext = createContext();

const CustomerProvider = ({ children }) => {
    const [customerData, setCustomerData] = useState()
    const [customerToken, setCustomerToken] = useState()
    
    useEffect(() => {
        if (localStorage.getItem('authToken')) {
            setCustomerToken(localStorage.getItem('authToken'))
            const headers = {
                'authorization': `Bearer ${localStorage.getItem('authToken')}`
            }
            axios.get(`https://ladusamrat-api.vercel.app/customer/get-profile`, { headers: headers })
                .then((res) => {
                    setCustomerData(res.data.customer)
                    console.log(res.data.customer)
                }).catch((error) => {
                    console.log("Error===> ", error)
                })
        } else {
            console.log("Customer Not Logedin")
        }
    }, [])

    return <CustomerContext.Provider value={{ customerData, setCustomerData, setCustomerToken, customerToken }}>{children}</CustomerContext.Provider>

}

const useCustomerContext = () => {
    return useContext(CustomerContext)
}


export { useCustomerContext, CustomerProvider }