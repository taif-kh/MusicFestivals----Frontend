import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item1 from './components/Item1';
import Item0 from './components/Item0';
import Item2 from './components/Item2';




const Home = () => {
  const [user, setUser] = useState(null); // Store both token and email
  const [item, setItem] = useState(0);

  const names = ['List Events', 'Create Event', 'Get event', 'Delete Event', 'Update Event', 'Limit Result', 'List an artist\'s Events', 'List a city\'s Events', 'Hide Event', 'Modify an Event\'s field', 'Get API Key', 'Create/Modify API Key', 'Sign Up', 'Log In', 'Get a user\'s Events', 'Get User', 'List Users', 'Delete User'];
  const paths = ['/events', ''];
  async function addToken(data) {
    try {
      let response = await fetch("http://localhost:3000/log-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
        mode: "cors",
      });
  
      const result = await response.json();
      console.log("Response from server:", result);
  
      const jwt_token = result.token;
      const id = result.id; // Get the user ID
      const email = result.email;
  
      if (jwt_token && id && email) {
        setUser({ token: jwt_token, id: id, email: email });
        localStorage.setItem("jwt_token", jwt_token);
        localStorage.setItem("id", id); // Store the user ID
        localStorage.setItem("email", email);
        console.log("User state set:", { token: jwt_token, id: id, email: email });
      } else {
        console.log("JWT token, id, email, or username is missing from the response.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  

  function removeToken() {
    setUser(null);
    localStorage.removeItem("jwt_token");
    localStorage.removeItem("email");
    localStorage.removeItem("id");
  }

  async function LoginSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const dataEntries = Object.fromEntries(data.entries());
    const dataJson = JSON.stringify(dataEntries);
    await addToken(dataJson);
  }
    // --------------------------------------------------------


  useEffect(() => {
    // Optionally, retrieve the email from localStorage if the user is already logged in
    const storedEmail = localStorage.getItem("email");
    const storedId = localStorage.getItem("id");
    const storedToken = localStorage.getItem("jwt_token");
    if (storedToken && storedEmail && storedId) {
      setUser({ token: storedToken, email: storedEmail, id: storedId });
      console.log("User restored from localStorage:", { token: storedToken, email: storedEmail, id: storedId });
    }
    //---------------------

    // ----------


      
  }, []);
  // border-orange-700 border-2

  console.log("Rendering component with user:", user);


  // const postsWithComments = posts.map(post => {
  //   return {
  //     ...post,
  //     comments: comments.filter(comment => comment.postId === post.id)
  //   };
  // });

  
  return (
    <html lang="en">
      <body className="border-white border-2 w-screen h-screen flex flex-col font-inter">
        <div>
        {/* ---------------------------------------------------------------- */}
        <div>
          {/* If user is logged in, show the welcome message and token */}
        {user && (
          <div className="bg-white text-black">
            <h3>Welcome</h3>
            <h3>Your email: {user.email}</h3>
            <h3>Your ID: {user.id}</h3>
            <h3>Your JWT Token:</h3>
            <p className="break-words w-64 bg-gray-100 p-2 rounded">
              {user.token || localStorage.getItem("jwt_token")}
            </p>
            <button onClick={removeToken} className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
              Log Out
            </button>

          </div>
        )}
          {/* If no user is logged in */}
          {!user &&           <div>
          <h2 className="text-center">Log In</h2>
          <form onSubmit={LoginSubmit}>
            <div className="flex flex-col items-center gap-y-2">
              <label>
                Email:
                <input type="text" name="email" className="w-52" />
              </label>
              <label>
                Password:
                <input type="password" name="password" className="w-52" />
              </label>
              <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                Log In
              </button>
            </div>
          </form>
          <div>Please log in.</div>
          </div>}
          
        </div>


          <hr className='border-white border-2 '/>
          <div className='bg-black'>

            <div className='flex gap-3'>
            <p>Presentation</p>
            <p>Signup/Login</p>
            <p>API Reference</p>
            </div>
            <h1>MusicEvents API</h1>
            <p>MusicEvents API for your events’ website</p>
            <button className='w-[160px] h-[64px] bg-white text-black rounded-[45px] flex justify-center items-center'>Get started</button>
            <h1>Why using an API?</h1>
            <ol className='list-disc pl-9'>
              <li>Easy to integrate</li>
              <li>Cross-Platform Data Access: mobile, web etc..</li>
              <li>Security and Control: authentication and authorization.</li>
              <li>No server-side code.</li>
            </ol>

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

            <h1>Examples of websites to integrate with</h1>
            <ol className='list-disc pl-9'>
            <li>Global Music Events Explorer: Search for events</li>
              <li>Personal Music Events Dashboard: Allow a user to manage his own events</li>
              <li>Events' booking Platform: Buy tickets to an event</li>
              <li>Music Social Platform: Discuss music and events</li>
              <li>Event Organizer Portal: Organisations can manage their events and sell tickets. </li>
              <li>Music Festival Hub: A dedicated portal for festivals, showcasing events, lineups, and tickets.</li>
            </ol>

            <h1>Technologies used</h1>
            <img src='/react.svg' className='invert' />
            <img src='/javascript-155-svgrepo-com.svg' className='invert w-14 h-14' />

            <h1>Ready to join?</h1>
            <div className='flex gap-3'>
            <button className='w-[160px] h-[64px] bg-white text-black rounded-[45px] flex justify-center items-center'>Join us</button>
            <button className='w-[160px] h-[64px] bg-black text-white rounded-[45px] flex justify-center items-center border-2'>View docs</button>
            <p className='justify-end'>MusicEvents API</p>
            </div>

            <div>
            <h1>API Reference</h1>
            {/* w-[310px]  */}
<div className='flex'>
  {/* --api reference splitted into two */}
<div className='w-[400px] h-[600px] border-opacity-50 flex flex-col items-center pl-14 gap-y-[40px] overflow-y-auto overflow-x-hidden'>
              {/* ---------- */}
              <p className='mr-[70px] border-b-2 w-full h-full text-[37px] '>Events</p>
              <div className='flex items-start justify-start gap-x-2 w-full h-full'>
                <div className='bg-[#008753] w-[48px] h-[24px] rounded-[6px] flex items-center justify-center text-[12px] '>GET</div>
                <button className='text-[16px]' onClick={() => setItem(0)}>List Events</button>
              </div>
              <div className='flex items-center justify-start gap-x-2 w-full h-full'>
                <div className='bg-[#0074E8] w-[48px] h-[24px] rounded-[6px] flex items-center justify-center text-[12px] '>POST</div>
                <button className='text-[16px] 'onClick={() => setItem(1)}>Create Event</button>
              </div>
              <div className='flex items-start justify-start gap-x-2 w-full h-full'>
                <div className='bg-[#008753] w-[48px] h-[24px] rounded-[6px] flex items-center justify-center text-[12px] '>GET</div>
                <button className='text-[16px]' onClick={() => setItem(2)}>//Get event</button>
              </div>
              <div className='flex items-center justify-start gap-x-2 w-full h-full'>
                <div className='bg-[#CC0000] w-[48px] h-[24px] rounded-[6px] flex items-center justify-center text-[12px] '>DEL</div>
                <button className='text-[16px] '>//Delete Event</button>
              </div>
              <div className='flex items-center justify-start gap-x-2 w-full h-full'>
                <div className='bg-[#BD5B00] w-[48px] h-[24px] rounded-[6px] flex items-center justify-center text-[12px] '>PUT</div>
                <button className='text-[16px] '>//Update Event</button>
              </div>
              <div className='flex items-start justify-start gap-x-2 w-full h-full'>
                <div className='bg-[#008753] w-[48px] h-[24px] rounded-[6px] flex items-center justify-center text-[12px] '>GET</div>
                <button className='text-[16px] '>//Limit Result</button>
              </div>
              <div className='flex items-start justify-start gap-x-2 w-full h-full'>
                <div className='bg-[#008753] w-[48px] h-[24px] rounded-[6px] flex items-center justify-center text-[12px] '>GET</div>
                <button className='text-[16px] '>List an artist's Events</button>
              </div>
              <div className='flex items-start justify-start gap-x-2 w-full h-full'>
                <div className='bg-[#008753] w-[48px] h-[24px] rounded-[6px] flex items-center justify-center text-[12px] '>GET</div>
                <button className='text-[16px] '>List a city's Events</button>
              </div>
              <div className='flex items-center justify-start gap-x-2 w-full h-full'>
                <div className='bg-[#BD5B00] w-[48px] h-[24px] rounded-[6px] flex items-center justify-center text-[12px] '>PUT</div>
                <button className='text-[16px] '>Hide Event</button>
              </div>
              <div className='flex items-center justify-start gap-x-2 w-full h-full'>
                <div className='bg-[#BD5B00] w-[48px] h-[24px] rounded-[6px] flex items-center justify-center text-[12px] '>PUT</div>
                <button className='text-[16px] '>Modify an Event's field</button>
              </div>
              {/* ********************** */}
              <p className='mr-[70px] border-b-2 w-full h-full text-[37px] '>API Key</p>
              <div className='flex items-start justify-start gap-x-2 w-full h-full'>
                <div className='bg-[#008753] w-[48px] h-[24px] rounded-[6px] flex items-center justify-center text-[12px] '>GET</div>
                <button className='text-[16px] '>Get API Key</button>
              </div>
              <div className='flex items-center justify-start gap-x-2 w-full h-full'>
                <div className='bg-[#0074E8] w-[48px] h-[24px] rounded-[6px] flex items-center justify-center text-[12px] '>POST</div>
                <button className='text-[16px] '>Create/Modify API Key</button>
              </div>
              {/* ********************** */}
              <p className='mr-[70px] border-b-2 w-full h-full text-[37px] '>Users</p>
              <div className='flex items-center justify-start gap-x-2 w-full h-full'>
                <div className='bg-[#0074E8] w-[48px] h-[24px] rounded-[6px] flex items-center justify-center text-[12px] '>POST</div>
                <button className='text-[16px] '>Sign Up</button>
              </div>
              <div className='flex items-center justify-start gap-x-2 w-full h-full'>
                <div className='bg-[#0074E8] w-[48px] h-[24px] rounded-[6px] flex items-center justify-center text-[12px] '>POST</div>
                <button className='text-[16px] '>Log In</button>
              </div>
              <div className='flex items-start justify-start gap-x-2 w-full h-full'>
                <div className='bg-[#008753] w-[48px] h-[24px] rounded-[6px] flex items-center justify-center text-[12px] '>GET</div>
                <button className='text-[16px] '>Get a user's Events</button>
              </div>
              <div className='flex items-start justify-start gap-x-2 w-full h-full'>
                <div className='bg-[#008753] w-[48px] h-[24px] rounded-[6px] flex items-center justify-center text-[12px] '>GET</div>
                <button className='text-[16px] '>Get User</button>
              </div>
              <div className='flex items-start justify-start gap-x-2 w-full h-full'>
                <div className='bg-[#008753] w-[48px] h-[24px] rounded-[6px] flex items-center justify-center text-[12px] '>GET</div>
                <button className='text-[16px] '>List Users</button>
              </div>
              <div className='flex items-center justify-start gap-x-2 w-full h-full'>
                <div className='bg-[#CC0000] w-[48px] h-[24px] rounded-[6px] flex items-center justify-center text-[12px] '>DEL</div>
                <button className='text-[16px] '>Delete User</button>
              </div>
              {/* ********************** */}

              {/* ---------- */}
            </div>
             {/* ----PART 2---- */}
             {item == 0 && (<Item0 />)}
             {item == 1 && <Item1 />}
             {item == 2 && <Item2 />}

</div>
            </div>

            <div>

            </div>
          </div>
          {/* ---------------------------------------------------------------- */}
        </div>
      </body>
    </html>
  );
  
};

export default Home;