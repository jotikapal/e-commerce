"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

const UpdateProduct = ({ params, }: { params: { id: string } }) => {
    // console.log(params,"params")

    const [data, setData] = useState<any>(null);
    const router = useRouter();

    const getData = async () => {
        try {
            const response = await fetch(`/api/product/${params.id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data')
            }
            const gotData = await response.json();
            setData(gotData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleUpdate = async (e: any) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/product/${params.id}`, {
                method: "PATCH",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: data.name,
                    description: data.description,
                    image: data.image,
                    category: data.category,
                    subcategory: data.subcategory,
                    variants: data.variants,
                    price: data.price
                })
            })
            if (response.ok) {
                router.push(`/single-product/${params.id}`)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setData((prevData: any) => ({ ...prevData, [name]: value }))
    }

    useEffect(() => {
        if (params.id) {
            getData()
        }
    }, [params.id]);
    console.log(data, "data")

    if (!data) {

        return <div>Loading...</div>;
    }

    return (
        <div className='w-full m-5 border rounded'>
            <div className='bg-gray-50 py-5 pl-10 font-semibold text-lg text-gray-400'>
                <h2 className=''>Update Product</h2>
            </div>
            <form onSubmit={handleUpdate} className='w-6/12 pl-9 pt-9'>
                <label className="input input-bordered flex items-center gap-2 mb-3">
                    Name:
                    <input
                        type="text"
                        className="grow"
                        placeholder="type here"
                        name='name'
                        value={data.name}
                        onChange={handleChange} />
                </label>
                <label className="input input-bordered flex items-center gap-2 mb-3">
                    Description:
                    <input
                        type="text"
                        className="grow"
                        placeholder="type here"
                        name='description'
                        value={data.description}
                        onChange={handleChange} />
                </label>
                <label className="input input-bordered flex items-center gap-2 mb-3">
                    Image:
                    <input
                        type="text"
                        className="grow"
                        placeholder="type here"
                        name='image'
                        value={data.image}
                        onChange={handleChange} />
                </label>
                <select
                    className="select w-full max-w-xs mb-3 mr-3"
                    name='category'
                    value={data.category}
                    onChange={handleChange} >
                    <option disabled selected>Select category</option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                </select>
                <select
                    className="select w-full max-w-xs"
                    name='subcategory'
                    value={data.subcategory}
                    onChange={handleChange}>
                    <option disabled selected>Select subcategory</option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                </select>
                <select
                    className="select w-full max-w-xs mb-3"
                    name='variants'
                    value={data.variants}
                    onChange={handleChange}>
                    <option disabled selected>Select variants</option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                </select>
                <label className="input input-bordered flex items-center gap-2 mb-3">
                    Price:
                    <input
                        type="text"
                        className="grow"
                        placeholder="type here"
                        name='price'
                        value={data.price}
                        onChange={handleChange} />
                </label>
                <div className='flex justify-end'>
                <button type='submit' className="btn btn-wide">Submit</button>
                </div>
            </form>
        </div>
    )

}
export default UpdateProduct; 