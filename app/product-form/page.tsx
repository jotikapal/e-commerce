"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from "next/navigation";

const page = () => {
    const [error, setError] = useState("")
    const router = useRouter();

    return (
        <div className='flex justify-center'>
            <div className='flex justify-center flex-col border rounded bg-gray-100 p-5'>
                <div className='flex justify-center mb-7'>
                    <h2 className='text-xl'>Add Product</h2>
                </div>
                <form>
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
                        type='password'
                        className='w-full border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2'
                        placeholder='Image'
                        required
                    />
                    <label className='w-full border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2'>Category:</label>
                    <select name="cars" id="cars">
                        <option value="volvo">Category 1</option>
                        <option value="saab">Category 2</option>
                    </select><br/><br/>
                    <label className='w-full border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2'>Subcategory:</label>
                    <select name="cars" id="cars">
                        <option value="volvo">Subcategory 1</option>
                        <option value="saab">Subcategory 2</option>
                    </select><br/><br/>
                    <label className='w-full border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2'>Variants:</label>
                    <select name="cars" id="cars">
                        <option value="volvo">Variant 1</option>
                        <option value="saab">Variant 2</option>
                    </select><br/><br/>
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
                    <p className='text-red-600 text-[16px] mb-4'>{error && error}</p>
                </form>
            </div>
        </div>
    )
}

export default page;
