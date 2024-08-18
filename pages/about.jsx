import React from "react";

const About = () => {
  return (
    <section className="p-6 main">
      <h1 className="font-bold text-3xl text-center md:mt-10"> About Us</h1>
      <div className="md:flex">
        <div className="w-full md:min-w-2/3  mt-4  md:mt-20 leading-8 tracking-wider ">
          <strong>Welcome to My Store</strong>, established in the year 2XXX,
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quia,
          error iste, Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Omnis, veritatis, recusandae, porro iure facere neque voluptatum
          commodi fuga tempore explicabo harum. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Tempore itaque eveniet velit quos
          commodi, beatae odit laborum eos perferendis, aspernatur vel.
          similique minus non dolores excepturi repellendus omnis animi
          distinctio. <strong>My Store</strong>, where every detail is crafted
          to perfection.
        </div>
        <div className="mt-4">
          <img
            src="https://siyaram-images.s3.ap-south-1.amazonaws.com/images/banner/siyarams.webp"
            
            alt="myimage"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
