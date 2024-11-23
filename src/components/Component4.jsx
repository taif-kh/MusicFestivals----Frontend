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
      className="h-screen flex flex-col justify-center items-start w-screen  pl-[50px] pt-[30px]  relative overflow-hidden"
    >
      <div className=' pb-16'>
        {/* <div className='pl-8 font-medium list-disc flex gap-x-16 w-[1300px] items-center justify-center '>
 <div className='flex items-center justify-start gap-x-3 '>        <h2>React.js </h2>         <img src="/react.svg" className="invert w-14 h-14" alt="React Logo" />
</div>
        <div className='flex items-center justify-start gap-x-3'>        <h2>PostgreSQL </h2>         <img src="/postgre.svg" className="invert w-14 h-14" alt="React Logo" />
        </div>
        <div className='flex items-center justify-start gap-x-3'>        <h2>Express.js </h2>         <img src="/expressOne.svg" className="invert w-14 h-16" alt="React Logo" />
        </div>
        <div className='flex items-center justify-start gap-x-3'>        <h2>Node.js </h2>         <img src="/nodejs.svg" className="invert w-14 h-14" alt="React Logo" />
        </div>
        </div>
        <br /> */}
        <h1 className='text-[67px] '>Controllers used</h1>
        <ol className='pl-12 list-disc flex gap-x-24'>
        <li>Events' Controller</li>
          <li>Users' Controller</li>
          <li>Key's Controller</li>
        </ol>
        <br />


        <h1 className='text-[67px] '>Models</h1>
        <ol className='pl-12 list-disc flex gap-x-[200px] '>
        <li>Events' model</li>
          <li>Users' model</li>
        </ol>
        <br />
        <div className='flex gap-x-12 pl-12 '>
        <img src="/group2.png" className='h-[300px] ' />
        <img src="/group3.png" className='h-[300px] ' />
        </div>

        {/* <img
          src="/javascript-155-svgrepo-com.svg"
          className="invert w-14 h-14"
          alt="JavaScript Logo"
        /> */}
      </div>
      
      <button onClick={handleScroll} className="absolute right-[700px] bottom-0">
        <img src="/down.png" alt="Scroll Down" />
      </button>
    </div>
  );
});

export default Component4;
