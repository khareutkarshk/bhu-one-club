"use client";
import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import bhu from "@/asset/bhu-logo.png";
import { useState } from 'react';
import Image from 'next/image';
import YouthParliament from '@/components/YouthParliament';
import Sidebar from '@/components/Sidebar';
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

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
                    <main className="p-8">
                        <div className="card w-full h-dvh bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-3xl">About Us</h2>

                                <div className='font-bold mt-4'>The One% Club</div>

                                <div>
                                    Welcome to The One% Club – your premier destination for UPSC exam preparation excellence. <br />
                                    We foster a collaborative community where members exchange ideas, strategies, and
                                    experiences to enhance their learning journey. With access to study materials, online resources,
                                    and guidance from experienced mentors who have excelled in the UPSC exams, we ensure
                                    personalized support for every aspirant. Beyond individual study, we offer engaging events and
                                    activities like debates, quizzes, and mock tests to facilitate holistic development and meaningful
                                    connections with peers. Join us and embark on your journey towards UPSC success today
                                </div>

                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Page
