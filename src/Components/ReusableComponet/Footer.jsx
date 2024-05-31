"use client"
import { Pacifico, Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ['latin'], weight: ["variable"] , fallback: ["Arial", "Times New Roman"],})

const Footer = () => {
    return (
        <>
            <footer class="bg-white px-[5%] py-[2%]">
                <div className="grid lg:grid-cols-11 grid-cols-1 ">
                    <div className="grid col-span-3 gap-6 lg:gap-4">
                        <div className="">
                            <img src="/Assets/logo.png" />
                            <h1>Mumbai Ladusamrat</h1>
                        </div>
                        <a className={nunito.className + " flex  font-semibold text-sm lg:text-base"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg> contact@ladusamrat.com
                        </a>
                        <a className={nunito.className + " flex  font-semibold text-sm lg:text-base"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M14.05 2a9 9 0 0 1 8 7.94" /><path d="M14.05 6A5 5 0 0 1 18 10" /></svg>
                            For snacks order placement:- 8686002016 <br />
                            For Mithai enquires and orders:- 9324710127

                        </a>
                        <a className={nunito.className + " flex  font-semibold text-sm lg:text-base"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            Mon - Sun: 08:00 AM - 09:00 PM
                        </a>
                        <a>
                            <div className="flex gap-2">
                                <img src="/Assets/instagram.png" />
                                <img src="/Assets/facebook.png" />
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg> */}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> */}
                            </div>

                        </a>

                    </div>
                    <div className="lg:w-[3px] w-full col-span-1 lg:h-full h-[3px] my-6 lg:bg-gradient-to-b bg-gradient-to-r from-transparent via-[#C21C20] to-transparent">
                    </div>
                    <div className="grid col-span-3 gap-4">
                        <h2 className={nunito.className + " font-bold text-[#C21C20]"}>Quick Links</h2>
                        <p className={nunito.className + " font-semibold "}> Home</p>

                        <p className={nunito.className + " font-semibold "}>About Us</p>
                        <p className={nunito.className + " font-semibold "}>Shop By Category</p>
                        <p className={nunito.className + " font-semibold "}>Contact Us</p>
                        <a className={nunito.className + " font-semibold "} href="/termsandcondition">Terms & Conditions</a>
                        <a className={nunito.className + " font-semibold "} href="/privacyandpolicy">Privacy Policy</a>
                        <a className={nunito.className + " font-semibold "} href="/shipmentpolicy">Shipment and Delivery Policy</a>
                        <a className={nunito.className + " font-semibold "} href="/returnandrefund">Return and Refund Policy</a>


                    </div>
                    <div className="lg:w-[3px] w-full col-span-1 lg:h-full h-[3px] my-6 lg:bg-gradient-to-b bg-gradient-to-r from-transparent via-[#C21C20] to-transparent">
                    </div>
                    <div className="grid col-span-3 gap-4">
                        <div>
                            <h2 className={nunito.className + " font-extrabold text-[#C21C20] text-sm lg:text-base"}>Ladu Samrat, Parel</h2>
                            <p className={nunito.className + " font-semibold "}>Shop No.: 1 Habib Terrace Lalbaug, Dr Baba Saheb Ambedkar Rd, Ganesh Gully, Parel, Mumbai, Maharashtra 400012</p>
                        </div>
                        <div>
                            <h2 className={nunito.className + " font-extrabold text-[#C21C20] text-sm lg:text-base"}>Ladu Samrat, Kandivali</h2>
                            <p className={nunito.className + " font-semibold "}>3 rd floor growels, Akurli Rd, Akurli Industry Estate, Kandivali East, Mumbai, Maharashtra 400101</p>
                        </div>
                    </div>
                </div>
                <div className="h-[3px] my-6 lg:my-12 w-full bg-gradient-to-r from-transparent via-[#C21C20] to-transparent">
                </div>
                <div className="w-full text-center">
                    <p>
                        ©Mumbai ladooSamrat, {(function () {
                            let newDate = new Date()
                            return newDate.getFullYear()
                        })()} ElightLabs Technologies
                    </p>
                </div>
            </footer>

        </>
    )
}
export default Footer