import React from 'react';
import { useRecipesContext } from '../context/recipes_context';
import Error from './Error';
import Loading from './Loading';
import Recipe from './Recipe';

const RecentRecipes = () => {
  const { loading, error, recent_recipes } = useRecipesContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div className="max-w-screen-xl mx-auto my-6">
      <div className="text-center mb-4">
        <h1 className="text-3xl uppercase font-robocondensed font-bold text-gray-600 tracking-wider">
          ostatnie przepisy
        </h1>
        <div className="bg-pink-300 h-0.5 w-1/2 mx-auto mt-1 lg:w-1/4"></div>
      </div>
      <section className="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 m-auto">
        {recent_recipes.map(recipe => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </section>
    </div>
  );
};

export default RecentRecipes;
