"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const session = useSession();

  useEffect(() => {
       if (session.status === "authenticated") {
         router.replace("/");
       }
     }, [session, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    console.log(res,"response")

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/");
    } else {
      setError("");
    }
  };

  return (
    // session.status !== "authenticated" && 
    <div className='flex justify-center'>
      <div className='flex justify-center flex-col w-3/12 border rounded bg-gray-100 p-5'>
        <div className='flex justify-center mb-7'>
          <h2 className='text-xl'>Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='w-full border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2'
            placeholder='Email'
            required
          />
          <input
            type='password'
            className='w-full border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2'
            placeholder='Password'
            required
          />
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-400'
          >
            {""}
            Login</button>
          <p className='text-red-600 text-[16px] mb-4'>{error && error}</p>
        </form>
        <div className='flex justify-center flex-col mt-4'>
          <div className='text-gray-500 mb-2 text-center'>-OR-</div>
          <div>
            <Link href="/signup" className='block text-blue-500 hover:underline text-center'>SignUp</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
