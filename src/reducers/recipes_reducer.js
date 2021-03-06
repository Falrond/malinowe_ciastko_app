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

const recipesReducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === GET_RECIPES_BEGIN) {
    return { ...state, loading: true };
  }
  if (action.type === GET_RECIPES_SUCCESS) {
    const recent_recipes = action.payload
      .slice(action.payload.length - 3)
      .reverse();
    return {
      ...state,
      loading: false,
      recipes: action.payload,
      recent_recipes,
    };
  }
  if (action.type === GET_RECIPES_ERROR) {
    return { ...state, loading: false, error: true };
  }
  if (action.type === GET_SINGLE_RECIPE_BEGIN) {
    return {
      ...state,
      single_recipe_loading: true,
      single_recipe_error: false,
    };
  }
  if (action.type === GET_SINGLE_RECIPE_SUCCESS) {
    return {
      ...state,
      single_recipe_loading: false,
      single_recipe: action.payload,
    };
  }
  if (action.type === GET_SINGLE_RECIPE_ERROR) {
    return {
      ...state,
      single_recipe_loading: false,
      single_recipe_error: true,
    };
  }
};

export default recipesReducer;
