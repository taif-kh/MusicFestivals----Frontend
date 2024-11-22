import React from 'react';

const Component2 = () => {

    return (
        <div className='h-[685px] flex flex-col justify-center items-center w-full border-2 '>
            <div>
            <h1>What can i do with MusicEvents API?</h1>
            <ol className='list-disc pl-9'>
            <li>Check out music events around the world.</li>
              <li>Search events by location or artist lineup.</li>
              <li>Get events' Detailed information: date, artist, location and more.</li>
              <li>Check out tickets' availability, providing services and prices.</li>
              <h2>Member?              </h2>
              <li>Manage your own music events: View, Add, Edit and Delete them. </li>
              <h2>Admin?              </h2>
              <li>Manage users: View and Delete them. </li>
            </ol>
            </div>
        </div>
    );
};

export default Component2;