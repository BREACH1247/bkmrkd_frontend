// Account.jsx

import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';


const Account = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);

  return (
    <div className="container max-w-7xl mx-auto">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 shadow-lg border rounded-lg border-gray-400 w-96 ">
        {showSignUp && (
          <div>
            
            <h1 className="text-center mb-4">Sign Up</h1>
            <form >
              <input className="block w-full mb-4 p-2 border rounded-lg" type="text" placeholder="Username" />
              <input className="block w-full mb-4 p-2 border rounded-lg" type="email" placeholder="Email" />
              <input className="block w-full mb-4 p-2 border rounded-lg" type="password" placeholder="Password" />
              <button className="block w-full mb-4 p-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full" type="submit">Sign Up</button>
            </form>
            <button className="block w-full p-2 hover:bg-gray-300 text-blue-500 rounded-full" onClick={() => { setShowSignUp(false); setShowSignIn(true); }}>Sign In Instead</button>
          </div>
        )}
        {showSignIn && (
          <div>
            <h1 className="text-center mb-4">Sign In</h1>
          
            <form>
              <input className="block w-full mb-4 p-2 border rounded-lg" type="email" placeholder="Email" />
              <input className="block w-full mb-4 p-2 border rounded-lg" type="password" placeholder="Password" />
              <button className="block w-full mb-4 p-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full" type="submit">Sign In</button>
            </form>
            <button className="block w-full p-2  hover:bg-gray-300 text-blue-500 rounded-full" onClick={() => { setShowSignIn(false); setShowSignUp(true); }}>Sign Up</button>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Account;