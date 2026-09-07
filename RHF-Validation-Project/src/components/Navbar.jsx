import React from "react";

const Navbar = ({ setToggle }) => {
  // console.log("Navbar rendering...");
  return (
    <div className="bg-black flex p-4 items-center justify-between">
      <img
        className="rounded-xl cursor-pointer"
        width={40}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU8TFJ7iUwyhF0_LOmPpst5aFLBQUYvRcuREn63JTVvg&s=10"
        alt=""
      />
      <div className="flex gap-6">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">About</p>
        <p className="cursor-pointer">Contact</p>
      </div>
      <button
        onClick={() => setToggle((prev) => !prev)}
        className="bg-blue-600 rounded p-2 cursor-pointer"
      >
        Create new
      </button>
    </div>
  );
};

export default Navbar;
