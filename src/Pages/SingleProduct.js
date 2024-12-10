import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProducts, getSingleProduct } from '../store/ProductsSlice';
import { addToCart } from '../store/CartSlice';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import PriceToggle from '../componets/PriceToggle';
import Payment_Razorpay from '../componets/Payment_Razorpay';


function SingleProduct() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const SingleProduct = useSelector(getSingleProduct);

    useEffect(() => {
        dispatch(fetchSingleProducts(id));
    }, [dispatch, id]);

    const handleCart = () => {
        dispatch(addToCart(SingleProduct));
        alert(`Successfully project in Cart - ${SingleProduct.title}`)
    };

    return (
        <div className='grid grid-cols-3 gap-6'>
            <div className='col-span-1'>
                <div>
                    <img className='' src={SingleProduct.thumbnail} alt="img" loading='lazy' />
                </div>
                <div className='grid grid-cols-4'>
                    {SingleProduct?.images?.length > 0 ? (
                        SingleProduct.images.map((img, index) => (
                            <img key={index} src={img} alt={`Product Image ${index}`} loading='lazy' />
                        ))
                    ) : (
                        <p>...Loading</p>
                    )}
                </div>
            </div>

            <div className='col-span-2 p-5'>
                        < div >
                        <h1 className='text-xl tracking-wide'>{SingleProduct.title}</h1>
                </div>
                <div className=''>
                    <span className='bg-green-600 w-auto rounded-lg text-sm px-1.5 py-0.5'>{SingleProduct.rating} ★</span>
                    <span className='w-auto rounded-lg text-sm px-1.5 py-0.5 font-semibold opacity-50'>
                        {SingleProduct?.reviews?.length ?? 0} Reviews
                    </span>
                </div>
                <div>
                    <h1 className='text-green-700 font-semibold my-2'>Special price</h1>
                </div>
                <div className='flex space-x-2 items-end gap-3 my-5'>
                    <span className='font-semibold text-2xl'>₹{SingleProduct.price}</span>
                    <span className='font-semibold line-through opacity-50'>
                        ₹{(SingleProduct.price / (1 - SingleProduct.discountPercentage / 100)).toFixed(2)}
                    </span>
                    <span className='font-semibold text-green-700'>{SingleProduct.discountPercentage} %</span>
                    <PriceToggle SingleProduct={SingleProduct} />
                </div>
                <div>
                    <span className='opacity-90 font-bold'>Warranty - </span>
                    <span className='opacity-60 font-bold'>{SingleProduct.warrantyInformation}</span>
                </div>

                <div className='grid grid-cols-2 my-5 text-white font-bold'>
                    <button onClick={handleCart} className='uppercase  shadow-xl px-4 py-2 rounded-lg w-auto bg-orange-500 m-3 border text-white'>ADD TO CART</button>
                    {/* <button onClick={handleBuy} className='px-3 py-3 border mx-4 bg-yellow-500'>BUY NOW</button> */}
                    <Payment_Razorpay product={SingleProduct} />
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;
