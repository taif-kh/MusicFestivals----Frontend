import React from 'react';

const Component1 = () => {

    return (
        <div className='h-[685px] w-full bg-yellow-300 '>
            <div className='flex gap-3'>
            <p>Presentation</p>
            <p>Signup/Login</p>
            <p>API Reference</p>
            </div>
            <h1>MusicEvents API</h1>
            <p>MusicEvents API for your events’ website</p>
            <button className='w-[160px] h-[64px] bg-white text-black rounded-[45px] flex justify-center items-center'>Get started</button>
        </div>
    );
};

export default Component1;