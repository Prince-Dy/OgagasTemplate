// import { testimonial1 } from "../assets/image";
import { testimonial1 } from "../assets/image";
import testimonials from "../data/testimony.json";
import React from "react";
import { getImgUrl } from "../utils/getImgUrl";

export default function Testimonials() {
  return (
    <section id="testimony" className="py-16 bg-white relative top-40 flex flex-col w-[90%] sm:w-[80%] m-auto box-border h-auto ">
      <div className="flex flex-col ">
        <h2 className="text-3xl font-bold text-secondary font-monts mb-8 text-center ">Testimonials</h2>
        <div className="grid sm:grid-cols-3 gap-6 box-border">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100  shadow p-6 text-left grid grid-cols-3 grid-row-5"
            >
              <p className="text-gray-700 italic mb-4 rounded-2xl row-span-2"><img 
              style={{
                backgroundPosition:"center",
                backgroundSize:"cover",
                width:"90px",
                height:"90px",
                borderRadius:"50px"

              }}
              src={`${getImgUrl(item.profile)}`} alt="CEO" /></p>
              <div>
                <p className="text-gray-900 font-semibold col-span-2"> {item.name}</p>
                <p>{item.rating}</p>
              </div>
              <p className="text-gray-600 col-start-1 col-end-3 w-full overflow-x-clip">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
