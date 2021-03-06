import React from 'react';
import image from '../images/ola.jpeg';

const AboutPage = () => {
  return (
    <div className="min-h-almostFull lg:flex items-center max-w-screen-xl m-auto">
      <div className=" p-8 ">
        <img
          src={image}
          alt=""
          className="md:w-2/4 lg:w-3/4 object-cover m-auto shadow-md"
        />
      </div>
      <div className="font-staatliches text-gray-700 text-xl p-6 flex flex-col justify-center lg:w-2/4  items-center">
        <h1>About Page</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          vitae dignissimos cupiditate dolores similique, quidem numquam
          laboriosam placeat, amet labore velit mollitia facilis ullam ipsa
          nisi. Quas incidunt enim unde, vel commodi quos consectetur aliquid?
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
