import React from 'react'
import { FaFingerprint } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="text-gray-600 body-font bg-gradient-to-b from-black via-gray-900 to-blue-800">
            <div className="container px-5 py-8 mx-auto flex justify-center items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <div className='bg-white rounded-full p-2'>
                        < FaFingerprint className='text-black w-8 h-8' />
                    </div>
                    <span className="ml-3 text-xl text-white">Have a Query?</span>
                </a>
                <p className="text-xl sm:ml-4 sm:pl-4 sm:border-l-2 text-yellow-500 font-medium sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">Arya Kaslikar — 9503380951
                </p>
                <p className="text-xl text-yellow-500 font-medium sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">Saie Mukane — 7249615728
                </p>
                
            </div>
            <div className='text-center'>
                <p className=' text-sm text-gray-300 '>Designed and Developed By Team OWASP</p>
            </div>
        </footer>
    )
}
