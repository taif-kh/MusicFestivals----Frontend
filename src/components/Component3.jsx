import React, { forwardRef } from 'react';

const Component3 = forwardRef((_, ref) => {
  return (
    <div
      ref={ref}
      className="h-[685px] flex flex-col justify-center items-center w-full border-2"
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
    </div>
  );
});

export default Component3;
