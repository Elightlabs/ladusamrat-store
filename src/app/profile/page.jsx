import Navbar from "@/Components/ReusableComponet/Navbar"
import ProfileCard from "@/Components/ProfilePageComponent/ProfileCard"
import OrderHistory from "@/Components/ProductPageComponent/OrderHistory"
import Footer from "@/Components/ReusableComponet/Footer"
const Profile = () => {
    return (
        <>
            <Navbar />
            <ProfileCard />
            <OrderHistory />
            <Footer />
        </>
    )
}
export default Profile