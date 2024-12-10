import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavigationDropdown() {
    const navigate = useNavigate();

    const handleNavigation = (e) => {
        const selectNav = e.target.value;
        if (selectNav === '/logout') {
            localStorage.removeItem('token');
            navigate('/login');
        }
        else {
            navigate(selectNav)
        }
    }
    return (
        <div>
            <select
                className="w-full p-2 border-gray-300 rounded-md focus:outline-none"
                onChange={handleNavigation}
            >
                <option value="">Mahesh</option>
                <option value="/profile">My Profile</option>
                <option value="/orders">Orders</option>
                <option value="/wishlist">Wishlist</option>
                <option value="/logout">Logout</option>
            </select>
        </div>
    )
}

export default NavigationDropdown