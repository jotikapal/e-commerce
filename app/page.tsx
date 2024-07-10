"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* <div className="flex justify-center">Home</div> */}
      <section className="relative">
        <div className="">
          <img
            src="/shoe2.jpg"
            className="w-full filter brightness-75 contrast-175"
          />
        </div>
        <div className="absolute top-72 left-36 text-gray-900">
          <h2 className="text-6xl font-bold font-mono">Shoecart</h2>
          <h2 className="text-2xl font-thin font-mono">
            Step into Style with Your Favorite Footwear Brands..
          </h2>
        </div>
      </section>

      <section className="pb-20 bg-gray-900 sm:pt-16 lg:pt-10 w-full">
        <div className="w-full text-center mb-16">
          <h2 className="text-white text-xl font-semibold">Category</h2>
        </div>
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl ">
          <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12 text-center">
            <div>
              <p className="text-base text-gray-400">Women Section</p>

              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Slippers{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Bellies{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Shoes{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Sandals{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-base text-gray-400">Men Section</p>

              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Slippers{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Shoes{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Sandals{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Jutti{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-base text-gray-400">Girls(Kids)</p>

              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Slippers{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Bellies{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Shoes{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Sandals{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-base text-gray-400">Boys(Kids)</p>

              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Slippers{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Shoes{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Sandals{" "}
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#"
                    title=""
                    className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="w-full flex justify-center ">
        <div className="max-w-7xl max-sm:max-w-md px-7 py-10 font-[sans-serif] bg-gray-50">
          <div className="text-center">
            <h2 className="text-gray-800 text-3xl font-bold mb-4">
              Subscription Pricing Plans
            </h2>
            <p className="text-gray-800 text-sm">
              Change your plant according your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-8 mt-16">
            <label className="bg-white cursor-pointer py-8 px-4 text-center rounded-md shadow-[0_0px_8px_0px_rgba(34,46,165,0.2)] border-t-4 border-orange-500 transition-all hover:-translate-y-1 relative">
              <div className="flex items-center absolute right-2 top-2">
                <input
                  id="radio"
                  type="radio"
                  name="value1"
                  className="w-5 h-5 hidden peer"
                />
                <div className="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-6 h-6 cursor-pointer border-2 border-orange-500 rounded-full overflow-hidden">
                  <span className="bg-orange-500 rounded-full w-3 h-3"></span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-orange-500">
                  Starter
                </h3>
                <p className="text-gray-600 text-xs mt-1">30 Days</p>
              </div>
              <div className="mt-6">
                <h3 className="text-gray-800 text-4xl font-semibold">$35</h3>
                <p className="text-gray-600 text-xs mt-1">1 Month</p>
              </div>
            </label>

            <label className="bg-white cursor-pointer py-8 px-4 text-center rounded-md shadow-[0_0px_8px_0px_rgba(34,46,165,0.2)] border-t-4 border-blue-500 transition-all hover:-translate-y-1 relative">
              <div className="flex items-center absolute right-2 top-2">
                <input
                  id="radio2"
                  type="radio"
                  name="value1"
                  className="w-5 h-5 hidden peer"
                  checked
                />
                <div className="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-6 h-6 cursor-pointer border-2 border-blue-500 rounded-full overflow-hidden">
                  <span className="bg-blue-500 rounded-full w-3 h-3"></span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-500">Premium</h3>
                <p className="text-gray-600 text-xs mt-1">60 Days</p>
              </div>
              <div className="mt-6">
                <h3 className="text-gray-800 text-4xl font-semibold">$55</h3>
                <p className="text-xs mt-1 text-red-500">
                  20% Off regular price
                </p>
                <p className="text-gray-600 text-xs mt-1">2 Months</p>
              </div>
            </label>

            <label className="bg-white cursor-pointer py-8 px-4 text-center rounded-md shadow-[0_0px_8px_0px_rgba(34,46,165,0.2)] border-t-4 border-teal-500 transition-all hover:-translate-y-1 relative">
              <div className="flex items-center absolute right-2 top-2">
                <input
                  id="radio3"
                  type="radio"
                  name="value1"
                  className="w-5 h-5 hidden peer"
                />
                <div className="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-6 h-6 cursor-pointer border-2 border-teal-500 rounded-full overflow-hidden">
                  <span className="bg-teal-500 rounded-full w-3 h-3"></span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-teal-500">Elite</h3>
                <p className="text-gray-600 text-xs mt-1">90 Days</p>
              </div>
              <div className="mt-6">
                <h3 className="text-gray-800 text-4xl font-semibold">$55</h3>
                <p className="text-xs mt-1 text-red-500">
                  30% Off regular price
                </p>
                <p className="text-gray-600 text-xs mt-1">3 Months</p>
              </div>
            </label>

            <label className="bg-white cursor-pointer py-8 px-4 text-center rounded-md shadow-[0_0px_8px_0px_rgba(34,46,165,0.2)] border-t-4 border-pink-500 transition-all hover:-translate-y-1 relative">
              <div className="flex items-center absolute right-2 top-2">
                <input
                  id="radio4"
                  type="radio"
                  name="value1"
                  className="w-5 h-5 hidden peer"
                />
                <div className="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-6 h-6 cursor-pointer border-2 border-pink-500 rounded-full overflow-hidden">
                  <span className="bg-pink-500 rounded-full w-3 h-3"></span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-pink-500">
                  Business
                </h3>
                <p className="text-gray-600 text-xs mt-1">180 Days</p>
              </div>
              <div className="mt-6">
                <h3 className="text-gray-800 text-4xl font-semibold">$100</h3>
                <p className="text-xs mt-1 text-red-500">
                  40% Off regular price
                </p>
                <p className="text-gray-600 text-xs mt-1">6 Months</p>
              </div>
            </label>
          </div>

          <div className="mt-12">
            <h4 className="text-gray-800 text-xl font-bold mb-4">
              <span className="text-blue-500">Premium</span> Plan Includes
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-green-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                50 Image generations
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-green-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                500 Credits
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-green-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Monthly 100 Credits Free
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-green-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Customer Support
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-green-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Dedicated Server
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-green-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Priority Generations
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  className="mr-4 fill-green-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                50GB Cloud Storage
              </li>
            </ul>
          </div>
        </div>
      </section> */}

      <section className="py-12 bg-white sm:py-16 lg:py-20 w-full">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Our featured items
            </h2>
            <p className="mt-4 text-base font-normal leading-7 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              faucibus massa dignissim tempus.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
            <div className="relative group">
              <div className="overflow-hidden aspect-w-1 aspect-h-1">
                <img
                  className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                  src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-1.png"
                  alt=""
                />
              </div>
              <div className="absolute left-3 top-3">
                <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">
                  New
                </p>
              </div>
              <div className="flex items-start justify-between mt-4 space-x-4">
                <div>
                  <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                    <a href="#" title="">
                      Beoplay M5 Bluetooth Speaker
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </h3>
                  <div className="flex items-center mt-2.5 space-x-px">
                    <svg
                      className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-3 h-3 text-gray-300 sm:w-4 sm:h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                    $99.00
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="overflow-hidden aspect-w-1 aspect-h-1">
                <img
                  className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                  src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-2.png"
                  alt=""
                />
              </div>
              <div className="flex items-start justify-between mt-4 space-x-4">
                <div>
                  <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                    <a href="#" title="">
                      Apple Smart Watch 6 - Special Edition
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </h3>
                  <div className="flex items-center mt-2.5 space-x-px">
                    <svg
                      className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                    $299.00
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="overflow-hidden aspect-w-1 aspect-h-1">
                <img
                  className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                  src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-3.png"
                  alt=""
                />
              </div>
              <div className="absolute left-3 top-3">
                <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-white uppercase bg-gray-900 rounded-full">
                  Sale
                </p>
              </div>
              <div className="flex items-start justify-between mt-4 space-x-4">
                <div>
                  <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                    <a href="#" title="">
                      Beylob 90 Speaker
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </h3>
                  <div className="flex items-center mt-2.5 space-x-px">
                    <svg
                      className="w-3 h-3 text-gray-300 sm:w-4 sm:h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-3 h-3 text-gray-300 sm:w-4 sm:h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-3 h-3 text-gray-300 sm:w-4 sm:h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-3 h-3 text-gray-300 sm:w-4 sm:h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-3 h-3 text-gray-300 sm:w-4 sm:h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                    $49.00
                  </p>
                  <del className="mt-0.5 text-xs sm:text-sm font-bold text-gray-500">
                    {" "}
                    $99.00{" "}
                  </del>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="overflow-hidden aspect-w-1 aspect-h-1">
                <img
                  className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                  src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-4.png"
                  alt=""
                />
              </div>
              <div className="flex items-start justify-between mt-4 space-x-4">
                <div>
                  <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                    <a href="#" title="">
                      Martino 75 Bluetooth
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </h3>
                  <div className="flex items-center mt-2.5 space-x-px">
                    <svg
                      className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-3 h-3 text-gray-300 sm:w-4 sm:h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-3 h-3 text-gray-300 sm:w-4 sm:h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                    $79.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
