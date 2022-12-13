import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className='bg-gray-200 rounded-xl shadow border p-8 m-10'>
                <div className='footer-col' id='col-one'>
                    <p>My name is jonathan coletti</p>

                </div>
                <div className='footer-col' id='col-two'>
                    <p>my email is colettijonathan03@gmail.com</p>

                </div>
                <div className='footer-col' id='col-three'>
                    <p>This website is made with tailwind bootstrap and react</p>

                </div>
                <div className='footer-col' id='col-four'>
                    <p>Coming Soon</p>
                </div>

            </div>
        </div>
    )
}
