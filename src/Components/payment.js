import React, { useEffect, useState } from 'react';
import paytm from '../Images/paytm.png';
import phonepe from '../Images/phonepe.png';
import gpay from '../Images/googlepay.png';
import other from '../Images/other.png';

export default function Payment() {
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [amount, setAmount] = useState();
 
    const handlePaymentSelection = (paymentMethod) => {
        setSelectedPayment(paymentMethod);
    };
    const handlePaymentConfirmation = () => {
        console.log(selectedPayment)
     if(selectedPayment == "Paytm"){
        window.location.reload("paytmmp://pay?pa=drashti.sohamtech@icici&pn=JohnDoe&cu=INR")
     }
     if(selectedPayment == "PhonePe"){
        window.location.reload("phonepe://pay?pa=drashti.sohamtech@icici&pn=JohnDoe&cu=INR")
     }
     if(selectedPayment == "GooglePay"){
        window.location.reload("paytmmp://pay?pa=drashti.sohamtech@icici&pn=JohnDoe&cu=INR")
     }
     if(selectedPayment == "Other"){
        window.location.reload("paytmmp://pay?pa=drashti.sohamtech@icici&pn=JohnDoe&cu=INR")
     }
    
    };
    const fatch = () =>{
        const url = "https://openapi.minapay.link/cash/html/upicashier.html?orderNum=1746021135599931392253325&amount=2500";
        const searchParams = new URLSearchParams(new URL(url).search);
        const amount = searchParams.get('amount');
        setAmount(amount)
      
    }
    useEffect(()=>{
        fatch();
    })
    return (
        <>
            <div className='h-36 bg-gradient-to-r from-[#4c60f5] to-[#53bbfa]'></div>
            <div className='flex items-center justify-center mt-[-20px] sm:mt-[-50px] lg:mt-[-50px] xl:mt-[-100px] 2xl:mt-[-100px]'>
                <div className='bg-white w-full sm:w-[90%] xl:w-[90%]  2xl:w-[90%] lg:w-[60%] rounded-lg p-5 overflow-y-auto max-h-[80%] box'>
                {/* <div className='bg-white w-full sm:w-[80%] lg:w-[60%] rounded-lg p-5 overflow-y-auto max-h-[80%] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'> */}
                    <p className='text-center text-[30px] font-bold'> ₹ {amount} </p>
                    <p className='text-center text-[14px] mt-[-5px]'>The amount you need to pay</p>
                    <div className="mx-auto mt-10 max-w-full lg:px-4 xmd:px-4 md:px-4 xsm:px-4 sm:px-2 xl:px-0 2xl:px-0">
                        <h2 className="font-medium text-gray-800">Select your payment method</h2>
                        <ul className="mt-6 space-y-3">
                            <li>
                              
                                <label htmlFor='Paytm' className='relative block'>
                                    <input
                                        id='Paytm'
                                        type='radio'
                                        name='payment'
                                        className='peer sr-only'
                                        onChange={() => handlePaymentSelection('Paytm')}
                                    />
                                    <div className='flex w-full cursor-pointer items-start justify-between gap-x-3 rounded-lg border bg-white p-4 
                                        shadow-sm ring-indigo-600 duration-200 peer-checked:ring-2'>
                                        <div className='flex-none'>
                                            <img src={paytm} alt='Paytm' className='h-10 w-10 object-contain' />
                                        </div>
                                        <div className='flex-grow'>
                                            <div>
                                                <h3 className='pr-3 font-medium leading-none text-gray-800'>Paytm</h3>
                                                <p className='mt-1 text-sm text-gray-600'>Mobile wallet and payment service</p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            className="w-6 h-6 rounded-full bg-white border border-gray-300 flex focus:outline-none"
                                            aria-label="Select Payment Method"
                                        >
                                            {selectedPayment === 'Paytm' && (
                                                <span className="w-4 h-4 mt-[3px] ml-[3px] rounded-full bg-blue-500 border border-blue-500"></span>
                                            )}
                                        </button>
                                    </div>
                                </label>
                            </li>

                            <li>
                                <label htmlFor='PhonePe' className='relative block'>
                                    <input
                                        id='PhonePe'
                                        type='radio'
                                        name='payment'
                                        className='peer sr-only'
                                        onChange={() => handlePaymentSelection('PhonePe')}
                                    />
                                    <div className='flex w-full cursor-pointer items-start justify-between gap-x-3 rounded-lg border bg-white p-4 
                                        shadow-sm ring-indigo-600 duration-200 peer-checked:ring-2'>
                                        <div className='flex-none'>
                                            <img src={phonepe} alt='PhonePe' className='h-10 w-10 object-contain' />
                                        </div>
                                        <div className='flex-grow'>
                                        <div>
                                            <h3 className='pr-3 font-medium leading-none text-gray-800'>PhonePe</h3>
                                            <p className='mt-1 text-sm text-gray-600'>Digital payment platform</p>
                                        </div>
                                        </div>
                                        <button
                                            type="button"
                                            className="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center focus:outline-none">
                                            {selectedPayment === 'PhonePe' && (
                                                <span className="w-4 h-4 rounded-full bg-blue-500 border border-blue-500"></span>
                                            )}
                                        </button>
                                    </div>


                                </label>
                            </li>
                            <li>
                                <label htmlFor='GooglePay' className='relative block'>
                                    <input
                                        id='GooglePay'
                                        type='radio'
                                        name='payment'
                                        className='peer sr-only w-full'
                                        onChange={() => handlePaymentSelection('GooglePay')}
                                    />
                                 <div className='flex w-full cursor-pointer items-start justify-between gap-x-3 rounded-lg border bg-white p-4 
                                        shadow-sm ring-indigo-600 duration-200 peer-checked:ring-2'>
                                        <div className='flex-none'>
                                            <img src={gpay} alt='Google Pay' className='h-10 w-10 object-contain' />
                                        </div>
                                        <div className='flex-grow'>
                                        <div>
                                            <h3 className='pr-3 font-medium leading-none text-gray-800'>Google Pay</h3>
                                            <p className='mt-1 text-sm text-gray-600'>Digital wallet platform</p>
                                        </div>
                                        </div>
                                        <button
                                            type="button"
                                            className="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center focus:outline-none"
                                            aria-label="Select Payment Method"
                                        >
                                            {selectedPayment === 'GooglePay' && (
                                                <span className="w-4 h-4 rounded-full bg-blue-500 border border-blue-500"></span>
                                            )}
                                        </button>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <label htmlFor='Other' className='relative block'>
                                    <input
                                        id='Other'
                                        type='radio'
                                        name='payment'
                                        className='peer sr-only'
                                        onChange={() => handlePaymentSelection('Other')}
                                    />
                                      <div className='flex w-full cursor-pointer items-start justify-between gap-x-3 rounded-lg border bg-white p-4 
                                        shadow-sm ring-indigo-600 duration-200 peer-checked:ring-2'>
                                        <div className='flex-none'>
                                            <img src={other} alt='Other' className='h-10 w-10 object-contain' />
                                        </div>
                                        <div className='flex-grow'>
                                        <div>
                                            <h3 className='pr-3 font-medium leading-none text-gray-800'>Other</h3>
                                            <p className='mt-1 text-sm text-gray-600'>Other payment methods</p>
                                        </div>
                                        </div>
                                        <button
                                            type="button"
                                            className="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center focus:outline-none"
                                            aria-label="Select Payment Method"
                                        >
                                            {selectedPayment === 'Other' && (
                                                <span className="w-4 h-4 rounded-full bg-blue-500 border border-blue-500"></span>
                                            )}
                                        </button>
                                    </div>

                                </label>
                            </li>
                            
                        </ul>
                        {selectedPayment && (
                     <button type='submit'
                     className='mt-10 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 block px-24 mx-auto rounded w-full '
                     onClick={handlePaymentConfirmation}
                 >
                     Pay ₹ {amount}
                 </button>
                    )}
                    </div>
                    
                    {/* Display selected payment method, if needed */}
                    
                </div>
            </div>
        </>
    );
}
