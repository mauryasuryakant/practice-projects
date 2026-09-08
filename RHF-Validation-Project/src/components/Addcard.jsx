import { useForm } from "react-hook-form";

const Addcard = ( {setProducts} ) => {
  console.log("Addcard rendering...");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  // console.log(errors)

  const formSubmit = (data) => {
    // console.log(data);
    setProducts(prev => [...prev, {data}])
    reset();
  };

  const resetForm = () => {
    reset();
  };

  return (
    <div className="bg-[#28272A] text-white flex flex-col gap-7 justify-center items-center ">
      <button
        onClick={resetForm}
        className="bg-red-600 p-2 rounded cursor-pointer"
      >
        Reset form
      </button>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="border-white w-80 flex flex-col rounded border p-8 gap-3"
      >
        <h1>Add product</h1>
        <input
          {...register("name", {
            required: "Name is required",
          })}
          className="outline-0 rounded p-2 bg-[#3f3d42]"
          type="text"
          placeholder="Enter name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter valid email",
            },
          })}
          className="outline-0 rounded p-2 bg-[#3f3d42]"
          type="email"
          placeholder="Enter email"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        <input
          {...register("price", {
            required: "Password required",
            minLength: {
              value: 3,
              message: "Minimum 3 characters are required",
            },
            maxLength: {
              value: 5,
              message: "Maximum 5 character are allowed",
            },
          })}
          className="outline-0 rounded p-2 bg-[#3f3d42]"
          type="number"
          placeholder="Enter price"
        />
        {errors.price && (
          <p className="text-red-500 text-sm">{errors.price.message}</p>
        )}
        <input
          {...register("category", {
            required: "Category required",
          })}
          className="outline-0 rounded p-2 bg-[#3f3d42]"
          type="text"
          placeholder="Enter category"
        />
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category.message}</p>
        )}
        <button className="cursor-pointer p-2 bg-blue-600 rounded">
          Add product
        </button>
      </form>
    </div>
  );
};

export default Addcard;
