import Navbar from "@/Components/ReusableComponet/Navbar"
import Footer from "@/Components/ReusableComponet/Footer"
const TermsConditon = () => {
    return (
        <>
            <Navbar />
            <div className="pt-[10%] px-10 bg-white">
                <div className="py-4 ">
                    <h2 className="text-xl font-bold">1. Agreement:</h2>
                    <p className="text-sm">By accessing and using the services provided by MUMBAI LADUSAMRAT through the website (https://www.ladusamrat.in), you agree to abide by these terms and conditions.</p>
                </div>
                <div className="py-4">
                    <h2 className="text-xl font-bold">2. Stock Availability:</h2>
                    <p className="text-sm">Product availability is subject to stock counts, and while we strive for accuracy, discrepancies may occur. In such cases, we will fulfill available items, offering you the option to wait for backordered items or receive a refund.</p>
                </div>
                <h2 className="text-xl font-bold">3. Shipping Costs:</h2>
                <div className="py-4">
                    <h2 className="text-xl font-bold">3.1 Domestic Shipping:</h2>
                    <p className="text-sm">Shipping costs are calculated based on weight, dimensions, and destination. The customer is responsible for the final shipping cost</p>
                </div>
                <div className="py-4">
                    <h2 className="text-xl font-bold">3.2 International Shipping:</h2>
                    <p className="text-sm">Customers are liable for custom duty charges. Once dispatched, orders cannot be canceled, and non-payment of customs duty will result in no refund.</p>
                </div>
                <h2 className="text-xl font-bold">4. Delivery Terms:</h2>
                <div className="py-4">
                    <h2 className="text-xl font-bold">4.1 Transit Time:</h2>
                    <p className="text-sm">
                        4.1 Transit Time: Domestic shipments take 2-7 days, and international shipments take 5-10 days.
                    </p>
                </div>
                <div className="py-4">
                    <h2 className="text-xl font-bold">4.2 Dispatch Time:</h2>
                    <p className="text-sm">Orders are dispatched within 2 business days. Delivery address changes are allowed before dispatch.</p>
                </div>
                <div className="py-4">
                    <h2 className="text-xl font-bold">5. Out of Stock and Delivery Time Exceeded:</h2>
                    <p className="text-sm">If an item is out of stock, we cancel and refund it. Contact us if delivery time exceeds expectations.</p>
                </div>
                <div className="py-4">
                    <h2 className="text-xl font-bold">6. Tracking Notifications:</h2>
                    <p className="text-sm">Customers receive tracking links upon dispatch for shipment progress updates.</p>
                </div>
                <div className="py-4">
                    <h2 className="text-xl font-bold">7. Damaged Parcels:</h2>
                    <p className="text-sm">If a parcel is damaged in transit, reject it if possible, or contact customer service for assistance.</p>
                </div>
                <div className="py-4">
                    <h2 className="text-xl font-bold">8. Duties & Taxes:</h2>
                    <p className="text-sm">Sales tax is applied to goods as displayed on the website.</p>
                </div>
                <div className="py-4">
                    <h2 className="text-xl font-bold">9. Cancellations:</h2>
                    <p className="text-sm">Orders can be canceled before dispatch. Once dispatched, orders cannot be canceled.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TermsConditon