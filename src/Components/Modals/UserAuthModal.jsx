"use client"
import { Pacifico, Nunito } from "next/font/google";
const pacifico = Pacifico({ subsets: ['latin'], weight: ["400"] })
const nunito = Nunito({ subsets: ['latin'], weight: ["400"] })

import axios from "axios";
import { useState } from "react";
import { Toaster, toast } from 'sonner';
import { useCustomerContext } from "@/Context/CustomerContext";

const UserAuthModal = ({ showAuthModal, setShowAuthModal }) => {

    const [userData, SetUserData] = useState();
    const { setCustomerToken } = useCustomerContext();

    const handleAuth = (e) => {
        e.preventDefault()
        if (showAuthModal.login) {
            let formData = new FormData(e.currentTarget);
            const userData = Object.fromEntries(formData);
            axios.post(`https://ladusamrat-api.vercel.app/customer/signin`, userData)
                .then(async (res) => {
                    localStorage.setItem("authToken", res.data.response);
                    setCustomerToken(res.data.response)
                    toast(res.data.message)
                    setShowAuthModal({ show: false })
                    window.location.reload()
                })
                .catch((err) => {
                    toast(err.message)
                })
        } else {
            let formData = new FormData(e.target);
            const userData = Object.fromEntries(formData);
            axios.post(`https://ladusamrat-api.vercel.app/customer/signup`, userData)
                .then((res) => {
                    toast(res.data.message)
                    setShowAuthModal({ show: true, login: true })
                })
                .catch((err) => {
                    toast(err.message)
                })
        }
    }

    return (
        <>
            <Toaster />
            <div id="authentication-modal" tabindex="-1" aria-hidden="true" className={showAuthModal.show ? "backdrop-blur-md overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full" : "hidden"}>
                <div class="relative p-4 w-full flex justify-center mt-[10%]">
                    <div class="relative bg-white w-[400px]   rounded-xl shadow p-4 ">
                        <div className="flex items-center justify-end">
                            <button type="button" onClick={() => {
                                setShowAuthModal({ show: false })
                            }} class="end-2.5 text-gray-400 bg-transparent  hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="authentication-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div class="flex items-center  justify-center">
                            <h3 className={pacifico.className + " text-3xl text-[#C21C20]"}>
                                {showAuthModal.login ? " Login" : "Create an account"}
                            </h3>
                        </div>
                        <div className="p-4 md:p-5">
                            <form className="space-y-4" action="#" method="post" onSubmit={handleAuth}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    className={showAuthModal.login ? "hidden" : nunito.className + " block w-full py-1.5 text-sm placeholder: px-2 shadow-md border border-[rgb(194,28,32)] rounded-lg bg-gray-50  focus:border-[#C21C20] focus:outline-none sm:text-sm sm:leading-6"}
                                />

                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="given-name"
                                    placeholder="Email"
                                    className={nunito.className + " block w-full py-1.5 text-sm placeholder: px-2 shadow-md  border border-[#C21C20] rounded-lg bg-gray-50  focus:border-[#C21C20] focus:outline-none sm:text-sm sm:leading-6"}
                                />
                                <input
                                    type="text"
                                    name="phoneNo"
                                    id="phoneno"
                                    autoComplete="given-name"
                                    placeholder="Phone Number"
                                    className={showAuthModal.login ? "hidden" : nunito.className + " block w-full py-1.5 text-sm placeholder: px-2 shadow-md  border border-[#C21C20] rounded-lg bg-gray-50  focus:border-[#C21C20] focus:outline-none sm:text-sm sm:leading-6"}
                                />
                                <input
                                    type="text"
                                    name="street_adress"
                                    id="address"
                                    autoComplete="given-name"
                                    placeholder="Address"
                                    className={showAuthModal.login ? "hidden" : nunito.className + " block w-full py-1.5 text-sm placeholder: px-2 shadow-md  border border-[#C21C20] rounded-lg bg-gray-50  focus:border-[#C21C20] focus:outline-none sm:text-sm sm:leading-6"}
                                />
                                <input
                                    type="text"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className={nunito.className + " block w-full py-1.5 text-sm placeholder: px-2 shadow-md  border border-[#C21C20] rounded-lg bg-gray-50  focus:border-[#C21C20] focus:outline-none sm:text-sm sm:leading-6"}
                                />
                                <div class="flex justify-between">
                                    <a href="#" class="text-sm text-[#C21C20]">Lost Password?</a>
                                </div>
                                <div className="w-full">
                                    <button type="submit" class=" w-full mt-[2%] focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">{showAuthModal.login ? "Login" : "Create Account"}</button>
                                </div>
                                <div className={showAuthModal.login ? "text-sm font-medium" : "hidden"}>
                                    Don&apos;t have an account?
                                    <a href="#" onClick={() => setShowAuthModal({ show: true, login: false })} class="text-[#C21C20] w-full hover:underline"
                                    >Create Account</a>
                                </div>
                                <div className={showAuthModal.login ? "hidden" : "text-sm font-medium"}>
                                    Already have an account?
                                    <a onClick={() => setShowAuthModal({ show: true, login: true })} href="#" class="text-[#C21C20] w-full hover:underline"
                                    >Login</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}
export default UserAuthModal