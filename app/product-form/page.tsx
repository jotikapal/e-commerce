"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from "next/navigation";

const Page = () => {
    const [error, setError] = useState("")
    const router = useRouter();

    const validateField = (field: any, fieldName: any) => {
        if (!field || field.length <= 2) {
            setError(`${fieldName} is invalid`)
            return false
        }
        return true;
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const name = e.target[0].value;
        const description = e.target[1].value;
        const image = e.target[2].value;
        const category = e.target[3].value;
        const subcategory = e.target[4].value;
        const variants = e.target[5].value;
        const price = e.target[6].value;

        if (
            !validateField(name, 'Name') ||
            !validateField(description, 'Description') ||
            !validateField(image, 'Image') ||
            !validateField(category, 'Category') ||
            !validateField(subcategory, 'Subcategory') ||
            !validateField(variants, 'Variants') ||
            !validateField(price, 'Price')
        ) {
            return;
        }
        setError('');

        try {
            const response = await fetch('/api/product', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    description,
                    image,
                    category,
                    subcategory,
                    variants,
                    price,
                })
            })
            if (response.ok) {
                setError("");
                router.push("/all-products");
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Error,try again');
            }
        } catch (error) {
            setError("Error, try again");
            console.log(error);
        }
    }

    return (
        <div className='flex justify-center'>
            <div className='flex justify-center flex-col border rounded bg-gray-100 p-5'>
                <div className='flex justify-center mb-7'>
                    <h2 className='text-xl'>Add Product</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        className='w-full border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2'
                        placeholder='Name'
                        required
                    />
                    <input
                        type='text'
                        className='w-full border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2'
                        placeholder='Description'
                        required
                    />
                    <input
                        type='text'
                        className='w-full border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2'
                        placeholder='Image'
                        required
                    />
                    <label className='w-full mb-2'>Category:</label>
                    <select className='border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2' required>
                        <option value="">Select Category</option>
                        <option value="category1">Category 1</option>
                        <option value="category2">Category 2</option>
                    </select><br /><br />
                    <label className='w-full mb-2'>Subcategory:</label>
                    <select className='border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2' required>
                        <option value="">Select Subcategory</option>
                        <option value="subcategory1">Subcategory 1</option>
                        <option value="subcategory2">Subcategory 2</option>
                    </select><br /><br />
                    <label className='w-full mb-2'>Variants:</label>
                    <select className='border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2' required>
                        <option value="">Select Variants</option>
                        <option value="variant1">Variant 1</option>
                        <option value="variant2">Variant 2</option>
                    </select><br /><br />
                    <input
                        type='text'
                        className='w-full border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2'
                        placeholder='Price'
                        required
                    />
                    <button
                        type='submit'
                        className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-400'
                    >Submit</button>
                    {error && <p className='text-red-600 text-[16px] mt-4'>{error}</p>}
                </form>
            </div>
        </div>
    )
}

export default Page;
