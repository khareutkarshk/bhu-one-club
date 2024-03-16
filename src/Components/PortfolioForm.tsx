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
function PortfolioForm() {
    const pathname = usePathname();
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [selectedOptions, setSelectedOptions] = useState({ first: "", second: "", third: "" });
    const [amount, setamount] = useState<any>()
    const firstPreference = watch("firstPreference");
    const secondPreference = watch("secondPreference");
    const thirdPreference = watch("thirdPreference");
    const [loksabha, setLoksabha] = useState<any>([])
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setSelectedOptions({ first: firstPreference, second: secondPreference, third: thirdPreference });
        console.log(selectedOptions);

    }, [firstPreference, secondPreference, thirdPreference]);


    useEffect(() => {
        if (pathname === '/youth-parliament/lok-sabha') {
            setLoksabha(lokSabha)
            setamount(800)
        } else if (pathname === '/youth-parliament/aippm') {
            setLoksabha(aippm)
            setamount(800)

            console.log(aippm);

        }
        else if (pathname === '/youth-parliament/nmc') {
            setLoksabha(nmc)
            setamount(700)

        }
        else if (pathname === '/youth-parliament/unga') {
            setLoksabha(unga)
            setamount(700)

        }
        else if (pathname === '/youth-parliament/un-women') {
            setLoksabha(unWomen)
            setamount(700)

        }
        else if (pathname === '/youth-parliament/unhrc') {
            setLoksabha(unhrc)
            setamount(700)

        }else if(pathname === '/youth-parliament/up-vidhan-sabha'){
            setLoksabha(upvs)
            setamount(700)
        }

    }, [])

    const submitClick = async (data: any) => {
        setLoading(true);
        const res = await axios.post('/api/send', {...data, 'category': 'Youh Parliament'});
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
                                <span className="label-text">Experience</span>
                            </label>

                            <textarea placeholder='Share Your Experience...' {...register('experience', { required: true })} className="textarea textarea-bordered textarea-primary" />
                            {errors.experience && <span className="text-red-500 mt-1 text-sm">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Portfolio First Preference</span>
                            </label>
                            <select className='select select-bordered w-full select-primary'  {...register('firstPreference', { required: true })}>
                                <option>Select Your Preference</option>
                                {
                                    loksabha.map((item: any) => (
                                        <option
                                            key={item.id}
                                            value={item.id}
                                            disabled={selectedOptions.second === item.name || selectedOptions.third === item.name}
                                        >{item.name} {item.portfolio ? `${item.portfolio}` : null}</option>
                                    ))
                                }
                            </select>
                            {errors.firstPreference && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Portfolio Second Preference</span>
                            </label>
                            <select className='select select-bordered w-full select-primary'  {...register('secondPreference', { required: true })}>
                                <option>Select Your Preference</option>
                                {
                                    loksabha.map((item: any) => (
                                        <option
                                            key={item.id}
                                            value={item.id}
                                            disabled={selectedOptions.first === item.name || selectedOptions.third === item.name}
                                        >{item.name} {item.portfolio ? `${item.portfolio}` : null}</option>
                                    ))
                                }
                            </select>
                            {errors.secondPreference && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Portfolio Third Preference</span>
                            </label>
                            <select className='select select-bordered w-full select-primary'  {...register('thirdPreference', { required: true })}>
                                <option>Select Your Preference</option>
                                {
                                    loksabha.map((item: any) => (
                                        <option
                                            key={item.id}
                                            value={item.id}
                                            disabled={selectedOptions.first === item.name || selectedOptions.second === item.name}
                                        >{item.name} {item.portfolio ? `${item.portfolio}` : null}</option>
                                    ))
                                }
                            </select>
                            {errors.thirdPreference && <span className="text-red-500 text-sm mt-1">This field is required</span>}
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
                            <button type="submit" disabled={loading} className="btn btn-primary mt-3">{
                                loading ? 'Processing...' : 'Submit'
                            
                            }</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default PortfolioForm
