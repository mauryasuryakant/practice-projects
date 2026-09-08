import React from "react";

const Card = ({name}) => {
  console.log("Card rendering...");
  console.log(name)
  return (
    <div className="border p-2 border-white flex flex-col gap-2">
      <div className="w-52 h-50 overflow-hidden">
        <img
          className="w-full h-full object-bottom object-cover"
          src="https://i.pinimg.com/736x/9f/f2/38/9ff23808ccc24dc265bf1f39d30ef264.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col p-5">
      <h1 className="font-bold">Name: {name.data.name}</h1>
        <p className="font-semibold ">Email: {name.data.email}</p>
        <p className="font-semibold ">Price: {name.data.price}</p>
        <p className="font-semibold ">Categoty: {name.data.category}</p>
      </div>
      <div className="flex justify-between p-5">
        <button className="px-4 cursor-pointer text-white bg-yellow-600 rounded">Add</button>
        <button className="p-2 cursor-pointer text-white bg-red-600 rounded">Delete</button>
      </div>
    </div>
  );
};

export default Card;
