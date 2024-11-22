import React, { forwardRef } from 'react';

const Component5 = forwardRef(({ component6Ref }, ref) => {
    const handleScroll = () => {
      if (component6Ref?.current) {
        component6Ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    return (
        <div 
        ref={ref}
        className='h-screen flex flex-col justify-start items-start w-screen pt-[86px] pb-[57px] pl-[54px] pr-[51px] overflow-x-hidden relative'>
            <div>
            <h1 className='text-[67px] font-semibold '>Ready to join?</h1>
            <div className='h-[71px] w-full '></div>
            <div className='flex gap-3 justify-start'>
            <button className='w-[160px] h-[64px] bg-white text-black rounded-[45px] flex justify-center items-center'>Join us</button>
            <button className='w-[160px] h-[64px] bg-black text-white rounded-[45px] flex justify-center items-center border-2' onClick={handleScroll}>API Reference</button>
            </div>
            <div className='h-[261px] w-full '></div>
            </div>
            <p className='flex justify-end w-full text-[37px] font-semibold absolute bottom-4 right-6'>MusicEvents API</p>
        </div>
    );
});

export default Component5;