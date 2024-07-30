"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SingleProductPage = ({
    params,
}: {
    params: {
        id: string;
    };
}) => {

    const [data, setData] = useState<any>(null);
    const [click, setClick] = useState(false)

    const router = useRouter();

    const getData = async () => {
        try {
            const response = await fetch(`/api/product/${params.id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data')
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const deleteProduct = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete this ${data.productName}?`)
        if (hasConfirmed) {
            try {
                await fetch(`/api/product/${params.id}`, {
                    method: "DELETE",
                })
                router.push("/all-products")
            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        if (params.id) {
            getData()
        }
    }, [params.id]);

    // console.log(data, "data")

    return (
        <div className='w-full border rounded m-5'>
            <div className='bg-gray-50 py-5 pl-10 font-semibold text-lg text-gray-400'>
                <h2>Product Details</h2>
            </div>
            {data && (
                <>
                    <div className='pt-16 px-8 ml-16'>
                        <div className='flex mb-8'>
                            <div className='font-bold mr-10'>
                                <div className='mb-2'>Name:</div>
                                <div className='mb-2'>Description:</div>
                                <div className='mb-2'>Image:</div>
                                <div className='mb-2'>Category:</div>
                                <div className='mb-2'>Subcategory:</div>
                                <div className='mb-2'>Variants:</div>
                                <div className='mb-2'>Price:</div>
                            </div>
                            <div className=''>
                                <div className='mb-2'>{data.productName}</div>
                                <div className='mb-2'>{data.description}</div>
                                <div className='mb-2'>{data.image}</div>
                                <div className='mb-2'>{data.category}</div>
                                <div className='mb-2'>{data.subcategory}</div>
                                <div className='mb-2'>{data.variants}</div>
                                <div className='mb-2'>{data.price}</div>
                            </div>
                        </div>
                        <div>
                            <button className="btn mr-2 ml-">
                                <Link href={`/update-product/${data._id}`}>Edit Product</Link>
                            </button>
                            <button onClick={deleteProduct} className="btn ">Delete Product</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
export default SingleProductPage;
