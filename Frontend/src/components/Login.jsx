/* import React from 'react'; */
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div>
      {/* login user and password  Code here */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-orange-100 dark:bg-slate-700">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 cursor-default">
              ✕
            </Link>
          </form>
          <h3 className="font-bold text-lg text-orange-500 bg-transparent">
            Login
          </h3>

          <div className="">
                      <span>Email Address</span><br />
                      <input type="em" placeholder="Enter your email address"
                        className="w-80 px-3 py-2 border rounded-md outline-none"
                        {...register("email", { required: true })}
                        /> <br />
                        {errors.email && <span className="text-red-600 text-sm">This field is required</span>}
                        </div>

                        <div className="">
                      <span>Password</span><br /><input type="password" placeholder="Enter your password"
                        className="w-80 px-3 py-2 border rounded-md outline-none"
                        {...register("password", { required: true })}
                        /> <br />
                        {errors.password && <span className="text-red-600 text-sm">This field is required</span>}
                        </div>



          <div className="flex justify-around mt-4">
            <button className="bg-black rounded-md px-3 py-1 text-white hover:scale-75 duration-300 cursor-default dark:bg-orange-500"
            >Login</button>
            <p>not Registered? <Link to="/Signup"
            className="text-orange-500 cursor-pointer">Sing Up</Link></p>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
