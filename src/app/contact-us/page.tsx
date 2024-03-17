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
                <h2 className="card-title text-3xl">Contact Us</h2>
                <div>If you have any queries, feel free to contact us. We will get back to you as soon as possible.</div>
                <div className="flex gap-4">
                    <div className="flex gap-1 text-xl items-center">
                        <span><BsWhatsapp></BsWhatsapp></span>
                        <p>+91 1234567890</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex gap-1 text-xl items-center">
                        <span><SiGmail></SiGmail></span>
                        <p>theonepercentbhu@gmail.com</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex gap-1 text-xl items-center">
                        <span><FaInstagram></FaInstagram></span>
                        <p>@ig_the1percentclub</p>
                    </div>
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
