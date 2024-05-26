import { useState } from "react"
import Slider from "react-slick";
import { data } from "./data"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  console.log(currentIndex)
  var settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: current => setCurrentIndex(current),
    customPaging: i => (
      <div
        className={"w-4 h-4 mt-4 rounded-full " + (currentIndex === i ? 'bg-purple-400' : 'bg-primary-white')} 
      >
      </div>
    )
  };
  return (
    <div className="max-w-[100vw] pb-8 h-full overflow-x-hidden">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.id}>
            <img className="w-full h-full" src={d.img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel