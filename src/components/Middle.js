import React from 'react'
import MainCarousel from './MainCarousel'

export default function Middle() {
    return (
        <div id='inner-textbx' className=' mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10' >
            < div style={{ width: '30%' }
            } className='highlight-yellow text-4xl font-bold underline' >
                <h1>Highlight it!</h1>

            </div >
            <div className='row'>

                <p style={{ width: '40%' }}>
                    Highlight something beautiful with our <a className='text-blue-500 font-bold underline' href="https://google.com">open source</a> social media platform. Coming soon
                </p>
                <div style={{ width: '50%', paddingLeft: '20%' }}>
                    <MainCarousel />

                </div>

            </div>
            <br />
            <div id="buttons">
                <a className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' href="https://google.com">
                    Coming Soon
                </a>
                &nbsp;&nbsp;
                <a className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full' href="https://google.com">
                    Coming Soon
                </a>

            </div>



        </div >
    )
}
