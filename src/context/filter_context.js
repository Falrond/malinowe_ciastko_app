import React, { useContext, useEffect, useReducer } from 'react';
import { useRecipesContext } from './recipes_context';
import reducer from '../reducers/filter_reducer';
import {
  LOAD_RECIPES,
  UPDATE_FILTERS,
  FILTER_RECIPES,
  CLEAR_FILTERS,
} from '../actions';

const initialState = {
  filtered_recipes: [],
  all_recipes: [],
  filters: {
    text: '',
    category: 'Wszystkie',
    min_time: 0,
    max_time: 0,
    time: 0,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { recipes } = useRecipesContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_RECIPES, payload: recipes });
  }, [recipes]);

  useEffect(() => {
    dispatch({ type: FILTER_RECIPES });
  }, [recipes, state.filters]);

  const updateFilters = e => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'category') {
      value = e.target.textContent;
    }
    if (name === 'time') {
      value = Number(value);
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };
  return (
    <FilterContext.Provider value={{ ...state, updateFilters, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
