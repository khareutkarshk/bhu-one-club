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
                <button onClick={toggleSidebar} className="p-4 text-gray-900 text-2xl sm:hidden">
                  <FaBarsStaggered></FaBarsStaggered>
                </button>
              )
            }
            <div className="float-right	">

              <Image className="mix-blend-darken" src={bhu} alt="bhu-logo" width={250}></Image>
            </div>

          </header>

          <section className="bg-white w-full ">
            <div className="container px-6 py-12 mx-auto">
              <div className="text-center ">
                <p className="font-medium text-blue-500 ">Contact us</p>

                <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">We’d love to hear from you</h1>

                <p className="mt-3 text-gray-500 ">Chat to our friendly team.</p>
              </div>

              <img className="object-cover w-full h-64 mt-10 rounded-lg lg:h-96" src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=100" alt="" />

              <div className="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-4 sm:grid-cols-2 ">
                <div className="p-4 rounded-lg bg-blue-50 md:p-6 ">
                  <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>

                  <h2 className="mt-4 text-base font-medium text-gray-800 ">Chat to sales</h2>
                  <p className="mt-2 text-sm text-gray-500 ">Speak to our friendly team.</p>
                  <p className="mt-2 text-sm text-blue-500 ">theonepercentbhu@gmail.com</p>
                </div>

                <div className="p-4 rounded-lg bg-blue-50 md:p-6 ">
                  <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </span>

                  <h2 className="mt-4 text-base font-medium text-gray-800 ">Visit us</h2>
                  <p className="mt-2 text-sm text-gray-500 ">Visit our office HQ..</p>
                  <p className="mt-2 text-sm text-blue-500 ">72H2+4WF, Banaras Hindu University, Varanasi, Uttar Pradesh, 221005</p>
                </div>

                <div className="p-4 rounded-lg bg-blue-50 md:p-6 ">
                  <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>

                  <h2 className="mt-4 text-base font-medium text-gray-800 ">Call us</h2>
                  <p className="mt-2 text-sm text-gray-500 ">Mon-Fri from 8am to 5pm.</p>
                  <p className="mt-2 text-sm text-blue-500 ">+91 8512 80017, +91 78003 36600</p>
                </div>

                <div className="p-4 rounded-lg bg-blue-50 md:p-6 ">
                  <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 ">
                    <FaInstagram></FaInstagram>
                  </span>

                  <h2 className="mt-4 text-base font-medium text-gray-800 ">Instagram</h2>
                  <p className="mt-2 text-sm text-gray-500 ">
                    Follow us on Instagram.
                  </p>
                  <p className="mt-2 text-sm text-blue-500 ">@ig_the1percentclub</p>
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
