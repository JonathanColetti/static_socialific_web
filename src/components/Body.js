import React from 'react'
import MainCarousel from './MainCarousel'

export default function Body() {
    return (
        <div id='inner-textbx' className= 'mx-auto bg-gray-200 w-100 rounded-xl shadow border p-8 m-10 ' >
            < div className='highlight-yellow text-4xl font-bold underline row flex justify-center' >
                <h1 className=''>Highlight it!</h1>

            </div >
            <div className='row '>

                <p className='pt-20 row flex justify-center'>
                    Highlight something beautiful with our &nbsp; <a className='text-blue-500 font-bold underline' href="https://google.com">open source</a> &nbsp; social media platform. Coming soon
                </p>
                <div className='row flex justify-center'>
                    <MainCarousel />

                </div>

            </div>
            <br />
            <div className='row flex justify-center' id="buttons">
                <a className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' href="https://google.com">
                    Coming Soon
                </a>
                &nbsp;&nbsp;
                <a className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full' href="https://google.com">
                    Coming Soon
                </a>
                &nbsp;&nbsp;
                <a className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full' href="https://google.com">
                    Coming Soon
                </a>

            </div>



        </div >
    )
}
