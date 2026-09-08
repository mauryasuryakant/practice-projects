import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Addcard from "./components/Addcard";
import Hook from "./components/Hook";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [products, setProducts] = useState([]);

  return (
    <>
      <div className="text-white bg-[#28272A] h-screen p-4 flex flex-col">
        <Navbar setToggle={setToggle} />
        {toggle ? (
          <div className="flex flex-1 justify-center items-center">
            <Addcard setToggle={setToggle} setProducts={setProducts} />
            {/* <Hook setToggle={setToggle} setProducts={setProducts}/> */}
          </div>
        ) : (
          <div className="p-5 flex gap-4 flex-wrap">
            {products.map((e, index) => (
              <Card key={index} name={e} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
