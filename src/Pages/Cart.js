import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity, selectCartItems, clearCart } from '../store/CartSlice';
import CartPrices from '../componets/CartPrices';
import Payment_Razorpay from '../componets/Payment_Razorpay';

function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const handleRemove = (id) => {
        if (id) {
            dispatch(removeFromCart(id));
        } else {
            console.error("Invalid item id:", id);
        }
    };

    const handleQuantityChange = (id, quantity) => {
        if (id && quantity > 0) {
            dispatch(updateQuantity({ id, quantity }));
        } else {
            console.error("Invalid quantity or id:", id, quantity);
        }
    };
    const totalPrice = cartItems.reduce((accumulator, item) => {
        const price = parseFloat(item.price);
        const quantity = item.quantity || 1;
        if (!isNaN(price)) {
            return accumulator + price * quantity;
        }
        return accumulator;
    }, 0);

    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return (
        <div className="grid grid-cols-3 bg-slate-100">
            <div className="col-span-2 p-4 ">
                <div className='px-2 py-3 bg-white shadow-xl rounded-lg my-5'>Address</div>
                {/* SECTION 1 */}
                <div className='px-2 py-3 bg-white shadow-xl rounded-lg items-center'>
                    {cartItems && cartItems.length > 0 ? (
                        <div className="p-4">
                            {cartItems.map((item, index) => (
                                <div key={item.id || index} className='grid grid-cols-4 shadow-md gap-4 items-center'>
                                    <div className='col-span-1 items-center flex flex-col justify-center'>
                                        <img
                                            className='w-auto h-auto'
                                            src={item.thumbnail || 'fallback-image-url.jpg'}
                                            alt={item.title || 'No title'}
                                        />
                                        {/* INCREAMET + DECREAMENT */}
                                        <div className=" flex items-center max-w-[8rem] my-5">
                                            <button
                                                type="button"
                                                onClick={() => handleQuantityChange(item.id, item.quantity > 1 ? item.quantity - 1 : 1)}
                                                className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                            >
                                                <svg
                                                    className="w-3 h-3 text-gray-900 dark:text-white"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 18 2"
                                                >
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                                </svg>
                                            </button>
                                            <input
                                                type="text"
                                                value={item.quantity || 1}
                                                onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                                                aria-describedby="helper-text-explanation"
                                                className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                min="1"
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                            >
                                                <svg
                                                    className="w-3 h-3 text-gray-900 dark:text-white"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 18 18"
                                                >
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-span-1'></div>
                                    <div className='col-span-2'>
                                        <h3>{item.title || 'No title available'}</h3>
                                        <div className=' flex justify-between'>
                                            <div>
                                                <p className='font-semibold'>Price : ₹{item.price}</p>
                                            </div>
                                            <div className='mx-10 bg-green-500 text-xs font-medium text-center px-2 py-1 rounded-lg'>
                                                <span>
                                                    Stock : {item.stock}
                                                </span>
                                            </div>
                                        </div>
                                        <p className=' flex text-red-700 font-semibold'>

                                            <span>Original Price :  </span>
                                            <span className='line-through opacity-50'>
                                                ₹{(item.price + (item.price + (1 - item.discountPercentage / 100))).toFixed(2)}
                                            </span>

                                        </p>
                                        <p className=' flex text-green-700 font-semibold'>
                                            <span>Discount Price :  </span>
                                            <span >
                                                ₹{(item.price / (1 - item.discountPercentage / 100)).toFixed(2)}
                                            </span>
                                        </p>
                                        <div className=' flex justify-between my-2'>
                                            <span className=' px-4 py-2 rounded-lg bg-yellow-200 w-auto '>{item.discountPercentage}%</span>
                                            <button className='px-4 py-2 rounded-md shadow-lg mx-10' onClick={() => handleRemove(item.id)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className=' flex justify-between mx-10 '>
                                <button className=' shadow-xl px-4 py-2 rounded-lg w-auto bg-red-500 m-3 border text-white ' onClick={handleClearCart}>Clear Cart</button>
                                {/* <button
                                    className=' uppercase  shadow-xl px-4 py-2 rounded-lg w-auto bg-orange-500 m-3 border text-white'
                                    onClick={<Payment_Razorpay />}
                                >Place Order</button> */}
                                <Payment_Razorpay totalPrice={totalPrice}/>
                            </div>
                        </div>
                    ) : (
                        <p>Your cart is empty</p>
                    )}
                </div>
            </div>
            {/* sECTION 2 */}
            <div className="col-span-1 bg-slate-100 py-4">
                <div className='px-2 py-3 bg-white shadow-xl rounded-lg my-5'>
                    <h1 className=' text-xl font-semibold uppercase text-gray-400 my-2'>Price details</h1>
                    <hr />
                    <CartPrices />
                </div>
                <div className='px-4 text-slate-500'>
                    <p className='text-lg font-semibold'>
                        Safe and Secure Payments. Easy returns. 100% Authentic products.
                    </p>
                </div>
            </div>
        </div>

    );
}

export default Cart;
