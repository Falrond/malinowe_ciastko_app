import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="h-fullwonavbar font-staatliches text-gray-700 flex flex-col justify-center items-center">
      <h1 className="text-8xl  ">404</h1>
      <h4 className="text-6xl  ">strona nie istnieje</h4>
      <Link
        to="/"
        className="mt-6 bg-pink-400 py-2 px-5 text-xl hover:bg-pink-500 rounded"
      >
        {' '}
        strona główna
      </Link>
    </div>
  );
};

export default ErrorPage;
