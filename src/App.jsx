import React from 'react'
import Navbar from './Navbar';

const App = () => {
    return (
        <div className='h-screen bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r'>
            <Navbar />
            <div className='flex flex-col justify-center items-center text-gray-200'>
                <h1 className='text-3xl font-semibold'>This is a test of Netlify</h1>
                <p>Just using this as a way to spin up and host for the first time.</p>
                <button className=''>BIG OL BUTTON</button>
                <div className='output'>0</div>
            </div>
        </div>
    )
}

export default App;