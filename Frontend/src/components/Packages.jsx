/* import React from 'react' */
import list from "../../public/list.json"
import Card from "./Card"
import {Link} from "react-router-dom"

const Packages = () => {
  return (
    <>
    <div className="max-w-screen-xl container mx-auto md:px-20 px-4 p-28">
      <div className="items-center justify-center text-center">
        <h1 className=" text-xl md:text-2xl">We are delighted to have you here on our <span className="text-orange-500"> Tour Packages </span> page.</h1>
        <p className="mt-10 text-justify"> ECO Holidays is offering you a huge verity of tours on national and international level in, In that tour the visitors
            can explore the different heritage, cultural, traditional, educational, residential and historical site or place as mentioned below.
        </p>

        <Link to={"/"}>
        <button className="bg-slate-800 hover:scale-75 duration-300 rounded-md w-20 mt-10 text-white dark:bg-orange-500 cursor-default">Back</button>
        </Link>


      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
      {list.map((item) => (
        <Card item={item} key={item.id}/>
      ))}
      </div>
    </div>
    </>
  )
}

export default Packages