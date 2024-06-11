"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

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
        const hasConfirmed = confirm(`Are you sure you want to delete this ${data.name}?`)
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
                setClick(false)
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

    return (
        <div>
            {data && (
                <>
                    <div>
                        <div>
                            <div>{data.name}</div>
                            <div>{data.description}</div>
                            <div>{data.image}</div>
                            <div>{data.category}</div>
                            <div>{data.subcategory}</div>
                            <div>{data.variants}</div>
                            <div>{data.price}</div>
                        </div>
                        <button onClick={deleteProduct} className="btn">Delete Product</button>
                        <button onClick={() => setClick(!click)} className="btn">Edit Product</button>
                    </div>
                    {click &&
                        <div>
                            <form onSubmit={handleUpdate}>
                                <label className="input input-bordered flex items-center gap-2">
                                    Name:
                                    <input
                                        type="text"
                                        className="grow"
                                        placeholder="type here"
                                        name='name'
                                        value={data.name}
                                        onChange={handleChange} />
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    Description:
                                    <input
                                        type="text"
                                        className="grow"
                                        placeholder="type here"
                                        name='description'
                                        value={data.description}
                                        onChange={handleChange} />
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
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
                                    className="select w-full max-w-xs"
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
                                    className="select w-full max-w-xs"
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
                                <label className="input input-bordered flex items-center gap-2">
                                    Price:
                                    <input
                                        type="text"
                                        className="grow"
                                        placeholder="type here"
                                        name='price'
                                        value={data.price}
                                        onChange={handleChange} />
                                </label>
                                <button type='submit'>Submit</button>
                            </form>
                        </div>
                    }
                </>
            )}
        </div>
    )
}
export default SingleProductPage;
