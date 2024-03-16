"use client";
import React from 'react'
import { FcAbout } from "react-icons/fc";
import { MdOutlineContactPhone } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import bhu from "@/asset/bhu-logo.png";
import Main from "@/Components/Main";
import { useState } from 'react';
import Image from 'next/image';
import logo from "@/asset/one_logo.webp"
import { GiBlackHandShield } from "react-icons/gi";
import { MdOutlineQuiz } from "react-icons/md";
import { RxPencil2 } from "react-icons/rx";
import YouthParliament from '@/Components/YouthParliament';
import { LuInfo } from "react-icons/lu";
import { useRouter } from 'next/navigation';
function Sidebar({ isOpen, toggleSidebar}:any) {
    const router = useRouter();
    const clickHandler = (path: string) => {
        router.push(path);
    }
    return (
        <>
            <div className={`bg-neutral z-10 transform ${isOpen ? 'block absolute' : 'hidden'} md:static  w-full md:w-96 lg:w-96 p-8 sm:block`}>
                {/* Your sidebar content goes here */}

                <div className="text-white gap-2 items-center">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">

                            <div>
                                <Image src={logo} alt="The One% Club" className="w-16 rounded-full" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl">
                                    The One% Club
                                </span>
                                <span className="text-sm">
                                    Civil Services Society
                                </span>
                            </div>
                        </div>
                        <div onClick={toggleSidebar} className="flex justify-end text-white text-2xl sm:hidden">
                            <MdClose></MdClose>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <ul className="menu text-lg gap-2 text-white">
                        <li onClick={() => clickHandler('/')} className="hover:text-gray-400">
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-2xl" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                Home
                            </a>
                        </li>
                        <li onClick={() => clickHandler('/youth-parliament')} className="hover:text-gray-400">
                            <a>
                                <GiBlackHandShield className="text-2xl"></GiBlackHandShield>
                                Youth Parliament
                            </a>
                        </li>
                        <li onClick={() => clickHandler('/quiz')} className="hover:text-gray-400">
                            <a>
                                <MdOutlineQuiz className="text-2xl"></MdOutlineQuiz>
                                Quiz
                            </a>
                        </li>
                        <li onClick={() => clickHandler('/mock-cse')} className="hover:text-gray-400">
                            <a>
                                <RxPencil2 className="text-2xl"></RxPencil2>
                                Mock Civil Services Examination
                            </a>
                        </li>
                        <li onClick={() => clickHandler('/about-us')} className="hover:text-gray-400">
                            <a>
                                <LuInfo className="text-2xl"></LuInfo>
                                About Us
                            </a>
                        </li>
                        <li onClick={() => clickHandler('/contact-us')} className="hover:text-gray-400">
                            <a>
                                <MdOutlineContactPhone className="text-2xl"></MdOutlineContactPhone>
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Sidebar
