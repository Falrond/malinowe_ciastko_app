import React from 'react';
import { useFilterContext } from '../context/filter_context';
import { useRecipesContext } from '../context/recipes_context';
import Recipe from './Recipe';
import Error from './Error';
import Loading from './Loading';

const RecipeList = () => {
  const { loading, error } = useRecipesContext();
  const { filtered_recipes: recipes } = useFilterContext();
  if (loading) {
    return (
      <div className="min-h-almostFull flex flex-col justify-center">
        <Loading />
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-almostFull flex flex-col justify-center">
        <Error />
      </div>
    );
  }
  if (loading === false && recipes.length < 1) {
    return (
      <div className="h-80 md:min-h-almostFull flex flex-col justify-center">
        <h1 className="p-4 text-center font-roboto text-3xl uppercase text-gray-700 font-medium">
          Żaden przepis nie spełnia kryteriów wyszukiwania
        </h1>
      </div>
    );
  }
  return (
    <div className="max-w-screen-xl mt-8 mx-auto flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 m-auto">
      {recipes.map(recipe => {
        return <Recipe key={recipe.id} {...recipe} />;
      })}
    </div>
  );
};

export default RecipeList;
