import React from 'react'


export default function Form() {
    return (
        <section id='form'>
            <section className="text-black bg-black body-font relative p-6">
                <div className="container py-8 mx-auto ">
                    <div className="flex flex-col text-center w-full mb-4">
                        <h2 className='py-20 text-5xl text-white text-center underline underline-offset-8 decoration-blue-400'>Register NOW</h2>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">Register for this exciting event and get ready to crack some serious code!!!</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto bg-white p-20 rounded-xl shadow-xl shadow-cyan-500">
                        <h1 className='text-5xl text-center mb-10'>Team Name</h1>
                        <div className="w-full mb-10">
                                <div className="relative">
                                    <input type="text" id="name" name="name" placeholder="Enter Team Name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                        </div>
                        <div className="flex flex-wrap -m-2 lg:flex-row flex-col">
                            <div className="p-2 sm:w-full md:w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-lg text-black">Team Member 1</label>
                                    <input type="text" id="name" name="name" placeholder='Enter Team Member 1' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " />
                                </div>
                            </div>
                            <div className="p-2 sm:w-full md:w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-lg text-black">Team Member 2</label>
                                    <input type="email" id="email" name="email"placeholder='Enter Team Member 2' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 sm:w-full md:w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-lg text-black">Email Player 1</label>
                                    <input type="email" id="email" name="email" placeholder='Enter Team Member 2' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 sm:w-full md:w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-lg text-black">Email Player 2</label>
                                    <input type="email" id="email" name="email" placeholder='Enter Team Member 3' className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full mt-10">
                                <button className="flex mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-black rounded text-lg">Go !!!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
