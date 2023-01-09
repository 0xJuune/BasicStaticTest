import React from 'react'
import Navbar from './Navbar';

const App = () => {
    return (
        <div>
            <Navbar />
            <div>
                <h1>This is a test of Netlify</h1>
                <p>Just using this as a way to spin up and host for the first time.</p>
                <button className='button'>BIG OL BUTTON</button>
                <div className='output'>0</div>
            </div>
        </div>
    )
}

export default App;