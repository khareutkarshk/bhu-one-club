"use client";
import React from 'react'
import { useForm } from 'react-hook-form';
import lokSabha from "@/constant/lokSabha.json"
import { useState } from 'react';
import Script from 'next/script';
import Razorpay from 'razorpay';
import axios from 'axios';
function PortfolioForm() {

    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const [loksabha, setLoksabha] = useState(lokSabha)

    const makePayments = async () => {

        // const response = await fetch('/api/razorpay', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         amount: 50000, // Amount is in currency subunits
        //         currency: 'INR',
        //         receipt: 'receipt#1',
        //         notes: {
        //             key1: 'value3',
        //             key2: 'value2',
        //         },
        //     }),
        // });

        const response = await axios.post('/api/razorpay', {
            amount: 50000, // Amount is in currency subunits
            currency: 'INR',
            receipt: 'receipt#1',
            notes: {
                key1: 'value3',
                key2: 'value2',
            },
        });

        console.log('response', response);
        

        const orderId = response.data.orderId;
        console.log(orderId);
        
        const options = {
            key_id: process.env.RAZORPAY_KEY, // Replace with your actual Razorpay key_id
            key_secret: process.env.RAZORPAY_SECRET,
            "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Acme Corp", //your business name
            "description": "Test Transaction",
            "image": "https://manuarora.in/logo.png",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            // "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
            // "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
            //     "name": "Gaurav Kumar", //your customer's name
            //     "email": "gaurav.kumar@example.com",
            //     "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            // }
        };
        const rzr = (window as any).Razorpay(options);
        rzr.open();

    }

    return (
        <div className="card w-full bg-base-100 shadow-xl" >

            <div className="card-body">
                <h2 className="card-title justify-center text-3xl items-center">Fill this form!</h2>
                <div>
                    <form onClick={handleSubmit(makePayments)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder='Enter Your Name' {...register('name', { required: true })} className="input input-bordered input-primary" />
                            {errors.name && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder='Enter Email' {...register('email', { required: true })} className="input input-bordered input-primary" />
                            {errors.email && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mobile Number</span>
                            </label>
                            <input type="tel" placeholder='Enter your 10 digit mobile number' {...register('mobileNumber', { required: true })} className="input input-bordered input-primary" />
                            {errors.mobileNumber && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">School/College</span>
                            </label>
                            <input type="text" placeholder='Enter Your School/College Name' {...register('schoolCollege', { required: true })} className="input input-bordered input-primary" />
                            {errors.schoolCollege && <span className="text-red-500 mt-1 text-sm">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Portfolio First Preference</span>
                            </label>
                            <select className='select select-bordered w-full select-primary'>
                                <option>Select Your Preference</option>
                                {
                                    loksabha.map((item: any) => (
                                        <option key={item.id} value={item.id}>{item.name} {`(${item.portfolio})`}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Portfolio Second Preference</span>
                            </label>
                            <select className='select select-bordered w-full select-primary'>
                                <option>Select Your Preference</option>
                                {
                                    loksabha.map((item: any) => (
                                        <option key={item.id} value={item.id}>{item.name} {`(${item.portfolio})`}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Portfolio Third Preference</span>
                            </label>
                            <select className='select select-bordered w-full select-primary'>
                                <option>Select Your Preference</option>
                                {
                                    loksabha.map((item: any) => (
                                        <option key={item.id} value={item.id}>{item.name} {`(${item.portfolio})`}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-control">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </div >
    )
}

export default PortfolioForm
