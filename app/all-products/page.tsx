"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

const page = () => {
    const [data, setData] = useState<any[]>([]);

    const getData = async () => {
        try {
            const response = await fetch('/api/product');
            if (!response.ok) {
                throw new Error('Failed to fetch data')
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    useEffect(() => {
        getData()
    }, []);

    console.log(data, "data")

    return (
        <div>
            <ul>
                {data.map((item: any) => {
                    return (
                        <li key={item._id} className='mb-5'>
                            <div>{item.name}</div>
                            <div>{item.description}</div>
                            <div>{item.image}</div>
                            <div>{item.category}</div>
                            <div>{item.subcategory}</div>
                            <div>{item.variants}</div>
                            <div>{item.price}</div>
                            <button>
                                <Link href={`/single-product/${item._id}`}>See Product</Link>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default page;
