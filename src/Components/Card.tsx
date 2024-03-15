"use client"
import React from 'react'
import parliament from "@/asset/parliament.jpg"
import mock from "@/asset/mock.jpg"
import quiz from "./../asset/quiz.jpg"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
function Card({ title, image }: any) {
    const router = useRouter();

    const handleCardClick = () => {
        router.push('/youth-parliament')
    }
    return (
        <>
            <div onClick={handleCardClick} className="card cursor-pointer card-compact w-72  bg-base-100 shadow-xl">
                <Image src={image} alt="parliament" width={320} height={240}></Image>
                <div className="card-body flex">
                    <h2 className="card-title">{title}</h2>
                    <div className="badge float-right badge-success badge-outline">Know More</div>
                </div>
            </div>
        </>
    )
}

export default Card
