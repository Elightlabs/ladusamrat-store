"use client"
import { useState } from "react";
import {  Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ['latin'], weight: ["400"] , fallback: ["Arial", "Times New Roman"],})

import UserCardModal from "../Modals/UserCardModal";

import { useCustomerContext } from "@/Context/CustomerContext";

const ProfileCard = () => {
    const [showModal, setShowModal] = useState({ show: false, data: undefined })

    const { customerData } = useCustomerContext();
    console.log(customerData)



    return (
        <>
            <div className="border-b pt-[40%] lg:pt-[10%] px-[5%] w-full">
                <div className="bg-white p-10 ">
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 text-[#C21C20]">
                            <div className="flex w-full justify-between ">
                                <div className="flex gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                                    <h2 className={nunito.className + " text-[#C21C20] text-xl font-extrabold"}>
                                        {customerData?.name}
                                    </h2>
                                </div>
                                <div >
                                    <svg  onClick={() => setShowModal({ show: true , data:customerData})} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer lucide lucide-user-cog"><circle cx="18" cy="15" r="3" /><circle cx="9" cy="7" r="4" /><path d="M10 15H6a4 4 0 0 0-4 4v2" /><path d="m21.7 16.4-.9-.3" /><path d="m15.2 13.9-.9-.3" /><path d="m16.6 18.7.3-.9" /><path d="m19.1 12.2.3-.9" /><path d="m19.6 18.7-.4-1" /><path d="m16.8 12.3-.4-1" /><path d="m14.3 16.6 1-.4" /><path d="m20.7 13.8 1-.4" /></svg>
                                </div>
                            </div>

                        </div>
                        <div className="">
                            <p className={nunito.className + " text-sm text-gray-600"}>Email Address</p>
                            <h2 className={nunito.className}>{customerData?.email}</h2>
                        </div>
                        <div>
                            <p className={nunito.className + " text-sm text-gray-600"}>Address</p>
                            <h2 className={nunito.className}>{customerData?.street_adress}</h2>
                        </div>
                        <div>
                            <p className={nunito.className + " text-sm text-gray-600"}>Phone Number</p>
                            <h2 className={nunito.className}>{customerData?.phoneNo}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <UserCardModal showModal={showModal} setShowModal={setShowModal} />
        </>
    )
}
export default ProfileCard;