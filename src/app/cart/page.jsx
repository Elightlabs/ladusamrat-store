"use client"
import Navbar from "@/Components/ReusableComponet/Navbar";
import CartCalculation from "@/Components/CartPageComponent/CartCalculation";
import Footer from "@/Components/ReusableComponet/Footer";
const Cart = () => {
    return (
        <>
            <Navbar />
            <CartCalculation />
            <Footer />
        </>
    )
}

export default Cart;