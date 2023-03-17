import React from 'react'
import deved from '../public/sher.png'
import Image from 'next/legacy/image'
import Link from 'next/link';
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import {
    AiFillInstagram,
    AiFillCaretDown
} from "react-icons/ai";

export default function Banner() {
    return (
        <section className=' h-min  bg-black  '>
            <div className='lg:grid lg:grid-cols-2'>
                <div className='text-center mx-auto lg:text-left p-10 lg:flex lg:flex-col lg:py-40'>
                    <h2 className='text-4xl py-2  text-white font-medium lg:text-5xl tracking-wide mb-3'>OWASP PCCOE</h2>
                    <h3 className='text-xl py-2 lg:text-3xl md:text-4xl text-blue-500 font-medium mb-3 underline underline-offset-8 decoration-orange-600'>This <span className='text-orange-600'>ANANTYA</span>  Presents...</h3>
                    <h2 className='text-5xl py-2 text-white font-medium lg:text-6xl mb-10 lg:tracking-wider'>SHER-[LOCK]</h2>
                    <div className="relative group w-100 max-w-xl mt-12 mx-auto">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#05c1fa] to-[#fa056b] rounded-lg blur opacity-95 group-hover:from-[#6f02e4] group-hover:to-[#fa0505] group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative py-1 bg-black ring-1 ring-gray-900/5 rounded-lg leading-none ">
                            <div className="items-left">
                                <p className="text-white px-3 py-2 flex justify-center text-xl lg:divide-x md:divide-x divide-gray-600">
                                    <span className='pr-4 text-yellow-400 hidden md:block lg:block'>For more details</span>
                                    <span className='lg:text-blue-400 text-yellow-400 pl-4 pr-4 font-medium'>Let&#39;s get HUNT&#39;in</span>
                                    <span className='text-3xl md:pl-8 lg:pl-8 flex justify-center text-pink-600 cursor-pointer'>
                                        <Link href="#form" scroll={false}><BsFillArrowRightCircleFill /> </Link>

                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:hidden text-4xl py-1 gap-16 justify-center text-gray-600 flex'>
                    <Link href="#description" scroll={false}>
                        <AiFillCaretDown className='fill-yellow-500 h-12 w-12 cursor-pointer ' />
                    </Link>
                    <Link href="https://www.instagram.com/pccoe_owasp/"><AiFillInstagram className='text-red-600 h-12 w-12 cursor-pointer ' /></Link>

                    <Link href="#steps" scroll={false}><AiFillCaretDown className='text-white h-12 w-12 cursor-pointer ' /></Link>
                </div>
                <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 lg:w-96 lg:h-96 mx-auto mt-16 lg:mt-36 sm:p-16 overflow-hidden" >
                    <Image src={deved} layout="fill" objectFit='cover' alt='image' />
                </div>
            </div>
            <div className='text-4xl py-10 gap-16 justify-center text-gray-600 lg:flex hidden'>
                <Link href="#description" scroll={false}>
                    <AiFillCaretDown className='fill-yellow-500 h-12 w-12 cursor-pointer ' />
                </Link>
                <Link href="https://www.instagram.com/pccoe_owasp/"><AiFillInstagram className='text-red-600 h-12 w-12 cursor-pointer ' /></Link>

                <Link href="#steps" scroll={false}><AiFillCaretDown className='text-white h-12 w-12 cursor-pointer ' /></Link>

            </div>
            <div className="mt-20 h-1 w-1/4 mx-auto bg-gradient-to-r from-blue-500 to-teal-100 border-0 dark:bg-gray-700" />
        </section>
    )
}
