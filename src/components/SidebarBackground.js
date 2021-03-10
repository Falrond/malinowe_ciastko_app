import React from 'react';
import { useRecipesContext } from '../context/recipes_context';

const SidebarBackground = () => {
  const { isSidebarOpen, closeSidebar } = useRecipesContext();
  return (
    isSidebarOpen && (
      <div
        className="fixed w-screen h-screen bg-gray-800 opacity-60 top-0 lef-0 transition delay-75 duration-300 ease-in-out z-10"
        onClick={closeSidebar}
      ></div>
    )
  );
};

export default SidebarBackground;
