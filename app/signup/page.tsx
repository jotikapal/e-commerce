"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from "next/navigation";

const page = () => {
    const [error, setError] = useState("")
    const router = useRouter();

    const isValidEmail = (email: string) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const name = e.target[0].value
        const email = e.target[1].value;
        const password = e.target[2].value;
        // const email = e.target.value;
        // const password = e.target.value;

        console.log(email, password)

        if (name.length < 2) {
            setError("Name is invalid");
            return;
        }

        if (!isValidEmail(email)) {
            setError("Email is invalid");
            return;
        }

        if (!password || password.length < 8) {
            setError("Password should be more than 8 characters");
            return;
        }

        try {
            const res = await fetch('api/signup', {
                method: 'POST',
                headers: {
                    "Content-Type": "aplication/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })
            if (res.status === 400) {
                setError("This email is already registered");
            } if (res.status === 200) {
                setError("");
                router.push("/");
            }
        } catch (error) {
            setError("Error,try again");
            console.log(error);
        }
    };
    return (
        <div className='flex justify-center w-full my-24'>
            <div className='flex justify-center flex-col w-3/12 border rounded bg-gray-100 p-8'>
                <div className='flex justify-center mb-10'>
                    <h2 className='text-xl'>Signup</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        className='w-full border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2'
                        placeholder='Firstname*'
                        required
                    />
                     <input
                        type='text'
                        className='w-full border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2'
                        placeholder='Lastname'
                    />
                    <input
                        type='text'
                        className='w-full border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2'
                        placeholder='Email*'
                        required
                    />
                    <input
                        type='password'
                        className='w-full border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2'
                        placeholder='Password*'
                        required
                    />
                    <button
                        type='submit'
                        className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-400'
                    >Submit</button>
                    <p className='text-red-600 text-[16px] mb-4'>{error && error}</p>
                </form>
                <div className='flex justify-center flex-col mt-4'>
                    <div className='text-gray-500 mb-2 text-center'>-OR-</div>
                    <div><Link href="/login" className='block text-blue-500 hover:underline text-center'>Login with an existing account</Link></div>
                </div>
            </div>
        </div>
    )
}

export default page;
