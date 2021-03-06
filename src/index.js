import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RecipesProvider } from './context/recipes_context';
import { FilterProvider } from './context/filter_context';

ReactDOM.render(
  <RecipesProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </RecipesProvider>,
  document.getElementById('root')
);
