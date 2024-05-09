"use client"
import { Pacifico, Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ['latin'], weight: ["variable"] })
import ProductListTabel from "./CartProducts"
import { useCart } from "react-use-cart";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";
import { Check, X } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { useCustomerContext } from "@/Context/CustomerContext";

const CartCalculation = () => {
    const { customerData } = useCustomerContext();
    const [paymentMethod, setPaymentMethod] = useState("cod");
    const initialState = {
        name: "",
        billing_email: "",
        billing_phone: "",
        billing_alternate_phone: "",
        billing_address: "",
        billing_city: "",
        billing_state: "",
        billing_pincode: "",
    }

    const [checkoutFormState, setCheckoutFormState] = useState(initialState);

    useEffect(() => {
        setCheckoutFormState({
            billing_email: customerData?.email,
            billing_phone: customerData?.phoneNo,
            name: customerData?.name,
        })
    }, [customerData]);

    const handleCheckoutForm = (e) => {
        console.log(e.target.value)
        setCheckoutFormState({
            ...checkoutFormState,
            [e.target.id]: e.target.value
        })
    }
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();


    const handleCreateOrder = (e) => {
        e.preventDefault()
        let sub_total = 0;
        let weight = 0
        let orderItems = items.map((item) => {
            sub_total += item.price * item.quantity
            weight += item?.weight * item.quantity;
            return {
                name: `${item?.title} ${item?.varaiation}`,
                sku: item?.id,
                units: item?.quantity,
                selling_price: item?.price,
            }
        });
        let orderData = {
            name: checkoutFormState.name,
            billing_address: checkoutFormState.billing_address,
            billing_city: checkoutFormState.billing_city,
            billing_pincode: checkoutFormState.billing_pincode,
            billing_state: checkoutFormState.billing_state,
            billing_email: checkoutFormState.billing_email,
            billing_phone: checkoutFormState.billing_phone,
            billing_alternate_phone: checkoutFormState.billing_alternate_phone,
            order_items: orderItems,
            sub_total: sub_total,
            weight: weight / 1000,
            billing_last_name: ""
        }
        if (paymentMethod === "cod") {
            axios(`${process.env.NEXT_PUBLIC_BASE_URL}/order/cod-order`, {
                method: "POST",
                data: orderData,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`
                }
            })
                .then((res) => {
                    if (!res.data.error) {
                        toast("Order placed successfully!");
                        emptyCart()
                        setTimeout(() => {
                            window.location.href = "/"
                        }, 1000);
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            axios(`${process.env.NEXT_PUBLIC_BASE_URL}/order/prepaid-order`, {
                method: "POST",
                data: orderData,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`
                }
            })
                .then((res) => {
                    window.location.href = res.data.url
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    const [modal, setModal] = useState(false);
    return (
        <div className="relative">
            <div className="pt-[40%] lg:pt-[10%] px-[5%] flex flex-col lg:flex-row pb-[10%] lg:pb-[3%] gap-x-8">
                <section className="py-4 container">
                    <div className="row justify-content-center w-full">
                        <div className="col-12">
                            <h5>
                                Cart ({totalUniqueItems}) total Items: ({totalItems})
                            </h5>
                            <br />
                            <table className="table table-light table-hover m-0 w-full">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
                                    <tr>
                                        <th scope="col" class="px-16 py-3">
                                            Image
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Product
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Weight
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Qty
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Price
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item, index) => {
                                        return (
                                            <tr class="" key={index}>
                                                <td class="p-4">
                                                    <img src={item.image} class="w-16 h-20 object-cover md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                                                </td>
                                                <td class="px-6 py-4 font-semibold text-gray-900 ">
                                                    {item.title}
                                                </td>
                                                <td class="px-6 py-4 font-semibold text-gray-900 ">
                                                    {item.varaiation}
                                                </td>
                                                <td class="px-6 py-4">
                                                    <div class="flex items-center">
                                                        <button onClick={() =>
                                                            updateItemQuantity(item?.id, item?.quantity - 1)
                                                        } className="inline-flex items-center justify-center h-8 w-8 p-1 rounded-full me-3 text-sm font-medium bg-white border-2 border-red-700 text-red-700 focus:outline-none  focus:ring-4 focus:ring-gray-200 " type="button">
                                                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                                            </svg>
                                                        </button>
                                                        <div>
                                                            <input type="number" value={item?.quantity} id="first_product" className="font-bold text-center bg-gray-50 w-14 px-3 py-2 border-2 border-red-700 text-gray-900 text-sm rounded-lg" placeholder="1" required />
                                                        </div>
                                                        <button onClick={() =>
                                                            updateItemQuantity(item?.id, item?.quantity + 1)
                                                        } className="inline-flex items-center justify-center h-8 w-8 p-1 rounded-full ms-3 text-sm font-medium bg-white border-2 border-red-700 text-red-700 focus:outline-none  focus:ring-4 focus:ring-gray-200 " type="button">
                                                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 font-semibold text-gray-900">
                                                    {item?.itemTotal}
                                                </td>
                                                <td class="px-6 py-4">
                                                    <span onClick={() => removeItem(item?.id)} class="cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline">Remove</span>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <hr />
                        <br />

                        <div className="col-auto ms-auto">
                            <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
                                Clear Cart
                            </button>
                        </div>

                    </div>
                </section>
                <div className="w-full lg:w-[30%] p-[2%] rounded-lg shad  border-2 bg-white border-[#C21C20]">
                    <div className=" flex flex-col justify-center items-center">
                        <h2 className={nunito.className + " font-bold text-lg"}>Cart Total</h2>
                        <div className="flex w-full justify-between pb-[5%]">
                            <p className={nunito.className + " font-normal"}>Subtotal:</p>
                            <p className={nunito.className + " font-semibold"}>{cartTotal}</p>
                        </div>
                        <div className="flex w-full justify-between pb-[5%] ">
                            <p className={nunito.className + " font-normal"}>Delivery Charge:</p>
                            <p className={nunito.className + " font-semibold"}>30</p>
                        </div>
                        <div className="h-[3px]  my-[5%] w-full bg-gradient-to-r from-transparent via-[#C21C20] to-transparent">
                        </div>
                        <div className="flex w-full justify-between pb-[5%] ">
                            <p className={nunito.className + " font-normal"}>Total:</p>
                            <p className={nunito.className + " font-semibold"}>{cartTotal + 30}</p>
                        </div>
                        <button onClick={() => {
                            if (items.length !== 0) setModal(true)
                        }} type="button" class=" focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Checkout</button>
                    </div>

                </div>
            </div>
            <div className={modal ? "flex justify-center items-center h-screen w-screen fixed top-0 left-0 z-[100] bg-black/40 pointer-events-auto" : "h-screen w-screen fixed top-0 left-0 z-[100] bg-black/40 opacity-0 pointer-events-none flex justify-center items-center "}>
                <form autoComplete="false" onSubmit={handleCreateOrder} className={"relative w-[60vw] bg-white p-6 rounded-xl " + nunito.className}>
                    <span onClick={() => setModal(false)} className="cursor-pointer absolute top-5 right-5 text-sm h-6 w-6 flex items-center justify-center rounded-xl text-red-700 border-2 border-red-700"><X /></span>
                    <div className="header text-xl font-bold">Checkout Details</div>

                    <div className="body mt-2 grid grid-cols-2 gap-x-5 gap-y-3">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-sm font-extrabold mb-1">Full name: </label>
                            <input
                                value={checkoutFormState.name}
                                onChange={handleCheckoutForm}
                                type="text"
                                required
                                id="name"
                                name="name"
                                placeholder="Full Name"
                                className={nunito.className + " block w-full py-2 text-sm px-5 shadow-md border border-[rgb(194,28,32)] rounded-lg bg-gray-50  focus:border-[#C21C20] focus:outline-none sm:text-sm sm:leading-6"}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="billing_email" className="text-sm font-extrabold mb-1">Email: </label>
                            <input
                                value={checkoutFormState.billing_email}
                                onChange={handleCheckoutForm}
                                type="text"
                                id="billing_email"
                                required
                                name="billing_email"
                                placeholder="Email"
                                className={nunito.className + " block w-full py-2 text-sm px-5 shadow-md border border-[rgb(194,28,32)] rounded-lg bg-gray-50  focus:border-[#C21C20] focus:outline-none sm:text-sm sm:leading-6"}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="billing_phone" className="text-sm font-extrabold mb-1">Phone Number: </label>
                            <input
                                value={checkoutFormState.billing_phone}
                                onChange={handleCheckoutForm}
                                type="text"
                                required
                                id="billing_phone"
                                name="billing_phone"
                                placeholder="Phone number"
                                className={nunito.className + " block w-full py-2 text-sm px-5 shadow-md border border-[rgb(194,28,32)] rounded-lg bg-gray-50  focus:border-[#C21C20] focus:outline-none sm:text-sm sm:leading-6"}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="billing_alternate_phone" className="text-sm font-extrabold mb-1">Altrernate Phone Number: </label>
                            <input
                                onChange={handleCheckoutForm}
                                type="text"
                                id="billing_alternate_phone"
                                name="billing_alternate_phone"
                                placeholder="Alternate phone number"
                                className={nunito.className + " block w-full py-2 text-sm px-5 shadow-md border border-[rgb(194,28,32)] rounded-lg bg-gray-50  focus:border-[#C21C20] focus:outline-none sm:text-sm sm:leading-6"}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="billing_address" className="text-sm font-bold mb-1">Address: </label>
                            <input
                                onChange={handleCheckoutForm}
                                type="text"
                                id="billing_address"
                                required
                                name="billing_address"
                                placeholder="Shipping address"
                                className={nunito.className + " block w-full py-2 text-sm px-5 shadow-md border border-[rgb(194,28,32)] rounded-lg bg-gray-50  focus:border-[#C21C20] focus:outline-none sm:text-sm sm:leading-6"}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="billing_city" className="text-sm font-bold mb-1">City: </label>
                            <input
                                onChange={handleCheckoutForm}
                                type="text"
                                required
                                id="billing_city"
                                name="billing_city"
                                placeholder="City"
                                className={nunito.className + " block w-full py-2 text-sm px-5 shadow-md border border-[rgb(194,28,32)] rounded-lg bg-gray-50  focus:border-[#C21C20] focus:outline-none sm:text-sm sm:leading-6"}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="billing_state" className="text-sm font-bold mb-1">State: </label>
                            <input
                                onChange={handleCheckoutForm}
                                type="text"
                                required
                                id="billing_state"
                                name="billing_state"
                                placeholder="State"
                                className={nunito.className + " block w-full py-2 text-sm px-5 shadow-md border border-[rgb(194,28,32)] rounded-lg bg-gray-50  focus:border-[#C21C20] focus:outline-none sm:text-sm sm:leading-6"}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-sm font-bold mb-1">Pincode: </label>
                            <input
                                required
                                onChange={handleCheckoutForm}
                                type="text"
                                id="billing_pincode"
                                name="billing_pincode"
                                placeholder="Pincode"
                                maxLength={6}
                                className={nunito.className + " block w-full py-2 text-sm px-5 shadow-md border border-[rgb(194,28,32)] rounded-lg bg-gray-50  focus:border-[#C21C20] focus:outline-none sm:text-sm sm:leading-6"}
                            />
                        </div>
                        <div className="col-span-2 flex justify-center items-center gap-4">
                            <button type="button" onClick={() => setPaymentMethod("cod")} className={paymentMethod == "cod" ? "border-2 border-red-700 py-1.5 px-4 text-center text-white font-bold bg-red-700 rounded-xl" : "border-2 border-red-700 py-1.5 px-4 text-center text-red-700 font-bold bg-white rounded-xl"}>COD</button>
                            <button type="button" onClick={() => setPaymentMethod("prepaid")} className={paymentMethod == "prepaid" ? "border-2 border-red-700 py-1.5 px-4 text-center text-white font-bold bg-red-700 rounded-xl" : "border-2 border-red-700 py-1.5 px-4 text-center text-red-700 font-bold bg-white rounded-xl"}>Online</button>
                        </div>
                        <button type="submit" className="col-span-2 py-3 text-center text-white font-bold bg-red-700 rounded-xl">Complete Order</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default CartCalculation