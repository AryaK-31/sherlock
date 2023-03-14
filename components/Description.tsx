import React from 'react'
import desc from '@/public/desc.jpg'

export default function Description() {
    return (
        <section id="description">
            <div className='bg-gradient-to-br from-blue-900 via-black to-blue-900'>
                <h2 className='py-20 text-5xl text-white text-center underline underline-offset-8 decoration-blue-400 mb-4 '>About Event</h2>
                <div className="flex p-8 items-center justify-center">
                    <div className="grid lg:px-12 grid-cols-1 lg:gap-40 gap-20 md:grid-cols-2 lg:grid-cols-4">
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="h-84 w-88">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src='https://images.unsplash.com/photo-1647610229306-3906b8f72539?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80' alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white mb-10">Time Managament</h1>
                                <p className="mb-10 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                            </div>
                        </div>
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="h-84 w-88">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1581263518256-ba4a28ed5517?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV0ZWN0aXZlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white mb-10">Brain Test</h1>
                                <p className="lg:mb-10 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                            </div>
                        </div>
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="h-84 w-88">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://wallpapercave.com/wp/wp4363426.jpg" alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white">Accuracy</h1>
                                <p className="mb-10 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                            </div>
                        </div>
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="h-84 w-88">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://wallpapercave.com/wp/wp4363426.jpg" alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white">Prize Money</h1>
                                <p className="mb-10 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
