import React, { useState } from 'react'
import Admin_Header from './Admin_Header'

function Dashboard() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    // const [rating, setRating] = useState('');
    const [stock, setStock] = useState('');
    // const [reviews, setReviews] = useState([])

    const handleSubmit = () => {

    }
    return (
        <div>
            <div>
                <Admin_Header />
            </div>
            <div className="mx-4 mb-4 -mt-16">
                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white shadow-md sm:p-8 p-4 rounded-md">
                    <div className="grid md:grid-cols-2 gap-8">

                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Title</label>
                            <input name="lname" value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="bg-gray-100 outline-none border w-full text-sm text-gray-800 px-4 py-3 rounded-md transition-all" />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Description</label>
                            <input name="email" value={description} onChange={(e) => setDescription(e.target.value)} type="text" className="bg-gray-100 outline-none border w-full text-sm text-gray-800 px-4 py-3 rounded-md transition-all" />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Category</label>
                            <input name="text" value={category} onChange={(e) => setCategory(e.target.value)} type="text" className="bg-gray-100 outline-none border w-full text-sm text-gray-800 px-4 py-3 rounded-md transition-all" />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Price</label>
                            <input name="number" value={price} onChange={(e) => setPrice(e.target.value)} type="text" className="bg-gray-100 outline-none border w-full text-sm text-gray-800 px-4 py-3 rounded-md transition-all" />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Discount-Percentage</label>
                            <input name="number" value={discountPercentage} onChange={(e) => setDiscountPercentage(e.target.value)} type="text" className="bg-gray-100 outline-none border w-full text-sm text-gray-800 px-4 py-3 rounded-md transition-all" />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Stock</label>
                            <input name="number" value={stock} onChange={(e) => setStock(e.target.value)} type="text" className="bg-gray-100 outline-none border w-full text-sm text-gray-800 px-4 py-3 rounded-md transition-all" />
                        </div>

                    </div>
                    <div className="mt-8">
                        <button type="submit" className="py-3 px-6 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none">
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Dashboard