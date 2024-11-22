import React, { forwardRef } from 'react';

const Component3 = forwardRef(({ component4Ref }, ref) => {
  const handleScroll = () => {
    if (component4Ref?.current) {
      component4Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={ref}
      className="h-screen flex flex-col justify-center items-center w-screen relative overflow-x-hidden"
    >
      <div>
        <h1>Examples of websites to integrate with</h1>
        <ol className="list-disc pl-9">
          <li>Global Music Events Explorer: Search for events</li>
          <li>Personal Music Events Dashboard: Allow a user to manage their own events</li>
          <li>Events' booking Platform: Buy tickets to an event</li>
          <li>Music Social Platform: Discuss music and events</li>
          <li>
            Event Organizer Portal: Organizations can manage their events and
            sell tickets.
          </li>
          <li>
            Music Festival Hub: A dedicated portal for festivals, showcasing
            events, lineups, and tickets.
          </li>
        </ol>
      </div>
      <button onClick={handleScroll} className="absolute bottom-2">
        <img src="/down.png" alt="Scroll Down" />
      </button>
    </div>
  );
});

export default Component3;
