import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; // Import Link
import { searchProducts } from '../store/ProductsSlice';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useDebounce from '../componets/Hook/useDebounce'
import SearchIcon from '@mui/icons-material/Search';
import NavigationDropdown from './NavigationDropdown';


function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const debouncedSearchQuery = useDebounce(searchQuery, 500);
    const dispatch = useDispatch();
    // const navigate = useNavigate();


    useEffect(() => {
        if (debouncedSearchQuery) {
            dispatch(searchProducts(debouncedSearchQuery));
        } else {
            dispatch(searchProducts(''));
        }
    }, [debouncedSearchQuery, dispatch]);

    return (
        <div className='w-full bg-slate-100 py-3 shadow-md'>
            <div className='container mx-auto grid grid-cols-7 items-center text-center px-10 '>
                {/* Logo */}
                <div className='col-span-1 flex'>
                    <Link to="/">
                        <img className='w-32 h-auto' src={require('../img/flipkart.svg').default} alt="logo" />
                    </Link>
                </div>

                {/* Search Input */}
                <div className='col-span-3 mx-5'>

                    <div className="flex items-center border border-gray-300 rounded-md">
                        <SearchIcon style={{ fontSize: '40px' }} className="text-gray-500 p-1.5" />
                        <input
                            type='text'
                            className="w-full p-2  border-gray-300 rounded-md focus:outline-none"
                            placeholder="Search for products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Other elements */}
                <div className='col-span-1 mx-5'>
                    <NavigationDropdown />
                </div>

                <div className='col-span-1 mx-5'>
                    <Link to="/cart" className="text-lg font-semibold text-gray-800 "> <ShoppingCartIcon />Cart</Link>
                </div>

                <div className='col-span-1  mx-5'>
                    <Link className="text-lg font-semibold text-gray-800 "><MoreVertIcon /></Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
