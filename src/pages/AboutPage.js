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
      <div className="font-roboto text-gray-700 text-xl p-6 flex flex-col justify-center lg:w-2/4  items-center">
        <h1 className="text-4xl font-medium mb-1">Witaj!</h1>
        <div className="bg-pink-400 h-0.5 w-1/3 mx-auto mb-6 mt-1 md:w-1/5 lg:w-2/5"></div>
        <p className=" font-medium tracking-wider">
          Mam na imię Ola i po prostu lubię słodkie wypieki. MalinoweCiastko to
          mój sposób na wspólne pieczenie, dzielenie się pomysłami i tworzenie
          nowych przepisów. Jeśli tak jak ja lubisz spędzać czas w kuchni i
          obdarowywać słodkościami innych to na pewno znajdziesz tu coś dla
          siebie.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
