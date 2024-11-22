/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';

const Component1 = forwardRef((_props, ref) => {
    
    
  return (
    <div ref={ref} className="h-screen flex flex-col justify-center items-center w-screen relative">
      <div>
        <h1>Why using an API?</h1>
        <ol className="list-disc pl-9">
          <li>Easy to integrate</li>
          <li>Cross-Platform Data Access: mobile, web, etc.</li>
          <li>Security and Control: authentication and authorization</li>
          <li>No server-side code</li>
        </ol>
      </div>
      {/* <div className='w-10 h-10 bg-purple-600'></div> */}
      <img src="/down.png" className='absolute bottom-2 ' />
    </div>
  );
});

export default Component1;
