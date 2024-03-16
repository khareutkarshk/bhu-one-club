"use client";
import React from 'react'
import { useForm } from 'react-hook-form';
import lokSabha from "@/constant/lokSabha.json"
import { useState } from 'react';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import aippm from "@/constant/aippm.json"
import nmc from "@/constant/nmc.json"
import unga from "@/constant/unga.json"
import unWomen from "@/constant/unWomen.json"
import unhrc from "@/constant/unhrc.json"
import axios from 'axios';
import qr from "@/asset/qr.jpg"
import Image from 'next/image';
import upvs from '@/constant/upVidhan.json'
function Mock() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [amount, setAmount] = useState(899);
    const [loading, setLoading] = useState(false);
    const submitClick = async (data: any) => {
        setLoading(true);
        const res = await axios.post('/api/send', {...data, 'category': 'MOCK CSE'});
        alert('Form Submitted Successfully');
        setLoading(false);
    }
  return (
    <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title justify-center text-3xl items-center">Fill this form!</h2>
                <div>
                    <form onSubmit={handleSubmit(submitClick)}>
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
                                <span className="label-text">Pay total sum of <span className='font-black'>Rs. {amount}
                                    </span> </span>
                            </label>
                            <div className='flex mb-2 justify-center'>
                                <Image src={qr} width={300} alt='UPI QR tag'></Image>
                            </div>
                            <input type="text" placeholder='Enter Transaction Id' {...register('transactionId', { required: true })} className="input input-bordered input-primary" />
                            {errors.transactionId && <span className="text-red-500 mt-1 text-sm">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <button type="submit" className="btn btn-primary mt-3">{
                                loading ? 'Processing...' : 'Submit'
                            
                            }</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
  )
}

export default Mock
