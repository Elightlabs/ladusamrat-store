import Footer from "@/Components/ReusableComponet/Footer"
import Navbar from "@/Components/ReusableComponet/Navbar"

const shipmentPolicy = () => {
    return (
        <>
            <Navbar />
            <div className="pt-[10%] px-10 bg-white">

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
            </div>
            <Footer />

        </>
    )
}
export default shipmentPolicy