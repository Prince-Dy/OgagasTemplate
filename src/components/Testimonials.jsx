// import { testimonial1 } from "../assets/image";
import testimonials from "../data/testimony.json";
import React from "react";

export default function Testimonials() {
  return (
    <section className="py-16 bg-white relative top-40 flex flex-col w-[90%] sm:w-[80%] m-auto box-border h-auto ">
      <div className="flex flex-col ">
        <h2 className="text-3xl font-bold text-secondary mb-8 text-center ">Clients</h2>
        <div className="grid sm:grid-cols-3 gap-6 ">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow p-6 text-left"
            >
              {/* <p className="text-gray-700 italic mb-4"><img src={testimonial1} alt="" /></p> */}
              <p>{item.rating}</p>
              <p className="text-gray-900 font-semibold">– {item.name}</p>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
