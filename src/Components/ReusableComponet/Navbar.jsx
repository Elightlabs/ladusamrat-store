"use client"
import { Pacifico, Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ['latin'], weight: ["variable"] })
import Image from "next/image"
import { useState } from "react"

import { useCatgoryContext } from "@/Context/CategoryContext";
import { useCustomerContext } from "@/Context/CustomerContext";


import UserAuthModal from "../Modals/UserAuthModal";
import Link from "next/link";

const Navbar = () => {
    const { categories } = useCatgoryContext();
    const { customerToken } = useCustomerContext();
    const [dropdown, setDropdown] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState({ show: false, login: false })
    return (
        <>
            <header>
                <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b drop-shadow-sm">
                    <ul class="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8">
                        <a class="logo" href="#">
                            <img src="/Assets/logo.png" className="w-1/2" />
                        </a>

                        <input type="checkbox" id="check" />
                        <span class="menu bg-white lg:bg-white flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out">
                            <li ><a className={nunito.className + "text-md  text-[#000] font-bold"} href="/">Home</a></li>
                            <li><a className={nunito.className + " text-md   text-[#000] font-bold"} href="#">About</a></li>
                            <li><a className={nunito.className + " text-md    text-[#000] font-bold"} href="/contact-us">Contact Us</a></li>
                            <li>
                                <button id="dropdownHoverButton" onClick={() => { setDropdown(!dropdown) }} data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class=" text-[#000] text-center inline-flex items-center font-bold " type="button">Shop by Category<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                                </button>
                                <div id="dropdownHover" className={dropdown ? "text-sm z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44" : "hidden"}>
                                    <ul class="py-2 text-md" aria-labelledby="dropdownHoverButton">
                                        {
                                            categories?.map((category) => {
                                                return (
                                                    <li key={category._id}>
                                                        <Link href={`/category/${category._id}`} class={nunito.className + " block px-4 py-2 text-black"}>{category.category_name}</Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <button onClick={() => {
                                    setShowAuthModal({ login: true, show: true })
                                }} type="button" className={customerToken ? "hidden" : " block lg:hidden focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"}>Login</button>
                            </li>
                            <li>
                                <Link href="/profile" className={customerToken ? "flex" : "hidden"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                                </Link>
                            </li>
                            <Link href={"/cart"} className={customerToken ? "flex ml-4" : "hidden ml-4"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                            </Link>
                            <label for="check" class="close-menu text-[#000]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </label>
                        </span>
                        <button onClick={() => {
                            setShowAuthModal({ login: true, show: true })
                        }} type="button" className={customerToken ? "hidden" : "hidden lg:block focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"}>Login</button>

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={customerToken ? "lg:hidden lucide lucide-user-round" : "hidden"}><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                        <label for="check" class="open-menu">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-justify"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                        </label>

                    </ul>

                </nav>
            </header>
            <UserAuthModal
                showAuthModal={showAuthModal}
                setShowAuthModal={setShowAuthModal}
            />
        </>
    )
}

export default Navbar
