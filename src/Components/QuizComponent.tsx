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
import { toast } from 'react-toastify';
function QuizComponent() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [amount, setAmount] = useState(299);
    const [loading, setLoading] = useState(false);
    const submitClick = async (data: any) => {
        try {
            setLoading(true);
            console.log(data);
            const res = await axios.post('/api/send', {...data, 'category': 'Quiz'});
            toast.success('We have saved your response.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            
        }
    }
  return (
    <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title justify-center text-3xl items-center text-gray-900">Register for Quiz</h2>
                <div>
                    <form onSubmit={handleSubmit(submitClick)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder='Enter Your Name' {...register('name', { required: true })} className="input input-bordered input-info text-gray-900" />
                            {errors.name && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder='Enter Email' {...register('email', { required: true })} className="input input-bordered input-info text-gray-900" />
                            {errors.email && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mobile Number</span>
                            </label>
                            <input type="tel" placeholder='Enter your 10 digit mobile number' {...register('mobileNumber', { required: true })} className="input input-bordered input-info text-gray-900" />
                            {errors.mobileNumber && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">School/College</span>
                            </label>
                            <input type="text" placeholder='Enter Your School/College Name' {...register('schoolCollege', { required: true })} className="input input-bordered input-info text-gray-900" />
                            {errors.schoolCollege && <span className="text-red-500 mt-1 text-sm">This field is required</span>}
                        </div>

                        <div className="form-control">
                            {/* quiz category select option */}
                            <label className="label">
                                <span className="label-text">Quiz Category</span>
                            </label>
                            <select {...register('quizCategory', { required: true })} className="select select-bordered select-info text-gray-900">
                                <option value="">Select Quiz Category</option>
                                <option value="Sports">Sports</option>
                                <option value="Science & Technology">Science & Technology</option>
                                <option value="General Quiz">General Quiz</option>
                                <option value="World Affairs">World Affairs</option>
                            </select>
                        </div>
                    
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Pay total sum of <span className='font-black'>Rs. {amount}
                                    </span> </span>
                            </label>
                            <div className='flex mb-2 justify-center'>
                                <Image src={qr} width={300} alt='UPI QR tag'></Image>
                            </div>
                            <input type="text" placeholder='Enter Transaction Id' {...register('transactionId', { required: true })} className="input input-bordered input-info text-gray-900" />
                            {errors.transactionId && <span className="text-red-500 mt-1 text-sm">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <button type="submit" className="btn btn-neutral mt-3">{
                                loading ? 'Processing...' : 'Submit'
                            
                            }</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
  )
}

export default QuizComponent
