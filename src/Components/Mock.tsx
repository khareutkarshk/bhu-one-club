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
function Mock() {
    const pathname = usePathname();
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [amount, setAmount] = useState(899);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const closeModal = () => setIsOpen(false);
    const [modelContent, setModelContent] = useState(``)


    useEffect(()=>{
        if(pathname === '/mock-cse'){
            setModelContent(`<h1 class="text-2xl font-bold mb-4">MOOCK CIVIL SERVICES EXAMINATION</h1>
            <p class="text-base text-justify">"सफलता के लिए संकल्पित होना ही काफ़ी भी है,उसे प्राप्त करने के लिए करवाई करना भी जरूरी है"। 
            <br/>
            <br/>

            Embark your UPSC journey by enhancing your preparation through the mock test.This mock exam can become a valuable tool for your preparation,track the progress and increase your chances of success in the highly competitive Civil Services Examinations..            <br/>

            We are presenting before you a complete UPSC CSE Mock Exam for those who want to identify their strengths and weaknesses,can focus on areas that need improvement and boost their confidence before the actual exam.A complete journey and a roadmap which will include Prelims,Mains,CSAT paper as well as the interview to check your preparation for those who are ready for the exam and also for the beginners to know about the exams.             <br/>
            <br/>

            This will also provide a real time experience of attempting the UPSC exam, which can help to reduce anxiety and nervousness on the exam day.Give this mock exam whole heartedly and in the best way you can.
            <br/>
            <br/>
            "Never do anything half heartedly,if you want something.You put all your heart into it or not at all.If you are not doing it with all your heart, then what's the point of doing it?"
            <br/>
                 ----DR.TANU JAIN MA'AM</p>`)
        }
    }, [])

    const submitClick = async (data: any) => {
        setLoading(true);
        const payload = {
            ...data,
            ACCESS_TOKEN: "bCXHldXmCdOR6ZIvHpDXGtQnUh99VXj6NfNw1YfThfKghGjCoS"
        }
        // const mail = await axios.post('/api/send', {...data, 'category': 'MOCK CSE'});
        const res = await axios.post('/mock-test/new', payload)
        toast.success('We have saved your response.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setLoading(false);
    }
  return (
    <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body relative">
                <h2 className="card-title text-gray-900 justify-center text-3xl items-center">Register for Mock CSE</h2>
                <div>
                    {isOpen ? (
                        <div className="absolute top-0 left-0 flex items-center justify-center z-50">
                            <div className="bg-gray-800 bg-opacity-80 rounded shadow-lg p-4 sm:p-8 md:p-6 m-4 sm:m-0 md:w-full md:h-full max-h-full text-center z-50 overflow-auto">
                                <div className='text-white' dangerouslySetInnerHTML={{ __html: modelContent }}></div>
                                <button
                                    onClick={closeModal}
                                    className="mt-4 px-4 py-2 text-white bg-blue-500 rounded"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    ): null}
                </div>
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
                            <input type="tel" placeholder='Enter your 10 digit mobile number' {...register('mobile_number', { required: true })} className="input input-bordered input-info text-gray-900" />
                            {errors.mobile_number && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">School/College</span>
                            </label>
                            <input type="text" placeholder='Enter Your School/College Name' {...register('school', { required: true })} className="input input-bordered input-info text-gray-900" />
                            {errors.school && <span className="text-red-500 mt-1 text-sm">This field is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Discount Coupon</span>
                            </label>
                            <input type="text" placeholder='Enter Your School/College Name' {...register('discount_coupon')} className="input text-black input-bordered input-info" />
                        </div>
                    
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Pay total sum of <span className='font-black'>Rs. {amount}
                                    </span> </span>
                            </label>
                            <div className='flex mb-2 justify-center'>
                                <Image src={qr} width={300} alt='UPI QR tag'></Image>
                            </div>
                            <input type="text" placeholder='Enter Transaction Id' {...register('utr', { required: true })} className="input input-bordered input-info text-gray-900" />
                            {errors.utr && <span className="text-red-500 mt-1 text-sm">This field is required</span>}
                        </div>
                        
                        <div className="form-control">
                            <button type="submit" className="btn btn-neutral mt-3">{
                                loading ? 'Processing...' : 'Submit'
                            
                            }</button>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">For Payment or form related issue, contact on +91 93344 16542</span>
                            </label>

                            
                        </div>
                    </form>
                </div>

            </div>
        </div>
  )
}

export default Mock
