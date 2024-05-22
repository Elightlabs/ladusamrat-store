import Footer from "@/Components/ReusableComponet/Footer"
import Navbar from "@/Components/ReusableComponet/Navbar"

const returnRefundPolicy = () => {
    return (
        <>
            <Navbar />
            <div className="pt-[10%] px-10 bg-white">

                <h2 className="text-xl font-bold">Return and Refund Policy:</h2>
                <div className="py-4 ">
                    <h2 className="text-xl font-bold">1.Eligibility for Refund:</h2>
                    <p className="text-sm">Products must be returned within 7 days of purchase.</p>
                    <p className="text-sm">Refunds are considered for damaged products or poor quality.</p>
                </div>
                <div className="py-4 ">
                    <h2 className="text-xl font-bold">2. Refund Conditions:</h2>
                    <p className="text-sm">To be eligible for a refund, customers must provide proof of purchase and evidence of product damage.</p>
                    <p className="text-sm">Refunds are processed to the original payment method.</p>
                </div>
                <div className="py-4 ">
                    <h2 className="text-xl font-bold">3. Refund Process:</h2>
                    <p className="text-sm">Customers initiate returns by contacting us through the provided email.</p>
                    <p className="text-sm">Upon receiving product information/images, our team inspects the condition.</p>
                    <p className="text-sm">Verified refunds are processed promptly.</p>

                </div>
                <div className="py-4 ">
                    <h2 className="text-xl font-bold">4. Non-Returnable Products:</h2>
                    <p className="text-sm">Products purchased from physical stores are non-returnable.</p>
                    <p className="text-sm">Refunds are not applicable if the return is initiated after 7 days from purchase.</p>
                </div>
                <div className="py-4 ">
                    <h2 className="text-xl font-bold">Note:</h2>
                    <p className="text-sm">In 5-7 working days the amount will be credited to original payment mode.</p>
                </div>
            </div>
            <Footer />

        </>
    )
}
export default returnRefundPolicy