import React from 'react'
import logo from '@/public/logo.png'
import Image from 'next/legacy/image'
export default function Navbar() {
    return (
        <section className='bg-black p-6 flex justify-center items-center bg-cover bg-fill overflow-hidden'>
            <Image src={logo} height={80} width={220}></Image>
        </section>
    )
}
