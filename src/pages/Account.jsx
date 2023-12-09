import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import heart from "../assets/heart.png";

const Account = () => {
  const navigate = useNavigate();
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);
  const cardStyle = {
    borderRadius: "24px",
    background: "linear-gradient(145deg, #d4cdb5, #fdf4d7)",
    boxShadow: "11px 11px 29px #c2bba5,-11px -11px 29px #ffffed",
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://43.205.231.10:4000/api/users/signup",
        {
          name: e.target.elements.name.value,
          email: e.target.elements.email.value,
          password: e.target.elements.password.value,
        }
      );

      Cookies.set("jwt", response.data.data.token);
      const decoded = jwtDecode(response.data.data.token);
      localStorage.setItem("name", decoded.user.name);

      if (response.data.status === "success") {
        navigate("/");
      }
    } catch (error) {
      console.error("Sign up failed:", error);
      alert(error.response.data.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://43.205.231.10:4000/api/users/login",
        {
          email: e.target.elements.email.value,
          password: e.target.elements.password.value,
        }
      );

      Cookies.set("jwt", response.data.data.token);

      const decoded = jwtDecode(response.data.data.token);

      localStorage.setItem("name", decoded.user.name);

      if (response.data.status === "success") {
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Sign in failed:", error);
      alert(error.response.data.message);
    }
  };

  return (
    <div className="container max-w-7xl mx-auto">
      <div className="max-w-full items-center justify-center py-4 my-1">
        <a href="/" className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
          <span className="self-auto text-4xl font-bold whitespace-nowrap dark:text-black">
            bkmrk'd
          </span>
        </a>
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="p-8 w-96 " style={cardStyle}>
          {showSignUp && (
            <div>
              <h1 className="text-center mb-4">Sign Up</h1>
              <form onSubmit={handleSignUp}>
                <input
                  className="block w-full mb-4 p-2 border rounded-lg"
                  type="text"
                  placeholder="Name"
                  name="name"
                />
                <input
                  className="block w-full mb-4 p-2 border rounded-lg"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                <input
                  className="block w-full mb-4 p-2 border rounded-lg"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <button
                  className="block w-full mb-4 p-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full"
                  type="submit"
                >
                  Sign Up
                </button>
              </form>
              <button
                className="block w-full p-2 hover:bg-gray-300 text-blue-500 rounded-full"
                onClick={() => {
                  setShowSignUp(false);
                  setShowSignIn(true);
                }}
              >
                Sign In Instead
              </button>
            </div>
          )}
          {showSignIn && (
            <div>
              <h1 className="text-center mb-4">Sign In</h1>
              <form onSubmit={handleSignIn}>
                <input
                  className="block w-full mb-4 p-2 border rounded-lg"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                <input
                  className="block w-full mb-4 p-2 border rounded-lg"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <button
                  className="block w-full mb-4 p-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full"
                  type="submit"
                >
                  Sign In
                </button>
              </form>
              <button
                className="block w-full p-2  hover:bg-gray-300 text-blue-500 rounded-full"
                onClick={() => {
                  setShowSignIn(false);
                  setShowSignUp(true);
                }}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
      <br className="border-black border-t-2 mt-8" />
      <div className="flex items-center justify-center mt-4">
        <p className="mr-2 font-bold text-xl text-center pb-2">
          Made with love
        </p>
        <img src={heart} alt="heart" className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Account;
