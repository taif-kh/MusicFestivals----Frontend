import React, { forwardRef } from 'react';

const Component4 = forwardRef((_, ref) => {
  return (
    <div
      ref={ref}
      className="h-[685px] flex flex-col justify-center items-center w-full border-2"
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
    </div>
  );
});

export default Component4;
