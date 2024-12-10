import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncProductsOfCategory, getAllCategories, getAllProductsByCategory } from '../store/CategorySlice';
import { Link, useParams } from 'react-router-dom';

function CategoryProducts() {
    const { category } = useParams();
    const dispatch = useDispatch();
    const categories = useSelector(getAllProductsByCategory);
    console.log(categories)
    useEffect(() => {
        dispatch(fetchAsyncProductsOfCategory(category))
    }, [dispatch])
    return (
        <div>
            <ul className=' grid grid-cols-8  '>
                {categories && categories.map((product) => (

                    <Link to={`../product/product/${product.id}`} className='border m-5 shadow-lgnpm col-span-2 my-4 items-center' key={product.id}>
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
    )
}

export default CategoryProducts