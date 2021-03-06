import React from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FaCookieBite } from 'react-icons/fa';
import { links } from '../other/constant_data';

import { useRecipesContext } from '../context/recipes_context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useRecipesContext();
  return (
    <div className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className="sidebar-header">
        <Link to="/" className="flex" onClick={closeSidebar}>
          <FaCookieBite className="mr-1 ml-6 text-pinky" />
          <h2 className="">Malinowe Ciastko</h2>
        </Link>
        <button className="mr-6 focus:outline-none" onClick={closeSidebar}>
          <MdClose />
        </button>
      </div>
      <ul className="h-60 flex flex-col justify-around items-center uppercase font-staatliches font-medium text-2xl text-gray-600">
        {links.map(link => {
          const { id, text, url } = link;
          return (
            <li key={id} className="flex-grow w-full">
              <Link to={url} onClick={closeSidebar} className="sidebar-element">
                {text}
              </Link>
            </li>
          );
        })}{' '}
        <li className="flex-grow w-full">
          <button
            className="sidebar-element  focus:outline-none"
            onClick={closeSidebar}
          >
            Zaloguj
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
