"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session }: any = useSession();

  return (
    <>
      {/* <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">Navbar</div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                <li>
                  <Link href="/">
                    <li className="mx-5">Dashboard</li>
                  </Link>
                </li>
                {!session ? (
                  <li>
                    <Link href="/login">
                      <li className="mx-5">Login</li>
                    </Link>
                  </li>
                ) : (
                  <>
                    {session.user?.email}
                    <li>
                      <button
                        onClick={() => {
                          signOut();
                        }}
                      >
                        Logout
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div> */}

      <header>
        <div className="relative bg-gray-900">
          {/* <div className="absolute inset-0">
            <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/headers/3/coworking-space.jpg" alt="" />
        </div> */}

          {/* <div className="absolute inset-0 bg-black/30"></div> */}

          <div className="relative px-4 mx-auto sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between h-16 lg:h-20">
              <div className="flex-shrink-0">
                <a href="#" title="" className="flex">
                  {/* <img
                    className="w-auto h-8 lg:h-10"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logo-alt.svg"
                    alt=""
                  /> */}
                  <h1 className="text-3xl font-bold font-sans text-gray-500">
                    Shoecart
                  </h1>
                </a>
              </div>

              <button
                type="button"
                className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-800 hover:bg-gray-800"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>

              <div className="hidden lg:flex lg:items-center lg:space-x-10">
                <Link href="/" className="text-base font-medium text-white">
                  {" "}
                  Home{" "}
                </Link>

                <Link href="#" className="text-base font-medium text-white">
                  {" "}
                  About us{" "}
                </Link>

                <Link href="#" className="text-base font-medium text-white">
                  {" "}
                  Category{" "}
                </Link>

                <Link href="#" className="text-base font-medium text-white">
                  {" "}
                  Subscription{" "}
                </Link>
              </div>
              {!session ? (
                <Link
                  href="/login"
                  title=""
                  className="items-center justify-center hidden px-6 py-3 text-base font-semibold text-black transition-all duration-200 bg-yellow-400 border border-transparent rounded-full lg:inline-flex hover:bg-yellow-500 focus:bg-yellow-500"
                  role="button"
                >
                  {" "}
                  Login{" "}
                </Link>
              ) : (
                <div>
                  <span className="text-white mr-4">{session.user?.email}</span>
                  <Link
                    href="/login"
                    className="items-center justify-center hidden px-6 py-3 text-base font-semibold text-black transition-all duration-200 bg-yellow-400 border border-transparent rounded-full lg:inline-flex hover:bg-yellow-500 focus:bg-yellow-500"
                    onClick={() => {
                      signOut();
                    }}
                  >
                    Logout
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>

        <nav className="flex flex-col justify-between w-full max-w-xs min-h-screen px-4 py-10 bg-black sm:px-6 lg:hidden">
          <button
            type="button"
            className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex flex-col flex-grow h-full">
            <nav className="flex flex-col flex-1 mt-10 space-y-2">
              <a
                href="#"
                title=""
                className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
              >
                {" "}
                Home{" "}
              </a>

              <a
                href="#"
                title=""
                className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
              >
                {" "}
                About us{" "}
              </a>

              <a
                href="#"
                title=""
                className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
              >
                {" "}
                Category{" "}
              </a>

              <a
                href="#"
                title=""
                className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
              >
                {" "}
                Membership{" "}
              </a>
            </nav>

            <div className="flex flex-col items-start">
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center w-auto px-6 py-3 mt-auto text-base font-semibold text-black transition-all duration-200 bg-yellow-400 border border-transparent rounded-full hover:bg-yellow-500 focus:bg-yellow-500"
                role="button"
              >
                {" "}
                Join Now{" "}
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
