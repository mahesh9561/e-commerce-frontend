import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function InputBox() {
    return (
        <div className="flex items-center border border-gray-300 rounded-md">
            <SearchIcon style={{ fontSize: '40px' }} className="text-gray-500 p-1.5" />
            <input 
                type="text" 
                className="w-full p-2 focus:outline-none" 
                placeholder='Search for Products, Brand and More' 
            />
        </div>
    );
}

export default InputBox;
