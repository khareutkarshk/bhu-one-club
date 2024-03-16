"use client";
import React from 'react'
import { useState } from 'react';
import Card from './Card';
import parliament from "@/asset/parliament.jpg"
import lokSabha from "@/constant/lokSabha.json"
import { usePathname } from 'next/navigation';
function YouthParliament() {
    const pathname = usePathname();
    const [data, setData] = useState(
        [
            { id: 1, title: 'Lok Sabha', image: parliament, portfolio: lokSabha, slug:"lok-sabha"},
            { id: 2, title: 'AIPPM', image: parliament },
            { id: 3, title: 'NMC', image: parliament },
            { id: 4, title: 'UP Vidhan Sabha', image: parliament },
            { id: 5, title: 'UNHRC', image: parliament },
            { id: 6, title: 'UN Women', image: parliament },
            { id: 7, title: 'UN Security Council', image: parliament },
            { id: 8, title: 'Press Conclave', image: parliament }
        ]
    )
    return (
        <div className='w-full gap-8 mt-8 flex flex-wrap justify-evenly'>
            {
                data.map((item: any) => (
                    <Card key={item.id} data={item}></Card>
                ))
            }
        </div>
    )
}

export default YouthParliament
