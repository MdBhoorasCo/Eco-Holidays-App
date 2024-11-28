/* import React from 'react' */
import banner from "/banner.png"
const Banner = () => {
  return (
    <>
      <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row cursor-default'>
        <div className="w-full order-2 md:order-1 md:w-1/2 text-center mt-12 md:mt-32 cursor-default">
          <div className="space-y-12 items-Justify">
            <h1 className="text-2xl font-bold cursor-default">
              Welcome to !{" "}
              <span className="text sxl font-bold text-orange-500 hover:text-orange-200 duration-300 cursor-default">
                ECO
              </span>
              Holidays
            </h1>
            <p className="text-justify cursor-default">
              We are the best reliable and prize compatible tour and travel
              planner or organizer in Pakistan, ECO Holidays is name of
              reliability sincerity. which will leads your mind to re visit
              Pakistan again and again.
            </p>
            <label className="input input-bordered border-orange-200 flex items-center gap-2 cursor-default">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="bg-black dark:bg-orange-500 mt-6 hover:scale-75 duration-300 rounded-md p-2 text-white cursor-default"> explore Tour Plans.</button>
        </div>
        <div className="order-1 w-full md:w-1/2 py-10 ">
        <img src={banner} className=" w-92 h-92" alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
