import Footer from "@/Components/ReusableComponet/Footer"
import Navbar from "@/Components/ReusableComponet/Navbar"

const privacyPolicy = () => {
    return (
        <>
            <Navbar />
            <div className="pt-[10%] px-10 bg-white">
                <div className="py-4 ">
                    <h2 className="text-xl font-bold">1. Information Collection:</h2>
                    <p className="text-sm">We collect personal information such as name, contact details, and address during the order process.</p>
                    <p className="text-sm">Payment information is securely processed by our payment gateway, and we do not store sensitive payment details.</p>
                </div>
                <div className="py-4 ">
                    <h2 className="text-xl font-bold">2. Security:</h2>
                    <p className="text-sm">We employ industry-standard security measures to protect customer information.</p>
                    <p className="text-sm"> Encryption protocols are used to secure data transmission.</p>
                    <p className="text-sm"> Access to customer data is restricted to authorized personnel only.</p>
                </div>
                <div className="py-4 ">
                    <h2 className="text-xl font-bold">3. Third-Party Disclosure:</h2>
                    <p className="text-sm">We do not share, sell, or disclose customer information to third parties without explicit consent.</p>
                    <p className="text-sm">Exceptions may include legal requirements, fraud prevention, or service providers involved in order fulfillment.</p>
                </div>
                <div className="py-4 ">
                    <h2 className="text-xl font-bold">4. Cookies:</h2>
                    <p className="text-sm">Cookies are small files stored on the user&apos;s device for an improved website experience.</p>
                    <p className="text-sm">Cookies may be used for analytics, personalization, and remembering user preferences.</p>
                    <p className="text-sm">Users can manage cookie preferences through their browser settings</p>
                </div>
                <h2 className="text-xl font-bold">Shipping and Delivery Policy:</h2>
                <div className="py-4 ">
                    <h2 className="text-xl font-bold">1. Domestic and International Shipping:</h2>
                    <p className="text-sm">Shipping costs are calculated based on weight, dimensions, and destination during checkout.</p>
                    <p className="text-sm">Domestic shipments generally take 2-7 days, while international shipments take 5-10 days.</p>
                    <p className="text-sm">International customers are responsible for custom duty charges.</p>
                </div>
                <div className="py-4 ">
                    <h2 className="text-xl font-bold">2. Delivery Time:</h2>
                    <p className="text-sm">Domestic transit time is estimated between 2-7 days, and international transit time is estimated between 5-10 days.</p>
                    <p className="text-sm">Delays due to unforeseen circumstances are communicated promptly.</p>
                </div>
                <div className="py-4 ">
                    <h2 className="text-xl font-bold">3.Change of Address:</h2>
                    <p className="text-sm"> Address changes are allowed before order dispatch.</p>
                    <p className="text-sm">Customers are responsible for providing accurate delivery details.</p>
                </div>
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
            </div>
            <Footer />

        </>
    )
}
export default privacyPolicy