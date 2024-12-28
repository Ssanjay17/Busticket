import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    userName: "",
    password: "",
  });

  // const onChange = (key, value) => {
  //   let data = { ...userDetails };
  //   data[key] = value;
  //   setUserDetails(data);
  // };
  const onChange = (key, value) => {
    setUserDetails({ ...userDetails, [key]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("user data", userDetails);
      const res = await axios.post("http://localhost:8085/Login", userDetails);
      console.log("Response is", res);
      // if (res.ok) {
      //   const result = await res.json();
      //   console.log("Login successful:", result);

      //   localStorage.setItem("userData", userDetails);
      //   navigate("/");
      // } else {
      //   console.error("Login failed:", res.status);
      //   alert("Invalid username or password. Please try again.");
      // }
      if (res.status === 200) {
        const result = res.data;
        console.log("Server status:", result);
        localStorage.setItem("userData", JSON.stringify(userDetails));
        console.log(localStorage);

        // if else to navigate or ignore the login
        if (result.status !== "BAD_REQUEST") {
          console.log("Server status:", result);
          navigate("/");
          // document.getElementById("log").innerHTML = "Logged";
        } else {
          alert("Invalid username or password. Please try again.");
        }
      } else {
        console.error("Login failed:", res.status);
        alert("Invalid username or password. Please try again.");
      }
    } catch (e) {
      console.log("Error occured", e);
      alert("An error occurred during login. Please try again later.");
    }
  };
  const inputStyle =
    "px-1.5 py-1 border border-gray-500 rounded-md text-sm font-medium outline-none backdrop-blur-sm bg-white/30 shadow-lg shadow-gray-900/50";

  return (
    <div className="w-12/12 flex items-center justify-center bg-bannerimage bg-repeat bg-bottom bg-cover h-screen relative">
      <form
        className="min-w-80 min-h-80 p-4 h-auto rounded-lg shadow-lg backdrop-blur-sm bg-white/30 transition ease-in-out delay-100 bg-blue-500 shadow-gray-900/50 "
        onSubmit={handleSubmit}
      >
        <h1 className="pb-3.5 pt-3 text-center text-4xl font-bold">Login</h1>
        <div className="flex flex-col gap-3 font-bold">
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="font-bold">
              User Name
            </label>
            <input
              type="text"
              id="username"
              value={userDetails.userName}
              className={inputStyle}
              onChange={(event) => onChange("userName", event.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={userDetails.password}
              className={inputStyle}
              onChange={(event) => onChange("password", event.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <button
            type="submit"
            className="w-full border-solid border-2 border-slate-950 border-gray-500 rounded-md py-1.5 text-center mt-8 font-medium"
          >
            Login
          </button>

          <Link
            to="/sign-up"
            className="w-full text-black no-underline border-solid border-2 border-slate-950 border-gray-500 rounded-md py-1.5 text-center mt-8 font-medium"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
