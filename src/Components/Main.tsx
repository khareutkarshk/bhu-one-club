"use client"
import React from 'react'
import Card from './Card'
import parliament from "@/asset/parliament.jpg"
import mock from "@/asset/mock.jpg"
import quiz from "@/asset/quiz.jpg"
import { useState } from 'react'
import event0 from '@/asset/event_0.png'
import event1 from '@/asset/event_1.png'
import event2 from '@/asset/event_2.png'
import Image from 'next/image'
import event3 from '@/asset/all.png'
function Main() {
    const [data, setData] = useState([
        {
            id: 1,
            title: "Youth Parliament",
            image: parliament,
            slug: "youth-parliament"
        },
        {
            id: 3,
            title: "Quiz",
            image: quiz,
            slug: "quiz"
        },
        {
            id: 2,
            title: "Mock CSE",
            image: mock,
            slug: "mock-cse"
        },
        {
            id: 3,
            title: "Combined Event Pass",
            image: event3,
            slug: "combined-event-pass"
        },

    ])
    return (
        <>
            <div className='w-full gap-8 mt-8 flex flex-wrap'>
                <div className='grid lg:grid-cols-3 grid-cols-0 place-items-center w-full gap-3'>

                    {
                        data.map((item: any) => (
                            <Card key={item.id} data={item}></Card>
                        ))
                    }
                </div>
                <div className="md:w-2/3 w-full">
                    <div className='text-3xl flex justify-left text-gray-900 font-bold'>
                        Previous Events
                    </div>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <Image src={event0} alt="img1" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <Image alt="img1" src={event1} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <Image alt="img2" src={event2} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Main
