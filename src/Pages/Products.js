import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, getAllProducts } from '../store/ProductsSlice';
import { Link } from 'react-router-dom';

function Products() {
    const products = useSelector(getAllProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts(100));
    }, [dispatch]);
    // console.log(products.id)
    const original_val = 0;

    return (
        <div>
            <h1 className=' text-center'> All Products</h1>
            <div >
                <ul className=' grid grid-cols-8  '>
                    {products && products.map((product) => (
                        
                        <Link to={`product/${product.id}`} className='border m-5 shadow-lgnpm col-span-2 my-4 items-center' key={product.id}>
                            <li >
                                <img className='w-auto' src={product.thumbnail} alt={product.title} loading='lazy' />
                                <div className=' text-center font-semibold'>{product.title}</div>
                                <div className='flex justify-center space-x-2 my-2'>
                                    {product.tags.map((tag, index) => (
                                        <span key={index} className="tag bg-gray-200 px-2 py-0.5 rounded text-xs">
                                            {tag.trim()}
                                        </span>
                                    ))}
                                </div>

                                <div className='mx-2 flex justify-around'>
                                    <span className=' bg-green-600 w-auto rounded-lg text-sm px-1.5 py-0.5'>{product.rating} ★ </span>
                                    <span className=' mx-3 w-auto rounded-lg text-sm px-1.5 py-0.5'>{product.returnPolicy}</span>
                                </div>
                                <div className=' flex justify-around  space-x-2 my-2'>
                                    <div className='flex justify-center space-x-2'>
                                        <span>₹{product.price}</span>
                                        <span className='line-through opacity-50'>
                                            ₹{(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                                        </span>
                                    </div>
                                    <span className=' font-semibold'>{product.discountPercentage} %</span>
                                    <span className={` w-auto text-center rounded-lg text-white text-xs px-2 py-1 ${product.availabilityStatus === "Low Stock" ? 'bg-red-600' : 'bg-green-500'}`}>
                                        {product.availabilityStatus === "Low Stock" ? "Low Stock" : "In Stock"}
                                    </span>
                                </div>
                                <div>

                                </div>

                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Products;