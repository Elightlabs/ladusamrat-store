"use client"
import Productcard from "../ReusableComponet/ProductCard"


const ProductListSection = ({productData}) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-[5%] lg:pb-[5%] pb-[10%]">
                {productData?.map((product) => {
                    return <Productcard key={product._id} product={product} />
                })}
            </div>
        </>
    )
}

export default ProductListSection