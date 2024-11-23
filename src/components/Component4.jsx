import React, { forwardRef } from 'react';

const Component4 = forwardRef(({ component5Ref }, ref) => {
  const handleScroll = () => {
    if (component5Ref?.current) {
      component5Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={ref}
      className="h-screen flex flex-col justify-center items-center w-screen  relative overflow-x-hidden"
    >
      <div className=' pb-16'>
        <h1 className='text-[67px] '>Technologies used</h1>
        <div className='pl-8 font-medium list-disc'>
 <div className='flex items-center justify-start gap-x-5 '>        <h1>React.js </h1>         <img src="/react.svg" className="invert w-14 h-14" alt="React Logo" />
</div>
        <div className='flex items-center justify-start gap-x-5'>        <h1>PostgreSQL </h1>         <img src="/postgre.svg" className="invert w-14 h-14" alt="React Logo" />
        </div>
        <div className='flex items-center justify-start gap-x-5'>        <h1>Express.js </h1>         <img src="/expressOne.svg" className="invert w-14 h-16" alt="React Logo" />
        </div>
        <div className='flex items-center justify-start gap-x-5'>        <h1>Node.js </h1>         <img src="/nodejs.svg" className="invert w-14 h-14" alt="React Logo" />
        </div>
        </div>

        <h1 className='text-[67px] '>Controllers used</h1>
        <ol className='pl-12 list-disc flex gap-x-24'>
        <li>Events' Controller</li>
          <li>Users' Controller</li>
          <li>Key's Controller</li>
        </ol>


        {/* <img
          src="/javascript-155-svgrepo-com.svg"
          className="invert w-14 h-14"
          alt="JavaScript Logo"
        /> */}
      </div>
      
      <button onClick={handleScroll} className="absolute bottom-0">
        <img src="/down.png" alt="Scroll Down" />
      </button>
    </div>
  );
});

export default Component4;
