/* eslint-disable react/prop-types */


function Card({ item }) {
  return (
    <>
    <div>
    <div className="mt-6 rounded-3xl p-2 bg-orange-100 w-70 shadow-xl hover:scale-90 duration-300 dark:bg-slate-700 dark:text-white mx-5">
  <figure>
    <img src={item.Pic} className="rounded-3xl w-full" alt="City" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-orange-500">
      {item.City}
      <div className="mx-10 text-black text-xl dark:text-white">NEW</div>
    </h2>
    <p>{item.Details}</p>
    <div className="card-actions justify-between">
      <div className=" text-orange-500 bg-transparent font-bold text-xl">PKR {item.Price}</div>
      <div className="bg-black text-white rounded-md hover:scale-75 duration-300 p-2 cursor-default dark:bg-orange-500 dark:text-white">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Card
