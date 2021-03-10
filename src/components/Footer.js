import React from 'react';
import { Link } from 'react-router-dom';
import { FaCookieBite } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center flex flex-col md:flex-row justify-center items-center h-20 bg-pink-100 font-staatliches text-lg text-gray-600">
      <div className="flex">
        <h3>&copy;{new Date().getFullYear()}</h3>
        <Link to="/" className="flex px-3 items-center">
          <FaCookieBite className=" text-pink-300 mr-1" />
          <h2 className="">Malinowe Ciastko</h2>
        </Link>
      </div>
      <h3>Wszystkie prawa zastrzeżone</h3>
    </footer>
  );
};

export default Footer;
