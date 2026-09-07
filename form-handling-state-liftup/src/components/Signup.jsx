import React from "react";

const Signup = ({setToggle}) => {
  return (
    <div>
      <form className="flex flex-col w-80 bg-gray-900 p-6 gap-5 rounded-xl">
        <h1 className="text-xl text-gray-100">Sign up</h1>
        <input
          className="p-2 border rounded text-gray-400 bg-gray-800 border-gray-700"
          type="text"
          placeholder="Enter name"
        />
        <input
          className="p-2 border rounded text-gray-400 bg-gray-800 border-gray-700"
          type="email"
          placeholder="Enter email"
        />
        <input
          className="p-2 border rounded text-gray-400 bg-gray-800 border-gray-700"
          type="password"
          placeholder="Enter password"
        />
        <button className="p-2 text-white bg-blue-600 rounded">Sign up</button>
        <p className="text-white">
          Already have account ?{" "}
          <span onClick={() => setToggle(prev => !prev)} className="cursor-pointer text-blue-400">Login here</span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
