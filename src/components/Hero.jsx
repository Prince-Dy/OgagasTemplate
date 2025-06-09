import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { hero1 } from "../assets/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// // function Hero() {
//   return (
//     <div className="relative top-16 mt-0.5 w-full">
//       <Swiper
//         modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
//         slidesPerView={1}
//         spaceBetween={10}
//         navigation
//         pagination={{ clickable: true }}
//         scrollbar={{ draggable: true }}
//         loop={true}
//         autoplay={{ delay: 1000, disableOnInteraction: false }}
//         effect="fade"
//         fadeEffect={{ crossFade: true }}
//         speed={1000}
//         grabCursor={true}
//         className="text-white"
//       >
//         <SwiperSlide>
//           <div className="relative">
//             <img src={hero1} style={{ backgroundPosition: "center", width: "100%" }} alt="" />
//             <button
//               className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 px-6 py-3 text-lg font-semibold text-white bg-amber-500 rounded shadow hover:bg-amber-600 transition"
//             >
//               Buy a course
//             </button>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={hero1} style={{ backgroundPosition: "center", width: "100%" }} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={hero1} style={{ backgroundPosition: "center", width: "100%" }} alt="" />
//         </SwiperSlide>
//         {/* Add more SwiperSlide components as needed */}
//       </Swiper>
//     </div>
//   )
// }

// Alternative: Use react-slick for a carousel/slider
// Install with: npm install react-slick slick-carousel

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: false, // use slide instead of fade
    pauseOnHover: true,
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "-30px", // move indicator below the image
          zIndex: 20,
          width: "100%",
          display: "flex",
          fontSize: "0.8rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul className="flex gap-2 ">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <button
        style={{
          width: "20px",
          height: "20px",
          background: "transparent",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
        }}
      >
        <span
          style={{
            display: "block",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "white",
            margin: "auto",
            boxShadow: "0 0 0 2px transparent",
          }}
        />
      </button>
    ),
  };

  // Custom control buttons (commented out for now)
  // const sliderRef = React.useRef(null);

  // const handlePrev = () => {
  //   sliderRef.current && sliderRef.current.slickPrev();
  // };

  // const handleNext = () => {
  //   sliderRef.current && sliderRef.current.slickNext();
  // };

  // Custom control buttons
  const sliderRef = React.useRef(null);

  const handlePrev = () => {
    sliderRef.current && sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current && sliderRef.current.slickNext();
  };

  return (
    <div id="home" className="relative top-8 mt-0.5 mb-3 h-[400px] w-full">
      {/* Custom arrows */}
      {/* <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 z-20 transform -translate-y-1/2 bg-secondary sm:bg-transparent border-1 border-primary text-white px-3 py-2 rounded-full shadow hover:bg-secondary transition"
        style={{ left: 16 }}
        aria-label="Previous Slide"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 z-20 transform -translate-y-1/2 bg-secondary sm:bg-transparent border-1 border-primary text-white px-3 py-2 rounded-full shadow hover:bg-secondary transition"
        style={{ right: 16 }}
        aria-label="Next Slide"
      >
        &#8594;
      </button> */}
      <Slider ref={sliderRef} {...settings}>
        <div className="relative h-[500px] ">
          <img
            src={hero1}
            style={{
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt=""
          />
          <button className="course-btn absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10 px-6 py-3 text-lg font-semibold text-white  rounded shadow hover:bg-transparent hover:border-secondary bg-secondary transition border-1 border-primary"
          
          >
            Buy a course
          </button>
        </div>
        <div className="relative h-[500px] ">
          <img
            src={hero1}
            style={{
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt=""
          />
        </div>
        <div className="relative h-[500px] ">
          <img
            src={hero1}
            style={{
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
