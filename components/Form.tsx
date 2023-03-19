import React from 'react'


export default function Form() {
    
    function Submit(e:React.FormEvent<HTMLFormElement>) {        
        const formEle = document.querySelector("form")!;     
        const formDatab = new FormData(formEle);
        fetch(
          "https://script.google.com/macros/s/AKfycbyHlKLsOu7q_mwiirP0F8VgnKC_Wfm77LoS284ee5Glng1Xu3frtcM7J0zLoQSdAXy5CA/exec",
          {
            method: "POST",
            body: formDatab
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });          
          alert("Registration Done Successfully");
      }
    return (
        <section id='form' >
            <section className="text-black bg-black body-font relative p-6">
                <div className="container py-8 mx-auto ">
                    <div className="flex flex-col text-center w-full mb-4">
                        <h2 className='py-20 text-5xl text-white text-center underline underline-offset-8 decoration-blue-400'>Register NOW</h2>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">Register for this exciting event and get ready to crack some serious code!!!</p>
                    </div>
                    <form className="lg:w-1/2 md:w-2/3 mx-auto bg-white p-20 rounded-xl drop-shadow-xl shadow-cyan-500 " onSubmit={(e) => Submit(e)} >
                        <h1 className='lg:text-5xl text-3xl text-center w-full'>Team </h1>
                        <h1 className='lg:text-5xl text-3xl text-center mb-10 w-full'>Registration</h1>
                        <div className="w-full mb-10">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-lg text-black">Team Name</label>
                                <input required type="text" id="name" name="Name" placeholder="Team Name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                
                            </div>
                        </div>
                        <div className="w-full mb-10">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-lg text-black">Email</label>
                                <input required type="email" id="emill" name="Email" placeholder="Email Of Team Leader" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                
                            </div>
                        </div>
                        <div className="flex flex-wrap -m-2 lg:flex-row flex-col">
                            <div className="p-2 sm:w-full md:w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-lg text-black">Team Member 1</label>
                                    <input required type="text" id="name" name="Member1" placeholder='Name(Member 1)' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " />
                                    
                                </div>
                            </div>
                            <div className="p-2 sm:w-full md:w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-lg text-black">Team Member 2</label>
                                    <input required type="text" id="email" name="Member2" placeholder='Name(Member 2)' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    
                                </div>
                            </div>
                            <div className="p-2 sm:w-full md:w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-lg text-black">Phone No:</label>
                                    <input required type="number" id="email" name="Phoneno1" placeholder='Member 1' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    
                                </div>
                            </div>
                            <div className="p-2 sm:w-full md:w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-lg text-black">Phone No:</label>
                                    <input required type="number" id="email" name="Phoneno2" placeholder='Member 2' className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    
                                </div>
                            </div>
                            <div className="p-2 w-full mt-10">
                                <button className="flex mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-black rounded text-lg" type='submit' >Go !!!</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </section>
    )
}
