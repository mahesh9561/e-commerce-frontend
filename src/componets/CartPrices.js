import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../store/CartSlice';

function CartPrices() {
    const cartItems = useSelector(selectCartItems);
    let item = cartItems.length;
    // Calculate total price based on quantity
    const totalPrice = cartItems.reduce((accumulator, item) => {
        const price = parseFloat(item.price);
        const quantity = item.quantity || 1;
        if (!isNaN(price)) {
            return accumulator + (price * quantity);
        }
        return accumulator;
    }, 0);

    // Calculate total discount based on quantity
    const totalDiscount = cartItems.reduce((accumulator, item) => {
        const discountPercentage = parseFloat(item.discountPercentage) || 0;
        const price = parseFloat(item.price);
        const quantity = item.quantity || 1;
        if (!isNaN(price)) {
            const discountedPrice = price * (1 - discountPercentage / 100);
            return accumulator + (discountedPrice * quantity);
        }
        return accumulator;
    }, 0);
    const totalValue = (totalPrice + totalDiscount).toFixed(2)
    const discountValue = (totalValue - totalPrice).toFixed(2)

    return (
        <div className=' m-5'>
            <p className=' flex justify-between my-4 font-semibold'><span>Price ({item} items) </span> <span>₹{(totalValue)}</span></p>
            <p className=' flex justify-between my-4 font-semibold'><span>Discount </span><span>₹{totalDiscount.toFixed(2)}</span></p>
            <p className=' flex justify-between my-4 font-semibold'><span>Total Amount: </span> <span>₹{totalPrice.toFixed(2)}</span></p>
            <hr />
            <p className=' text-green-600 font-semibold my-4'>You will save ₹{discountValue} on this order</p>
        </div>
    );
}

export default CartPrices;
