import React, { useState, useEffect } from 'react';
import axios from 'axios';




const Home = () => {
  const [user, setUser] = useState(null); // Store both token and email

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
      <body className="border-white border-2 w-screen h-screen flex flex-col">
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
          <div className='bg-gray-700'>

            <div className='flex gap-3'>
            <p>Presentation</p>
            <p>Signup/Login</p>
            <p>API Reference</p>
            </div>
            <h1>MusicEvents API</h1>
            <p>MusicEvents API for your events’ website</p>
            <button className='w-[160px] h-[64px] bg-white text-black rounded-[45px] flex justify-center items-center'>Get started</button>
            <h1>Why using an API?</h1>
            <ol>
              <li>* Easy to integrate</li>
              <li>* Cross-Platform Data Access: mobile, web etc..</li>
              <li>* Security and Control: authentication and authorization.</li>
              <li>* No server-side code.</li>
            </ol>

            <h1>What can i do with MusicEvents API?</h1>
            <ol>
            <li>* Check out music events around the world.</li>
              <li>* Search events by location or artist lineup.</li>
              <li>* Get events' Detailed information: date, artist, location and more.</li>
              <li>* Check out tickets' availability, providing services and prices.</li>
              <p>Member?              </p>
              <li>* Manage your own music events: View, Add, Edit and Delete them. </li>
              <p>Admin?              </p>
              <li>* Manage users: View and Delete them. </li>
            </ol>
          </div>
          {/* ---------------------------------------------------------------- */}
        </div>
      </body>
    </html>
  );
  
};

export default Home;