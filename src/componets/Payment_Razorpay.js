import React from 'react'
import { useSelector } from 'react-redux';
import { selectCartItems } from '../store/CartSlice';
import { getSingleProduct } from '../store/ProductsSlice';

function Payment_Razorpay(event) {

  const cartItems = useSelector(selectCartItems);
  const product = useSelector(getSingleProduct);

  // Calculate total price
  const totalPrice = product
    ?
    parseFloat(product.price) * (product.quantity || 1)
    :
    cartItems.reduce((accumulator, item) => {
      const price = parseFloat(item.price);
      const quantity = item.quantity || 1;

      // Check if price is a valid number
      if (!isNaN(price)) {
        return accumulator + (price * quantity); // Accumulate the total price
      }

      return accumulator; // Return current total if price is NaN
    }, 0); // Start the accumulation at 0

  console.log("Total Price:", totalPrice); // Log the total price for debugging

  const paymentHandler = async (e) => {
    const amount = totalPrice;
    const currency = "INR";
    const receiptId = '2234567';
    const response = await fetch('http://localhost:5000/payment/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId
      })
    })
    const data = await response.json();
    console.log(data);

    const option = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID || 'your_razorpay_key_id_here', // Razorpay key_id
      amount, // Amount in paise
      currency,
      name: 'Creators',
      description: 'Test Transaction',
      order_id: data.id, // The order ID returned from the backend
      handler: async function (response) {
        const body = { ...response };
        const validateResponse = await fetch('http://localhost:5000/payment/validate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        });
        const jsonRequest = await validateResponse.json();
        console.log('jsonRequest', jsonRequest);
      },
      prefill: {
        name: 'Mahesh Pathak',
        email: 'maheshpathak200@gmail.com',
        contact: '9561014018'
      },
      theme: {
        color: '#F37254'
      },
    };

    var rzp1 = new window.Razorpay(option);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    })

    rzp1.open();
    e.preventDefault();
  }

  return (
    <div>
      <div className=''>
        {/* <h1>Razporpay Payment Getway</h1> */}
        <button
          className='uppercase  shadow-xl px-4 py-2 rounded-lg w-auto bg-orange-500 m-3 border text-white'
          onClick={paymentHandler}
        >
          Place order
        </button>
      </div>
    </div>
  )
}

export default Payment_Razorpay