import React from 'react';
import { Link } from 'react-router-dom';
import { links } from '../other/constant_data';
import { FaCookieBite } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useRecipesContext } from '../context/recipes_context';

const Navbar = () => {
  const { openSidebar } = useRecipesContext();
  return (
    <nav className="h-20">
      <div className="font-staatliches font-medium   uppercase flex justify-between items-center h-full text-gray-600  max-w-screen-xl mx-auto">
        <Link to="/" className="flex border-b-2 ml-6 text-3xl border-pink-300">
          <FaCookieBite className="mr-1  text-pink-300" />
          <h2 className="text-3xl tracking-wider">Malinowe Ciastko</h2>
        </Link>
        <button
          className="mr-6 focus:outline-none text-4xl md:hidden"
          onClick={openSidebar}
        >
          <GiHamburgerMenu />
        </button>
        <ul className="hidden md:flex mx-auto font-roboto">
          {links.map(link => {
            const { id, text, url } = link;
            return (
              <li
                key={id}
                className="mx-3 px-4 py-2 hover:underline border-pink-400"
              >
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          <li className="ml-8">
            <button className="hidden py-2 px-4 font-medium bg-pink-300 text-gray-600 rounded hover:bg-pink-400 ">
              Zaloguj
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
