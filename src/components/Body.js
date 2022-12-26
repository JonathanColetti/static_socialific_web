import React from 'react'

export default function Body() {
    return (
       <>
        <h1 className='font-medium mb-20 leading-tight text-5xl mt-0 text-indigo-800 text-center'><span className='highlight'>Be you</span> </h1>
        <div className='w-screen flex items-center  '>
            <div className='ml-auto mr-auto flex flex-wrap items-start'>
                <div className='card'>
                    <img className='card-ct' src=""
        alt="app display"/>
                    <p className='font-medium text-center text-xl'>Customize your profile</p>
                </div>
                <div className='card'>
                    <img className='card-ct' src=""
        alt="app display"/>
                    <p className='font-medium text-center text-xl'>Earn coins</p>
                </div>
                <div className='card'>
                    <img className='card-ct' src=""
        alt="app display"/>
                    <p className='font-medium text-center text-xl'>Customize your profile</p>
                </div>
            </div>
        </div>
        <div className='jagged-bottom mt-10'></div>
        <div className='mt-15 bg-white '>
            <br></br>

            <div className='text-right mr-60'>
                <h1 className='font-medium mb-20 leading-tight text-5xl mt-0 text-indigo-800'>Customize</h1>
                <p>Cool text box</p>
            </div>
           
        </div>
       </>
    )
}
