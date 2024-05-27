"use client"
import React from 'react'
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {

    const { data: session }: any = useSession();

    return (
        <div>
            <ul className='flex justify-around m-10 items-center'>
                <div>
                    Navbar
                </div>
                <div className='flex'>
                    <Link href="/">
                        <li className='mx-5'>Dashboard</li>
                    </Link>
                    {!session ? (
                        <>
                            {/* <Link href="/signup">
                                <li className='mx-5'>Signup</li>
                            </Link> */}
                            <Link href="/login">
                                <li className='mx-5'>Login</li>
                            </Link>
                        </>
                    ) : (
                        <>
                            {session.user?.email}
                            <li>
                                <button
                                    onClick={() => { signOut() }}
                                    className='p-2 px-5 -mt-1 bg-blue-800 rounded-full text-white'>Logout</button>
                            </li>
                        </>
                    )}

                </div>
            </ul>
        </div>
    )
}
export default Navbar;
