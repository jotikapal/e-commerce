"use client"
import React from 'react'
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {

    const { data: session }: any = useSession();

    return (
        <>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">

                    <div className="w-full navbar bg-base-300">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">Navbar</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">

                                <li><Link href="/">
                                    <li className='mx-5'>Dashboard</li>
                                </Link>
                                </li>
                                {!session ? (
                                    <li>
                                        <Link href="/login">
                                            <li className='mx-5'>Login</li>
                                        </Link>
                                    </li>
                                ) : (
                                    <>
                                        {session.user?.email}
                                        <li>
                                            <button
                                                onClick={() => { signOut() }}
                                            // className='p-2 px-5 -mt-1 bg-blue-800 rounded-full text-white'
                                            >Logout</button>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* 
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
            </div> */}
        </>

    )
}
export default Navbar;
