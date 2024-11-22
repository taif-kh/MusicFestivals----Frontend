import React, { forwardRef } from 'react';

const Component1 = forwardRef(({ component2Ref }, ref) => {
  const handleScroll = () => {
    if (component2Ref?.current) {
      component2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      <button onClick={handleScroll} className="absolute bottom-2">
        <img src="/down.png" alt="Scroll Down" />
      </button>
    </div>
  );
});

export default Component1;
