"use client";
import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import bhu from "@/asset/bhu-logo.png";
import { useState } from 'react';
import Image from 'next/image';
import YouthParliament from '@/Components/YouthParliament';
import Sidebar from '@/Components/Sidebar';
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import nancy from "@/asset/nancy-kuchwaha.png"
import satyansh from "@/asset/satyansh-mishra.png"
import sajal from "@/asset/sajal-mishra.png"
import shashi from "@/asset/shashi-raj-anand.png"
function Page() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className="flex h-full bg-gray-200">
                <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}></Sidebar>

                <div className="w-full bg-gray-100 h-full">
                    <header className="p-4">
                        {
                            !isOpen && (
                                <button onClick={toggleSidebar} className="p-4 text-2xl sm:hidden">
                                    <FaBarsStaggered></FaBarsStaggered>
                                </button>
                            )
                        }
                        <div className="float-right	">

                            <Image className="mix-blend-darken" src={bhu} alt="bhu-logo" width={250}></Image>
                        </div>

                    </header>

                    {/* Your main content goes here */}

                    <section className="bg-white dark:bg-gray-900">
                        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center pb-0 lg:px-6">
                            <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-neutral dark:text-white capitalize">About one% Club</h2>
                                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Welcome to The One% Club – your premier destination for UPSC exam preparation excellence.
                                    We foster a collaborative community where members exchange ideas, strategies, and experiences to enhance their learning journey. With access to study materials, online resources, and guidance from experienced mentors who have excelled in the UPSC exams, we ensure personalized support for every aspirant. Beyond individual study, we offer engaging events and activities like debates, quizzes, and mock tests to facilitate holistic development and meaningful connections with peers. Join us and embark on your journey towards UPSC success today</p>
                            </div>
                        </div>
                        <div className=" px-4 mx-auto max-w-screen-xl text-center lg:pb-16 lg:px-6 pt-0">
                            <div className="mx-auto mb-8 max-w-screen-sm">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-neutral dark:text-white capitalize">Our Team</h2>
                                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                                    Our team of administrators is dedicated to providing you with the best possible learning experience. With years of experience they are well-equipped to guide you through your journey towards success.
                                </p>
                            </div>
                            <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                <div className="text-center text-gray-500 dark:text-gray-400">
                                    <Image className="mx-auto h-full rounded-full object-cover" src={nancy} alt="Bonnie Avatar" />
                                    <div className='relative bottom-6'>

                                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-neutral dark:text-white">
                                            <a href="#">Nancy Kushwaha</a>
                                        </h3>
                                        <p>Director General</p>
                                    </div>
                
                                </div>
                                <div className="text-center text-gray-500 dark:text-gray-400">
                                    <Image className="mx-auto h-full rounded-full object-cover" src={satyansh} alt="Bonnie Avatar" />
                                    <div className='relative bottom-6'>

                                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-neutral dark:text-white">
                                            <a href="#">Satyansh Mishra</a>
                                        </h3>
                                        <p>Secretary General</p>
                                    </div>
                
                                </div>
                                <div className="text-center text-gray-500 dark:text-gray-400">
                                    <Image className="mx-auto h-full rounded-full object-cover" src={sajal} alt="Bonnie Avatar" />
                                    <div className='relative bottom-6'>

                                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-neutral dark:text-white">
                                            <a href="#">Sajal Mishra</a>
                                        </h3>
                                        <p>Chief Advisor</p>
                                    </div>
                
                                </div>
                                <div className="text-center text-gray-500 dark:text-gray-400">
                                    <Image className="mx-auto h-full rounded-full object-cover" src={shashi} alt="Bonnie Avatar" />
                                    <div className='relative bottom-6'>

                                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-neutral dark:text-white">
                                            <a href="#">Shashi Raj Anand</a>
                                        </h3>
                                        <p>Chief Advisor</p>
                                    </div>
                
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Page
