import { useForm } from "react-hook-form";

const Hook = ({ setToggle, setProducts }) => {
  console.log("Hook rendering...");

  const { register, handleSubmit, reset } = useForm();

  const onSub = (data) => {
    setProducts((prev) => [...prev, data]);
  };

  return (
    <div className="w-80 flex flex-col rounded border p-8 gap-7">
      <h1 className="text-3xl font-extrabold">Create new item</h1>
      <form onSubmit={handleSubmit(onSub)} className="flex flex-col gap-5">
        <input
          {...register("name")}
          className="p-2 rounded outline-0 text-white bg-[#3f3d42]"
          type="text"
          placeholder="Enter name"
        />
        <input
          {...register("email")}
          className="p-2 rounded outline-0 text-white bg-[#3f3d42]"
          type="email"
          placeholder="Enter email"
        />
        <input
          {...register("password")}
          className="p-2 rounded outline-0 text-white bg-[#3f3d42]"
          type="password"
          placeholder="Enter password"
        />
        <button
          onClick={() => {
            reset();
            setToggle((prev) => !prev);
            onSub();
          }}
          className="p-2 rounded text-white bg-blue-600"
        >
          Create new
        </button>
      </form>
    </div>
  );
};

export default Hook;
