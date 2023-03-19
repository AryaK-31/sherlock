import React from 'react'
import desc from '@/public/desc.jpg'
import Head from 'next/head';

export default function Description() {
    
    return (
        <section id="description">
            <div className='bg-black'>
                <h2 className='py-20 text-5xl text-white text-center underline underline-offset-8 decoration-blue-400 mb-4 '>About Event</h2>
                <div className='sm: text-gray-400 sm:text-xs md:text-black text-center'>
                    Tap on the images for brief Description.
                </div>
                <div className="flex p-8 items-center justify-center">
                    <div className="grid lg:px-12 grid-cols-1 lg:gap-40 gap-20 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="h-84 w-88">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1518281361980-b26bfd556770?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="img" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white mb-12">Time Managament</h1>
                                <p className="lg:mb-10 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Use time as a tool, not as a couch. You and a friend were engaged in a game when suddenly your device was hacked.
                                    Let us seek assistance from Team OWASP to track down this cybercriminal. We can identify the hacker if , we apply some basic level IQ & fun logic to find the treasure.</p>
                                {/* <div className=' w-full h-1/4'>

                                </div> */}
                            </div>
                        </div>
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="h-84 w-88">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1581263518256-ba4a28ed5517?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV0ZWN0aXZlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="img" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white mb-12">Brain Test</h1>
                                <p className="lg:mb-10 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">There will be three levels, and as you pass each one, the hacker will appear closer to you. Somewhere in your vicinity is a hidden chest containing the clues you need to identify the hacker.

                                    Let us go on a treasure hunt together.</p>
                                {/* <div className=' w-full h-1/4'>

                                </div> */}
                            </div>
                        </div>
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="h-84 w-88">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="img" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white mb-10">Accuracy</h1>
                                <p className="mb-10 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Fast is fine but accuracy is everything.. take your time but in a hurry</p>
                                <div className=' w-full h-1/4'>

                                </div>
                            </div>

                        </div>
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="h-84 w-88">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1593672715438-d88a70629abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpemUlMjBtb25leSUyMHZlcnRpY2FsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white mb-20">Prize Money</h1>
                                <p className="mb-10 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Cash prize and goodies.</p>
                                <div className=' w-full h-1/4'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
