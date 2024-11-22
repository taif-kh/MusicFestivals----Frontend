import React, { forwardRef } from 'react';

const Component2 = forwardRef(({ component3Ref }, ref) => {
  const handleScroll = () => {
    if (component3Ref?.current) {
      component3Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={ref}
      className="h-screen flex flex-col justify-center items-center w-screen relative overflow-x-hidden"
    >
      <div>
        <h1>What can I do with MusicEvents API?</h1>
        <ol className="list-disc pl-9">
          <li>Check out music events around the world.</li>
          <li>Search events by location or artist lineup.</li>
          <li>
            Get events' detailed information: date, artist, location, and more.
          </li>
          <li>
            Check out tickets' availability, providing services and prices.
          </li>
          <h2>Member?</h2>
          <li>
            Manage your own music events: View, Add, Edit, and Delete them.
          </li>
          <h2>Admin?</h2>
          <li>Manage users: View and Delete them.</li>
        </ol>
      </div>
      <button onClick={handleScroll} className="absolute bottom-2">
        <img src="/down.png" alt="Scroll Down" />
      </button>
    </div>
  );
});

export default Component2;
