// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [userDeatails, setUserDetails] = useState({
//     name: "",
//     password: "",
//   });

//   const onChange = (key, value) => {
//     let data = { ...userDeatails };
//     data[key] = value;
//     setUserDetails(data);
//   };

//   const inputStyle =
//     "px-1.5 py-1 border border-gray-500 rounded-md text-sm font-medium outline-none backdrop-blur-sm bg-white/30  shadow-lg  shadow-gray-900/50 l  ";

//   return (
//     <div className="w-full min-h-screen   flex items-center justify-around  bg-sigupimage bg-repeat bg-bottom bg-cover h-screen  ">
//       <form
//         className="w-96 h-auto p-5 rounded-lg  shadow-lg backdrop-blur-xl bg-white/30 transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 shadow-gray-900/50 l "
//         onSubmit={(e) => {
//           e.preventDefault();
//           console.log(userDeatails);
//           navigate("/login");
//         }}
//       >
//         <h4 className="pb-5 text-center  font-bold text-3xl">SIGN UP</h4>
//         <div className="flex flex-col gap-2.5">
//           <div className="flex flex-col gap-1">
//             <label htmlFor="" className="font-bold">
//               User Name
//             </label>
//             <input
//               type="text"
//               className={inputStyle}
//               onChange={(event) => onChange("name", event.target.value)}
//             />
//           </div>
//           <div className="flex flex-col gap-1 font-bold">
//             <label htmlFor="" className="">
//               Full Name
//             </label>
//             <input
//               type="text"
//               className={inputStyle}
//               onChange={(event) => onChange("name", event.target.value)}
//             />
//           </div>
//           <div className="flex flex-col gap-1 font-bold">
//             <label htmlFor="" className="">
//               Email
//             </label>
//             <input
//               type="text"
//               className={inputStyle}
//               onChange={(event) => onChange("name", event.target.value)}
//             />
//           </div>
//           <div className="flex flex-col gap-1 font-bold">
//             <label htmlFor="" className="">
//               Phone Number
//             </label>
//             <input
//               type="text"
//               className={inputStyle}
//               onChange={(event) => onChange("name", event.target.value)}
//             />
//           </div>
//           <div className="flex flex-col gap-1 font-bold">
//             <label htmlFor="" className="">
//               password
//             </label>
//             <input
//               name="password"
//               className={inputStyle}
//               onChange={(event) => onChange("password", event.target.value)}
//             />
//           </div>
//         </div>
//         <div className="flex items-center justify-center gap-2.5 pt-5">
//           <button
//             type="submit"
//             className="w-full border border-gray-500 rounded-md py-1.5 text-center font-bold  border-solid border-2 border-slate-950"
//           >
//             SignUp
//           </button>
//         </div>{" "}
//         <div className="flex items-center gap-1 pt-2.5 w-96">
//           <p>Already have an account?</p>
//           <Link to="/login" type="submit" className="text-blue-600">
//             Login
//           </Link>
//         </div>
//       </form>

//       <div className="m-12 flex flex-col gap-6 relative bottom-20">
//         <h1 className="font-bold text-5xl text-black">CONNECT WITH</h1>
//         <h1 className="font-bold text-5xl text-black ">US</h1>
//         <div>
//           <p className="font-semibold">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit ctetutr
//             adipisicing eli{" "}
//           </p>
//           <p className="font-semibold">
//             Lorem ipsum dolor sit amet, consectetutr adipisicing eli ctetutr a
//           </p>
//           <p className="font-semibold">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    userName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const onChange = (key, value) => {
    setUserDetails({ ...userDetails, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8085/signUp",
        userDetails
      );

      if (response.status === 200) {
        // const result = await response.json();
        console.log("Signup successful:", response.data);
        navigate("/login");
      } else {
        console.error("Signup failed:", response.status);
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error occurred during signup:", error);
    }
  };

  const inputStyle =
    "px-1.5 py-1 border border-gray-500 rounded-md text-sm font-medium outline-none backdrop-blur-sm bg-white/30 shadow-lg shadow-gray-900/50";

  return (
    <div className="w-full flex-1 flex items-center justify-center  bg-sigupimage bg-repeat bg-bottom bg-cover h-fit py-10 min-h-screen">
      <div className="w-4/5 flex gap-5 items-center">
        <form
          className="min-w-32  flex-1 min-h-80 m- h-full px-4 pt-2 rounded-lg shadow-lg backdrop-blur-sm bg-white/30 transition ease-in-out delay-100 bg-blue-500 shadow-gray-900/50"
          onSubmit={handleSubmit}
        >
          <h4 className="pb-5 text-center font-bold text-3xl">SIGN UP</h4>
          <div className="flex flex-col gap-2.5">
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="font-bold">
                User Name
              </label>
              <input
                type="text"
                id="username"
                className={inputStyle}
                onChange={(event) => onChange("userName", event.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-1 font-bold">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                id="fullname"
                className={inputStyle}
                required
                onChange={(event) => onChange("fullName", event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 font-bold">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                required
                className={inputStyle}
                onChange={(event) => onChange("email", event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 font-bold">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                className={inputStyle}
                required
                onChange={(event) =>
                  onChange("phoneNumber", event.target.value)
                }
              />
            </div>
            <div className="flex flex-col gap-1 font-bold">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className={inputStyle}
                onChange={(event) => onChange("password", event.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2.5 pt-5">
            <button
              type="submit"
              className="w-full border border-gray-500 rounded-md py-1.5 text-center font-bold border-solid border-2 border-slate-950"
            >
              Sign Up
            </button>
          </div>
          <div className="flex items-center gap-1 text-base font-medium h-12">
            <p className="!m-0">Already have an account?</p>
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </div>
        </form>

        <div className="m-12 flex-1 flex flex-col gap-6 relative bottom-20  max-sm:hidden">
          <h1 className="font-bold text-5xl text-black">CONNECT WITH</h1>
          <h1 className="font-bold text-5xl text-black">US</h1>
          <div>
            <p className="font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <p className="font-semibold">
              Lorem ipsum dolor amet, consectetur adipisicing elit.
            </p>
            <p className="font-semibold">
              Lorem ipsum dolor sit amet, consectetur .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
