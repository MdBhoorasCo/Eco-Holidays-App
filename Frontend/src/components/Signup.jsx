/* import React from 'react' */

import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form"

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box bg-orange-100 dark:bg-slate-700">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog" method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 cursor-default">
                ✕
              </Link>
            <h3 className="font-bold text-lg text-orange-500 bg-transparent">
              Sign up
            </h3>
            <div className="">
              <span>Full name</span>
              <br />
              <input
                type="name"
                placeholder="Enter your full name"
                className="w-80 px-3 py-2 border rounded-md outline-none"
              /><br />
                        {errors.name && <span className="text-red-600 text-sm">This field is required</span>}
            </div>

            <div className="">
              <span>Email Address</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-80 px-3 py-2 border rounded-md outline-none"
              /><br />
                        {errors.email && <span className="text-red-600 text-sm">This field is required</span>}
            </div>

            <div className="">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-2 border rounded-md outline-none"
              /><br />
                        {errors.password && <span className="text-red-600 text-sm">This field is required</span>}
            </div>

            <div className="flex justify-around mt-4">
              <button className="bg-black rounded-md px-3 py-1 text-white hover:scale-75 duration-300 cursor-default dark:bg-orange-500">
                Login
              </button>
              <p>
                Already registered?{" "}
                <button className="text-orange-500 cursor-pointer"
                onClick={()=>
                  document.getElementById("my_modal_3").showModal()
                }>Login.</button>{""}
                <Login/>
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
