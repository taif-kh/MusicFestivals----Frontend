import React from 'react';

const Component1 = () => {

    return (
        <div className='h-[685px] flex flex-col justify-center items-center w-full border-2 '>
            <div>
            <h1>Why using an API?</h1>
            <ol className='list-disc pl-9'>
              <li>Easy to integrate</li>
              <li>Cross-Platform Data Access: mobile, web etc..</li>
              <li>Security and Control: authentication and authorization.</li>
              <li>No server-side code.</li>
            </ol>
            </div>
        </div>
    );
};

export default Component1;