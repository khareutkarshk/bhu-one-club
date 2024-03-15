"use client"
import React from 'react'
import Card from './Card'
import parliament from "@/asset/parliament.jpg"
import mock from "@/asset/mock.jpg"
import quiz from "@/asset/quiz.jpg"
import { useState } from 'react'
function Main() {
    const [data, setData] = useState([
        {
            id: 1,
            title: "Youth Parliament",
            image: parliament,
        },
        {
            id: 3,
            title: "Quiz",
            image: quiz,
        },
        {
            id: 2,
            title: "Mock CSE",
            image: mock,
        },
        
    ])
    return (
        // <div className='w-full gap-8 mt-8 flex flex-wrap'>
        //     <Card />
        // </div>
        <div className='w-full gap-8 mt-8 flex flex-wrap'>
            {
                data.map((item:any) => (
                    <Card key={item.id} title={item.title} image={item.image}></Card>
                ))
            }
        </div>
    )
}

export default Main
