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
    const pathname = usePathname();
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [amount, setAmount] = useState(299);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const closeModal = () => setIsOpen(false);
    const [modelContent, setModelContent] = useState(``)

    useEffect(()=>{
        if(pathname === '/quiz'){
            setModelContent(`<h1 class="text-2xl font-bold mb-4">Quizes</h1>
            <p class="text-base text-justify">A National Level quiz competition is a prestigious event that brings together participants across the nation to test their skill,ability, performance, aptitude and much more.The battleground of knowledge where curious minds meet challenging questions,create a spectacle that is both entertaining, knowledgeable,develop creative thinking and competitive environment and also offers a platforms for individuals to learn each other's perspectives and experiences <br/>
            Our community,The One % Club, feels immense pleasure to announce the  National Level Quiz Competition in our Civil Services Fest I- ACE 2.O,2024
            We will be having 4 different genres:<br/>
            1. SPORTS - Sports quiz involves creating engaging and challenging related to various sports while keeping them entertained and informed about the world of sports<br/>
            2. SCIENCE AND TECHNOLOGY - It will involve crafting questions that challenge participants knowledge of scientific concepts,technological advancements, inventions and discoveries<br/>
            3. GENERAL QUIZ - A dynamic and entertaining quiz,creating a mix of questions that challenge participants knowledge across various topics including history, geography, polity, science,literature and more<br/>
            4. WORLD AFFAIRS - A fun and interactive way to test your knowledge of global  events,current international issues, world leader and cultural aspects that will educate and challenge the participants while increasing their awareness of global events and trends
            Overall,The Natinal Level Quiz Competition is not only a platform of testing the individual's knowledge but here you can experience exchange of knowledge and learning and also intellectual growth among participants</p>`)
        }
    }, [])

    const submitClick = async (data: any) => {
        try {
            setLoading(true);
            const payload = {
                ...data,
                ACCESS_TOKEN: "bCXHldXmCdOR6ZIvHpDXGtQnUh99VXj6NfNw1YfThfKghGjCoS"

            }

            const mail = await axios.post('/api/send', {...data, 'category': 'Quiz'});
            const res = await axios.post('/quiz/new', payload)
            

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
            <div className="card-body relative">
                <h2 className="card-title justify-center text-3xl items-center text-gray-900">Register for Quiz</h2>
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
                            {errors.mobileNumber && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">School/College</span>
                            </label>
                            <input type="text" placeholder='Enter Your School/College Name' {...register('school', { required: true })} className="input input-bordered input-info text-gray-900" />
                            {errors.schoolCollege && <span className="text-red-500 mt-1 text-sm">This field is required</span>}
                        </div>

                        <div className="form-control">
                            {/* quiz category select option */}
                            <label className="label">
                                <span className="label-text">Quiz Category</span>
                            </label>
                            <select {...register('quiz_category', { required: true })} className="select select-bordered select-info text-gray-900">
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
                            <input type="text" placeholder='Enter Transaction Id' {...register('utr', { required: true })} className="input input-bordered input-info text-gray-900" />
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
