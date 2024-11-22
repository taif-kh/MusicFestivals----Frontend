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
      <div>
        <h1>Technologies used</h1>
        <img src="/react.svg" className="invert" alt="React Logo" />
        <img
          src="/javascript-155-svgrepo-com.svg"
          className="invert w-14 h-14"
          alt="JavaScript Logo"
        />
      </div>
      <button onClick={handleScroll} className="absolute bottom-2">
        <img src="/down.png" alt="Scroll Down" />
      </button>
    </div>
  );
});

export default Component4;
