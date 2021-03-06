import React from 'react';
import { FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Recipe = ({ id, name, url: image, Date: date, time }) => {
  return (
    <div className="w-72 shadow-md hover:shadow-lg transform transition hover:scale-105 rounded-md overflow-hidden bg-white cursor-pointer my-4 relative mx-auto">
      <Link to={`/recipes/${id}`}>
        <img src={image} alt={name} className="w-full object-cover h-72" />
        <div className="m-4 font-roboto ">
          <h4 className="font-medium tracking-wider text-lg text-gray-600">
            {name.length < 23 ? name : `${name.slice(0, 23)}...`}
          </h4>
          <h6 className="text-sm pt-2 text-gray-400">Dodano: {date}</h6>
        </div>
        <div className="font-roboto text-white bg-gray-400 tracking-widest text-xs  absolute top-2 px-2 py-2 rounded-2xl left-2 flex justify-center items-center">
          <FiClock className="mr-1" />
          <p>{time} min</p>
        </div>
      </Link>
    </div>
  );
};

export default Recipe;
