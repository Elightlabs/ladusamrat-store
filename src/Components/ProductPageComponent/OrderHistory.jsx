"use client"
import { Pacifico, Nunito } from "next/font/google";
const pacifico = Pacifico({ subsets: ['latin'], weight: ["400"] , fallback: ["Arial", "Times New Roman"],})
import Navbar from "@/Components/ReusableComponet/Navbar"
import ProductListTabel from "@/Components/CartPageComponent/CartProducts"
import Footer from "@/Components/ReusableComponet/Footer"
import { useEffect, useState } from "react";
import axios from "axios";
const OrderHistory = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        axios(`https://ladusamrat-api.vercel.app/order/customer`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("authToken")}`
            }
        })
            .then((res) => {
                console.log(res.data.orders)
                setOrders(res.data.orders)
            })
    }, [])

    return (
        <>
            <Navbar />
            <h2 className={pacifico.className + " pt-[20%] lg:pt-[5%] pb-[4%] lg:pb-[2%] text-3xl text-center lg:text-5xl text-[#C21C20]"}>
                Order History
            </h2>
            <div class="relative overflow-x-auto  pb-[10%] lg:pb-[5%] w-full  px-[5%]">

                <table class="w-full overflow-scroll text-sm text-left rtl:text-right text-gray-500 rounded-md ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                            <th scope="col" class="lg:px-16 px-2 py-3">
                                Sr. no
                            </th>
                            <th scope="col" class="lg:px-6 px-2 py-3">
                                Address
                            </th>
                            <th scope="col" class="lg:px-6 px-2 py-3">
                                Price
                            </th>
                            <th scope="col" class="lg:px-6 px-2 py-3">
                                Date
                            </th>
                            <th scope="col" class="lg:px-6 px-2 py-3">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((order, index) => {
                            return <tr class="" key={order.channel_order_id + index}>
                                <td class="lg:px-16 px-2 py-3">
                                    #{order.channel_order_id.slice(28)}
                                </td>
                                <td class="lg:px-6 px-2 py-3">
                                    {order.customer_address}
                                </td>
                                <td class="lg:px-6 px-2 py-3">
                                    {order.total}
                                </td>
                                <td class="lg:px-6 px-2 py-3">
                                    {order.created_at}
                                </td>
                                <td class="lg:px-6 px-2 py-3">
                                    {order.status}
                                </td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </>
    )
}
export default OrderHistory