import React from 'react'

export default function Body() {
    return (
        <div id='inner-textbx' className= 'mx-auto bg-gray-200 w-100 rounded-xl shadow border p-8 m-10 ' >
            <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-indigo-800">Socialific</h1>
            <button class="px-5 py-2 text-indigo-700 transition-all duration-300 ease-in-out bg-white border-2 border-b-4 border-r-4 border-indigo-800 rounded-lg hover:text-indigo-100 hover:bg-indigo-700 hover:border-b-2 hover:border-r-2">
                Use on web
            </button>
            <button class="px-5 py-2 text-gray-700 transition-all duration-300 ease-in-out bg-white border-2 border-b-4 border-r-4 border-gray-800 rounded-lg hover:text-gray-100 hover:bg-gray-600 hover:border-b-2 hover:border-r-2">
                Download for apple
            </button>
            <button class="px-5 py-2 text-green-700 transition-all duration-300 ease-in-out bg-white border-2 border-b-4 border-r-4 border-green-800 rounded-lg hover:text-green-100 hover:bg-green-600 hover:border-b-2 hover:border-r-2">
                Download for andriod
            </button>
        </div >
    )
}
