// import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { hero1 } from "../assets/image";
import Footer from "../components/footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import Testimonials from "../components/Testimonials";


function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div
        id="intro"
        className="container mx-auto px-4 top-40 relative w-[90%] sm:w-[80%]"
      >
        <h1 className="text-3xl font-bold text-center my-8">
          Welcome to Our Website
        </h1>
        <p className="text-center text-gray-700">
          This is a simple homepage layout using React and Tailwind CSS. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quisquam accusamus
          ex quos amet quas eligendi quis tenetur aperiam velit ab doloremque
          enim natus nisi nihil quaerat sapiente quasi, illum ipsa saepe
          suscipit voluptatum perferendis repudiandae odio? Beatae, vero non
          doloremque sunt facilis eius et delectus ut facere. Maxime cumque
          doloribus quis aliquid mollitia totam suscipit. Tempora debitis quos
          quod? Molestias rem, minus saepe quis cum, atque, dolorum aperiam eos
          illo enim nemo sint corporis accusantium ducimus sed nobis quidem
          consequuntur eveniet exercitationem necessitatibus ipsum. Animi
          voluptas aut consequatur quisquam. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Ut praesentium adipisci alias ducimus
          eveniet, enim qui laudantium cumque deserunt ipsum libero. Quod enim,
          eveniet necessitatibus praesentium laudantium eos delectus, deserunt
          provident reiciendis tempore ab nulla fugiat cumque tenetur quia!
          Fugiat saepe ullam aspernatur consectetur, illum hic officia omnis
          alias quo magni explicabo similique nesciunt ratione quae id amet
          dolorum placeat autem deserunt numquam iste modi voluptates, ipsa
          sunt! Repellendus nesciunt dolores officia deserunt, consequuntur
          eaque alias ut veniam culpa, iste asperiores voluptatem aspernatur
          minus eius sequi! Deserunt, cum aperiam qui a optio culpa quasi alias
          suscipit debitis esse veritatis fuga!
        </p>
      </div>
      <div className="w-[90%] sm:w-[80%] flex justify-center m-auto top-40 relative my-8">
        <video width="100%" height="360" controls>
          <source src="./assets/NodeCourse.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div id="about" className="about relative top-40 w-[90%] sm:w-[80%] m-auto box-border h-auto py-3 flex flex-col">
        <div className="title flex justify-center my-3">
          <h1 className="font-monts font-bold uppercase mb-4">About me</h1>
        </div>
        <div className="flex sm:flex-row flex-col justify-between h-[400px] relative space-x-5">
          <div className="text sm:w-1/2 w-full flex flex-col space-y-2 items-start">
            <h3>AutoCad specialist | Civil Engineer | Entepreneur </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              quas quia quod eos sint asperiores quibusdam dolore architecto
              molestias commodi quos, nostrum beatae earum rerum exercitationem
              in. Dicta, quod omnis!
            </p>
            <hr style={{
              width: "100%",
              height: "2px",
              backgroundColor: "navy",
              marginTop: "10px",
            }}/>
            <div className="flex justify-between space-x-20">
              <h3>0812344</h3>
              <h3>CEO@gmail.com</h3>
            </div>
          </div>
          <div className="profile mr-2.5 relative w-full sm:w-1/2 h-full box-border bg-amber-500">
            <img  alt="CEO" 
            style={{
              backgroundPosition:"center",
              backgroundRepeat:"no-repeat",
              backgroundSize:"cover", 
              width:"100%",
              height:"100%",
              position:"absolute"
            }}
            src={hero1}
            />
            <ul className="h-[70px] w-full bg-secondary absolute z-10 bottom-0 flex justify-center-safe items-center space-x-10">
              <li><a href="" className="text-white text-3xl"><FaFacebook /></a></li>  
              <li><a href="" className="text-white text-3xl"><IoLogoWhatsapp /></a></li>  
              <li><a href="" className="text-white text-3xl"><AiFillInstagram /></a></li>  
            </ul>
          </div>
          </div>
        </div>

  <Testimonials />
    </>
  );
}

export default Home;
