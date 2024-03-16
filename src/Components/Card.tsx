"use client"
import React from 'react'
import parliament from "@/asset/parliament.jpg"
import mock from "@/asset/mock.jpg"
import quiz from "./../asset/quiz.jpg"
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
function Card({ data }: any) {
    const router = useRouter();
    const pathname = usePathname();

    const handleCardClick = (path:any) => {
        if(pathname === '/'){
            router.push('/' + path);

        }else if(pathname === '/youth-parliament'){
            router.push('/youth-parliament/' + path);
        }
    }
    return (
        <>
            <div onClick={() => handleCardClick(data.slug)} className="card cursor-pointer card-compact w-72  bg-base-100 shadow-xl">
                <Image src={data.image} alt="parliament" width={320} height={240}></Image>
                <div className="card-body flex">
                    <h2 className="card-title">{data.title}</h2>
                    <div className="badge float-right badge-success badge-outline">Know More</div>
                </div>
            </div>
        </>
    )
}

export default Card
