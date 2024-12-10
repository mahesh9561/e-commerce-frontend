// const handleRazarPay = async (amount, order_id) => {
//     const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

//     if (!res) {
//         alert("Some error on Razorpay screen");
//         return;
//     }

//     const options = {
//         key: 'rzp_test_QEEafAMjpba76g',
//         amount: amount,
//         currency: "INR",
//         name: "Order",
//         description: "Payment for your order",
//         image: "https://example.com/your_logo.png",
//         order_id: order_id, // Pass the created order ID here
//         handler: function (response) {
//             setResponseId(response.razorpay_payment_id); // Use response from Razorpay
//             console.log(response);
//         },
//         prefill: {
//             name: "Mahesh Pathak",
//             email: "maheshpathak200@gmail.com"
//         },
//         theme: {
//             color: '#F4C430'
//         }
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
// };

// const createRazarPayOrder = (amount) => {
//     let data = JSON.stringify({
//         amount: amount * 100, // Razorpay requires amount in paise
//         currency: "INR"
//     });

//     let config = {
//         method: "POST",
//         maxBodyLength: Infinity,
//         url: 'http://localhost:8000/orders',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         data: data
//     };

//     axios.request(config)
//         .then((response) => {
//             console.log(response.data);
//             handleRazarPay(response.data.amount, response.data.order_id); // Pass order ID for security
//         })
//         .catch(() => {
//             console.log("Error");
//         });
// };
