import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/recipes_reducer';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_RECIPES_BEGIN,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_ERROR,
  GET_SINGLE_RECIPE_BEGIN,
  GET_SINGLE_RECIPE_SUCCESS,
  GET_SINGLE_RECIPE_ERROR,
} from '../actions';

const initialState = {
  isSidebarOpen: false,
  loading: false,
  error: false,
  recipes: [],
  recent_recipes: [],
  single_recipe_loading: false,
  single_recipe_error: false,
  single_recipe: {},
};

const url = 'https://malinowe-ciastko-api.netlify.app/api/recipes';

const RecipesContext = React.createContext();

export const RecipesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async url => {
    dispatch({ type: GET_RECIPES_BEGIN });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: GET_RECIPES_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_RECIPES_ERROR });
    }
  };

  const fetchSingleData = async url => {
    dispatch({ type: GET_SINGLE_RECIPE_BEGIN });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: GET_SINGLE_RECIPE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_SINGLE_RECIPE_ERROR });
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  return (
    <RecipesContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleData }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export const useRecipesContext = () => {
  return useContext(RecipesContext);
};
