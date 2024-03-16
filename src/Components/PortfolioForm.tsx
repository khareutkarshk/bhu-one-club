"use client";
import React from 'react'
import { useForm } from 'react-hook-form';
import lokSabha from "@/constant/lokSabha.json"
import { useState } from 'react';
function PortfolioForm() {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const [loksabha, setLoksabha] = useState(lokSabha)
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title justify-center text-3xl items-center">Fill this form!</h2>
                <div>
                    <form onSubmit={handleSubmit((data) => console.log(data))}>
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
        </div>
    )
}

export default PortfolioForm
