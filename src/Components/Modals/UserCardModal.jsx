
import { Pacifico, Nunito } from "next/font/google";
const pacifico = Pacifico({ subsets: ['latin'], weight: ["400"] , fallback: ["Arial", "Times New Roman"],})
const nunito = Nunito({ subsets: ['latin'], weight: ["400"] , fallback: ["Arial", "Times New Roman"],})
const UserCardModal = ({ showModal, setShowModal }) => {
    const updateDetails = (e) => {
        e.preventDefault()
        const headers = {
            'authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
        let formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData);
        axios.patch(`https://ladusamrat-api.vercel.app/customer/update`, userData, { headers: headers })
            .then(async (res) => {
                localStorage.setItem("authToken", res.data.response);
                setCustomerToken(res.data.response)
                toast(res.data.message)

            })
    }
    return (
        <>
            <div id="authentication-modal" tabindex="-1" aria-hidden="true" className={showModal.show ? "backdrop-blur-md overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full" : "hidden"}>
                <div class="relative p-4 w-full flex justify-center mt-[10%]">
                    <div class="relative bg-white w-[400px]   rounded-xl shadow p-4 ">
                        <div className="flex items-center justify-end">
                            <button type="button" onClick={() => {
                                setShowModal({ show: false })
                            }} class="end-2.5 text-gray-400 bg-transparent  hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="authentication-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex items-center  justify-center">
                            <h3 className={pacifico.className + " text-3xl text-[#C21C20]"}>
                                Update Details
                            </h3>
                        </div>
                        <div className="p-4 md:p-5">
                            <form className="space-y-4" action="#" method="post" onSubmit={updateDetails}>
                                <input
                                    type="text"
                                    name="name"
                                    value={showModal?.data?.name}
                                    placeholder="Full Name"
                                    className={nunito.className + " block w-full py-1.5 text-sm placeholder: px-2 shadow-md border border-[rgb(194,28,32)] rounded-lg bg-gray-50  focus:border-[#C21C20] focus:outline-none sm:text-sm sm:leading-6"}
                                />

                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={showModal?.data?.email}
                                    autoComplete="given-name"
                                    placeholder="Email"
                                    className={" block w-full py-1.5 text-sm placeholder: px-2 shadow-md  border border-[#C21C20] rounded-lg bg-gray-50  focus:border-[#C21C20] focus:outline-none sm:text-sm sm:leading-6"}
                                />
                                <input
                                    type="text"
                                    name="phoneNo"
                                    id="phoneno"
                                    autoComplete="given-name"
                                    value={showModal?.data?.phoneNo}
                                    placeholder="Phone Number"
                                    className={nunito.className + " block w-full py-1.5 text-sm placeholder: px-2 shadow-md  border border-[#C21C20] rounded-lg bg-gray-50  focus:border-[#C21C20] focus:outline-none sm:text-sm sm:leading-6"}
                                />
                                <input
                                    type="text"
                                    name="street_adress"
                                    id="address"
                                    autoComplete="given-name"
                                    value={showModal?.data?.street_adress}
                                    placeholder="Address"
                                    className={nunito.className + " block w-full py-1.5 text-sm placeholder: px-2 shadow-md  border border-[#C21C20] rounded-lg bg-gray-50  focus:border-[#C21C20] focus:outline-none sm:text-sm sm:leading-6"}
                                />
                                <div className="w-full">
                                    <button type="submit" class=" w-full mt-[2%] focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Save Details</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}
export default UserCardModal