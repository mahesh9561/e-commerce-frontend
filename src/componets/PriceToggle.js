import React, { useState } from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function PriceToggle({ SingleProduct }) {
    const [isPriceVisible, setIsPriceVisible] = useState(false);

    const handleToggle = () => {
        setIsPriceVisible(prevState => !prevState);
    };
    const price = (SingleProduct.price / (1 - SingleProduct.discountPercentage / 100)).toFixed(2)
    return (
        <div className="relative inline-block"> {/* Added inline-block for proper width calculation */}
            <span onClick={handleToggle} style={{ cursor: 'pointer' }}>
                <ErrorOutlineIcon className=' opacity-40'/>
            </span>
            <div
                className={`transition-all duration-300 absolute border bg-white rounded shadow-md overflow-hidden ${isPriceVisible ? 'block' : 'hidden'}`}
                style={{ opacity: isPriceVisible ? 1 : 0, top: '30px', left: '0', width: '300px' }} // Set a width to maintain space
            >
                <div className="p-4">
                    <h3 className='font-medium tracking-wider '>Price details</h3>
                    <div className=' flex justify-between items-end'>
                        <span className=' font-medium text-sm opacity-60'>Maximum Retail Price - </span>
                        <span className=' font-medium text-sm opacity-60'>₹{SingleProduct.price}</span>
                    </div>
                    <div className=' font-medium text-xs opacity-50'>(incl. of all taxes)</div>

                    <div className=' flex justify-between items-end my-5'>
                        <span className=' font-medium text-sm opacity-60'>Selling Price - </span>
                        <span className=' font-medium text-sm line-through opacity-50 ml-2'>₹{price}</span>
                    </div>

                    <div className=' flex justify-between items-end'>
                        <h3 className='font-medium '>Special Price - </h3>
                        <span className=' font-medium text-sm opacity-60'>₹{SingleProduct.price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PriceToggle;
