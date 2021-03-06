import React from 'react';
import { Filters, RecipeList } from '../components';

const RecipesPage = () => {
  return (
    <main className="min-h-almostFull">
      <Filters />
      <RecipeList />
    </main>
  );
};

export default RecipesPage;
