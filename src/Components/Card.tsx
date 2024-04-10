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
        // if(pathname === '/'){
        //     router.push('/' + path);

        // }else if(pathname === '/youth-parliament'){
        //     // router.push('/youth-parliament/' + path);
        // }
        if(path === 'youth-parliament'){
            window.open('https://forms.gle/czwMKVcMoikbB8u29', '_blank');
        }else if(path === 'quiz'){
            window.open('https://forms.gle/dqMhYL8FNhyHX1nD9', '_blank');
        }else if(path === 'mock-cse'){
            window.open('https://forms.gle/ouUUTdMGggUSCAfC6', '_blank');
        }else if(path === 'combined-event-pass'){
            window.open('https://forms.gle/TwrajMbwhmwV9uja8', '_blank');
        }
    }
    return (
        <>
            <div onClick={() => handleCardClick(data.slug)} className="card cursor-pointer card-compact w-72  bg-base-100 shadow-xl">
                <Image src={data.image}  alt={data.title} width={320} height={240}></Image>
                <div className="card-body flex">
                    <h2 className="card-title text-gray-900">{data.title}</h2>
                    <div className="badge float-right badge-success badge-outline">Know More</div>
                </div>
            </div>
        </>
    )
}

export default Card
