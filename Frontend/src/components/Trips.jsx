/* import React from 'react' */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Card from "./Card";

function Trips () {

  const filterData = list.filter((data) => data.Country === "Pakistan");
  
  {/* Slider Setting Script DAISY UI SLIDERS RESPONSIVE from Example Starts here */}
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
{/* Slider Setting Script DAISY UI SLIDERS RESPONSIVE from Example are end here */}
    return (
    <>
    <div className="max-w-screen-2xl p-6 container mx-auto md:px-20 px-4 py-10">
      <div>
      <h1 className="text-orange-500 text-2xl"> Available Tour of Pakistan </h1>
      <div className="py-6">
      <p> currently available Trip & Tour of Pakistan, mostly required information are clearly mention for more information and query please do not hesitate and feel free to contact us.</p>
      </div></div>
      
       {/* Tour SLIDER for the Cards Starts Here */}
      <div className="gap-10">
      <Slider {...settings}>
      {filterData.map((item) => (
        <Card item={item} key={item.id}/>
      ))}
      </Slider>
    </div>
    <div>
    </div>
    </div>
    </>
  )
}

export default Trips