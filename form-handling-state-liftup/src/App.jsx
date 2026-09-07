import {useState} from "react";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import ProductsPage from "./components/ProductsPage";

const App = () => {

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-950">
      <ProductsPage />
    </div>
  );
};

export default App;
