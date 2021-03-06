import React from 'react';
import {
  LOAD_RECIPES,
  UPDATE_FILTERS,
  FILTER_RECIPES,
  CLEAR_FILTERS,
} from '../actions';

const filter_reducer = (state, action) => {
  if (action.type === LOAD_RECIPES) {
    let max_time = action.payload.map(item => {
      return Number(item.time);
    });
    max_time = Math.max(...max_time);
    const reversRecipes = action.payload.reverse();
    return {
      ...state,
      all_recipes: [...reversRecipes],
      filtered_recipes: [...reversRecipes],
      filters: { ...state.filters, max_time, time: max_time },
    };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_RECIPES) {
    const { all_recipes } = state;
    const { text, category, time } = state.filters;
    let tempRecipes = [...all_recipes];
    // text input
    if (text) {
      tempRecipes = tempRecipes.filter(item => {
        return item.name.toLowerCase().includes(text);
      });
    }
    // category
    if (category !== 'Wszystkie') {
      tempRecipes = tempRecipes.filter(item => {
        return item.category === category;
      });
    }
    tempRecipes = tempRecipes.filter(item => {
      return item.time <= time;
    });

    return { ...state, filtered_recipes: tempRecipes };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        category: 'Wszystkie',
        time: state.filters.max_time,
      },
    };
  }
  return state;
};

export default filter_reducer;
