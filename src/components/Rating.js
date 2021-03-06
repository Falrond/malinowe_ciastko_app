import React from 'react';
import { BsHeartFill, BsHeartHalf, BsHeart } from 'react-icons/bs';

const Rating = ({ rating }) => {
  const hearts = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index} className="inline-block px-0.5 text-xl text-pink-300">
        {rating >= index + 1 ? (
          <BsHeartFill />
        ) : rating >= number ? (
          <BsHeartHalf />
        ) : (
          <BsHeart />
        )}
      </span>
    );
  });
  return <div className="text-center flex justify-center mt-5">{hearts}</div>;
};

export default Rating;
