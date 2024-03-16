"use client";
import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import bhu from "@/asset/bhu-logo.png";
import { useState } from 'react';
import Image from 'next/image';
import YouthParliament from '@/Components/YouthParliament';
import Sidebar from '@/Components/Sidebar';
import QuizComponent from '@/Components/QuizComponent';
import Mock from '@/Components/Mock';
function page() {
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
          <Mock></Mock>
        </main>
      </div>
    </div>
  </>
  )
}

export default page
