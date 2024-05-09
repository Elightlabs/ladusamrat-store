// import React from "react";
// import { useCart } from "react-use-cart";
// const CartProducts = () => {

    // return (
    //     <>
    //     <div class="relative overflow-x-auto w-full lg:w-[65%] mr-[5%] mb-5 lg:mb-0">
    //         <table class="w-full text-sm text-left rtl:text-right text-gray-500 rounded-md ">
    //             <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
    //                 <tr>
    //                     <th scope="col" class="px-16 py-3">
    //                       Image
    //                     </th>
    //                     <th scope="col" class="px-6 py-3">
    //                         Product
    //                     </th>
    //                     <th scope="col" class="px-6 py-3">
    //                         Qty
    //                     </th>
    //                     <th scope="col" class="px-6 py-3">
    //                         Price
    //                     </th>
    //                     <th scope="col" class="px-6 py-3">
    //                         Action
    //                     </th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 <tr class="">
    //                     <td class="p-4">
    //                         <img src="/Assets/dummy.png" class="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
    //                     </td>
    //                     <td class="px-6 py-4 font-semibold text-gray-900 ">
    //                         Apple Watch
    //                     </td>
    //                     <td class="px-6 py-4">
    //                         <div class="flex items-center">
    //                             <button class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none  focus:ring-4 focus:ring-gray-200 " type="button">
    //                                 <span class="sr-only">Quantity button</span>
    //                                 <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
    //                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
    //                                 </svg>
    //                             </button>
    //                             <div>
    //                                 <input type="number" id="first_product" class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1  " placeholder="1" required/>
    //                             </div>
    //                             <button class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none  focus:ring-4 focus:ring-gray-200 " type="button">
    //                                 <span class="sr-only">Quantity button</span>
    //                                 <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
    //                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
    //                                 </svg>
    //                             </button>
    //                         </div>
    //                     </td>
    //                     <td class="px-6 py-4 font-semibold text-gray-900">
    //                         100
    //                     </td>
    //                     <td class="px-6 py-4">
    //                         <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
    //                     </td>
    //                 </tr>

    //             </tbody>
    //         </table>
    //     </div>


    //     </>

    // )

//     const {
//         isEmpty,
//         totalUniqueItems,
//         items,
//         totalItems,
//         cartTotal,
//         updateItemQuantity,
//         removeItem,
//         emptyCart
//     } = useCart();

//     if (isEmpty) return <h1 className="text-center">Cart is Empty</h1>;
//     return (
//         <section className="py-4 container">
//             <div className="row justify-content-center">
//                 {console.warn(items)}
//                 <div className="col-12">
//                     <h5>
//                         Cart ({totalUniqueItems}) total Items: ({totalItems})
//                     </h5>
//                     <br />
//                     <table className="table table-light table-hover m-0">
//                         <tbody>
//                             <tr>
//                                 <td style={{ padding: "0px 100px 0px 10px" }}>
//                                     <b>Product</b>
//                                 </td>
//                                 <td style={{ padding: "0px 100px 0px 10px" }}>
//                                     <b>Name</b>
//                                 </td>
//                                 <td style={{ padding: "0px 50px 0px 0px" }}>
//                                     <b>Price</b>
//                                 </td>
//                                 <td style={{ padding: "0px 50px 0px 0px" }}>
//                                     <b>Quantuty</b>
//                                 </td>
//                             </tr>
//                             {items.map((item, index) => {
//                                 return (
//                                     <tr key={index}>
//                                         <td>
//                                             <img src={item.image} style={{ height: "6rem" }} alt="" />
//                                         </td>
//                                         <td>{item.title}</td>
//                                         <td>{item.price}</td>
//                                         <td> {item.quantity}</td>
//                                         <td>
//                                             <button
//                                                 style={{ border: "2px solid red" }}
//                                                 className="btn btn-light ms-2"
//                                                 onClick={() =>
//                                                     updateItemQuantity(item.id, item.quantity - 1)
//                                                 }
//                                             >
//                                                 –
//                                             </button>
//                                             <button
//                                                 style={{ border: "2px solid #fcba03" }}
//                                                 className="btn btn-light ms-2"
//                                                 onClick={() =>
//                                                     updateItemQuantity(item.id, item.quantity + 1)
//                                                 }
//                                             >
//                                                 +
//                                             </button>
//                                             <button
//                                                 className="btn btn-dark ms-2"
//                                                 onClick={() => removeItem(item.id)}
//                                             >
//                                                 Remove Item
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 );
//                             })}
//                         </tbody>
//                     </table>
//                 </div>
//                 <hr />
//                 <br />
//                 {/* <div> */}
//                 <div className="col-auto ms-auto">
//                     <h3>Total Price: Rs. {cartTotal}</h3>
//                 </div>
//                 <div className="col-auto ms-auto">
//                     <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
//                         Clear Cart
//                     </button>
//                     <button className="btn btn-primary m-2">Pay Now</button>
//                 </div>
//                 {/* </div> */}
//             </div>
//         </section>
//     );
// }
// export default CartProducts


     {/* <div className="row justify-content-center">
                 
                        <div className="col-12">
                            <h5>
                                Cart ({totalUniqueItems}) total Items: ({totalItems})
                            </h5>
                            <br />
                            <table className="table table-light table-hover m-0">
                                <tbody>
                                    <tr>
                                        <td style={{ padding: "0px 100px 0px 10px" }}>
                                            <b>Product</b>
                                        </td>
                                        <td style={{ padding: "0px 100px 0px 10px" }}>
                                            <b>Name</b>
                                        </td>
                                        <td style={{ padding: "0px 50px 0px 0px" }}>
                                            <b>Price</b>
                                        </td>
                                        <td style={{ padding: "0px 50px 0px 0px" }}>
                                            <b>Qunatity</b>
                                        </td>
                                    </tr>
                                    {items.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <img src={item.image} style={{ height: "6rem" }} alt="" />
                                                </td>
                                                <td>{item.title}</td>
                                                <td>{item.price}</td>
                                                <td>{item.varaiation}*{item.quantity}</td>
                                                <td>
                                                    <button
                                                        style={{ border: "2px solid red" }}
                                                        className="btn btn-light ms-2"
                                                        onClick={() =>
                                                            updateItemQuantity(item.id, item.quantity - 1)
                                                        }
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus"><path d="M5 12h14" /></svg>
                                                    </button>
                                                        <input class="mx-2 border text-center w-8" type="text" value="1" />

                                                    <button
                                                        style={{ border: "2px solid #fcba03" }}
                                                        className="btn btn-light ms-2"
                                                        onClick={() =>
                                                            updateItemQuantity(item.id, item.quantity + 1)
                                                        }
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                                    </button>
                                                   

                                                    <button
                                                        className="btn btn-dark ms-2"
                                                        onClick={() => removeItem(item.id)}
                                                    >
                                                        Remove Item
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <hr />
                        <br />
                
                        <div className="col-auto ms-auto">
                            <h3>Total Price: Rs. {cartTotal}</h3>
                        </div>
                        <div className="col-auto ms-auto">
                            <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
                                Clear Cart
                            </button>
                            <button className="btn btn-primary m-2">Pay Now</button>
                        </div>
                    
                    </div> */}







                             {/* <div class="relative overflow-x-auto w-full lg:w-[65%] mr-[5%] mb-5 lg:mb-0">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 rounded-md ">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
                                <tr>
                                    <th scope="col" class="px-16 py-3">
                                        Image
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Product
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Qty
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => {
                                    return (
                                        <tr class="" key={index}>
                                            <td class="p-4">
                                                <img src="" class="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                                            </td>
                                            <td class="px-6 py-4 font-semibold text-gray-900 ">
                                               Darshan
                                            </td>
                                            <td class="px-6 py-4">
                                                <div class="flex items-center">
                                                    <button class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none  focus:ring-4 focus:ring-gray-200 " type="button">
                                                        <span class="sr-only">Quantity button</span>
                                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                                        </svg>
                                                    </button>
                                                    <div>
                                                        <input type="number" id="first_product" class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1  " placeholder="1" required />
                                                    </div>
                                                    <button class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none  focus:ring-4 focus:ring-gray-200 " type="button">
                                                        <span class="sr-only">Quantity button</span>
                                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td class="px-6 py-4 font-semibold text-gray-900">
                                                100
                                            </td>
                                            <td class="px-6 py-4">
                                                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div> */}