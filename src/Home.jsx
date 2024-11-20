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
      const username = result.username;
  
      if (jwt_token && id && email && username) {
        setUser({ token: jwt_token, id: id, email: email, username: username });
        localStorage.setItem("jwt_token", jwt_token);
        localStorage.setItem("id", id); // Store the user ID
        localStorage.setItem("email", email);
        localStorage.setItem("username", username);
        console.log("User state set:", { token: jwt_token, id: id, email: email, username: username });
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
    const storedToken = localStorage.getItem("jwt_token");
    if (storedToken && storedEmail) {
      setUser({ token: storedToken, email: storedEmail });
      console.log("User restored from localStorage:", { token: storedToken, email: storedEmail });
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
      <body className="border-white border-2 flex flex-col">
        {/* If user is logged in, show the welcome message and token */}
        {user && (
          <div className="bg-white text-black">
            <h3>Welcome, {user.username}!</h3>
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
  
        {/* Links for sign-up and log-in */}

  
        {/* Log-in form */}
        <div>
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
  
          {/* If no user is logged in */}
          {!user && <div>Please log in.</div>}
        </div>
      </body>
    </html>
  );
  
};

export default Home;