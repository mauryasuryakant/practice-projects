import React from "react";

const Login = ({setToggle}) => {
  return (
    <div>
      <form className="flex flex-col w-80 bg-gray-900 p-6 gap-5 rounded-xl">
        <h1 className="text-xl text-gray-100">Login</h1>
        <input
          className="p-2 bg-gray-800 border rounded border-gray-700 text-gray-400"
          type="email"
          placeholder="Enter email"
        />
        <input
          className="p-2 bg-gray-800 border rounded border-gray-700 text-gray-400"
          type="password"
          placeholder="Enter password"
        />
        <button className="p-2 text-white bg-blue-600 rounded">Login</button>
        <p className="text-gray-100">
          Didn't have account ? <span className="text-blue-400 cursor-pointer" onClick={() => setToggle(prev => !prev)}>Sign up</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
