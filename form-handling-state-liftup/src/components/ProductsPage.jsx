import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const ProductsPage = () => {
  console.log("RHF rendering...");

  let {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({});

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();
        })}
        className="flex flex-col w-80 bg-gray-900 p-6 gap-5 rounded-xl"
      >
        <h1 className="text-xl text-gray-100">Add Product</h1>
        <input
          {...register("name")}
          className="p-2 border rounded text-gray-400 bg-gray-800 border-gray-700"
          type="text"
          placeholder="Enter Product name"
        />
        <button className="p-2 text-white bg-blue-600 rounded">Sign up</button>
      </form>
      <h1 className="text-white">{formData.Product}</h1>
    </div>
  );
};

export default ProductsPage;
