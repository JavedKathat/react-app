import React, { useState } from "react";

function Login() {

  const [email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const loginHandler=(e)=>{
    e.preventDefault();
    console.log("Email is: "+email+" & Password is: "+password);
    setEmail('');
    setPassword('');
  }

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center ">
      <div className="flex flex-col w-[85%] md:w-[70%] lg:w-[30%] h-[70%] lg:h-[70%] items-center rounded bg-gradient-to-r from-blue-600 to-violet-600 shadow-md">
        <h2 className="text-3xl font-medium mt-14">Login</h2>
        <form
          onSubmit={(e)=>{
            loginHandler(e);
          }}
          // action=""
          // method="post"
          className="flex flex-col gap-8 mt-16 w-[90%] items-center"
        >
          <input
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
            className="text-lg rounded h-[2rem] w-[100%] p-2 border hover:border-gray-500 focus:border-1 text-black"
          />
          <input
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
            className="text-lg rounded h-[2rem] w-[100%] p-2 border hover:border-gray-500  hover: focus:border-1  text-black"
          />
        <button className=" bg-blue-500 rounded-md w-36 mt-10 h-10 shadow-lg text-lg hover:bg-blue-600 hover:border">
          Login
        </button>
        </form>

        <h2 className="mt-5">
          Not register yet?<span className="text-blue-300 text-lg hover:text-violet-300 hover:cursor-pointer"> Sign up!</span>
        </h2>
      </div>
    </div>
  );
}

export default Login;
