"use client"
import { Nunito } from "next/font/google"
import Link from "next/link";
const nunito = Nunito({ subsets: ['latin'], weight: ["variable"], fallback: ["Arial", "Times New Roman"],})
import { useRouter } from 'next/navigation'
import { useCart } from "react-use-cart";
const Productcard = ({ product }) => {
    const { addItem } = useCart();
    const router = useRouter()
    return (
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
            <Link href={`/product/${product._id}`}>
                <img class="p-8 rounded-t-lg h-64 w-full object-cover" src={product.image} alt="product image" />
            </Link>
            <div class="px-8 pb-5">
                <Link href={`/product/${product._id}`}>
                    <h2 class={nunito.className + " text-xl font-semibold cursor-pointer tracking-tight text-[#C21C20]"}>{product?.name}</h2>
                </Link>
                <p className={nunito.className + " font-semibold"}>
                    {product?.description?.slice(0, 60)}...
                </p>

                <div class="flex items-center justify-between pt-6">
                    <span class={nunito.className + " text-xl font-bold text-[#C21C20]"}>Rs. {product?.price}</span>
                    {/* <button
                        className="btn btn-success"
                        onClick={()=>router.push(` product${product._id}`)}
                        // onClick={() => addItem({ item: product, id: product._id, price: product.price, title: product.name, image: product.image})}
                    >
                        Add to Cart
                    </button> */}
                    <Link href={`/product/${product._id}`} class="text-white bg-white focus:ring-4 focus:outline-none rounded-lg px-5 py-2.5 text-center border-2 border-red-700 shadow"><img src="/Assets/bag.png" /></Link>
                </div>
            </div>
        </div>

    )
}
export default Productcard