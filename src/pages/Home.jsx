// import React from 'react'

import Footer from "../components/footer";
import Header from "../components/Header"
import Hero from "../components/Hero";



function Home() {
  return (
    <>
      <Header />
     <Hero />
      <div id="intro" className="container mx-auto px-4 top-40 relative w-[90%] sm:w-[80%]">
        <h1 className="text-3xl font-bold text-center my-8">Welcome to Our Website</h1>
        <p className="text-center text-gray-700">
          This is a simple homepage layout using React and Tailwind CSS.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam accusamus ex quos amet quas eligendi quis tenetur aperiam velit ab doloremque enim natus nisi nihil quaerat sapiente quasi, illum ipsa saepe suscipit voluptatum perferendis repudiandae odio? Beatae, vero non doloremque sunt facilis eius et delectus ut facere. Maxime cumque doloribus quis aliquid mollitia totam suscipit. Tempora debitis quos quod? Molestias rem, minus saepe quis cum, atque, dolorum aperiam eos illo enim nemo sint corporis accusantium ducimus sed nobis quidem consequuntur eveniet exercitationem necessitatibus ipsum. Animi voluptas aut consequatur quisquam.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut praesentium adipisci alias ducimus eveniet, enim qui laudantium cumque deserunt ipsum libero. Quod enim, eveniet necessitatibus praesentium laudantium eos delectus, deserunt provident reiciendis tempore ab nulla fugiat cumque tenetur quia! Fugiat saepe ullam aspernatur consectetur, illum hic officia omnis alias quo magni explicabo similique nesciunt ratione quae id amet dolorum placeat autem deserunt numquam iste modi voluptates, ipsa sunt! Repellendus nesciunt dolores officia deserunt, consequuntur eaque alias ut veniam culpa, iste asperiores voluptatem aspernatur minus eius sequi! Deserunt, cum aperiam qui a optio culpa quasi alias suscipit debitis esse veritatis fuga!
        </p>
      </div>
      <div className="w-[90%] sm:w-[80%] flex justify-center m-auto top-40 relative my-8">
        <video width="100%" height="360" controls>
          <source src="./assets/NodeCourse.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

<div className="about relative top-40 w-[90%] sm:w-[80%] m-auto ">
<div className="title flex justify-center"><h1>About me</h1></div>
</div>

      {/* <Footer/> */}
    </>
  )
}

export default Home