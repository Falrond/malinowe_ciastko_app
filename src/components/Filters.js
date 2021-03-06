import React from 'react';
import { useFilterContext } from '../context/filter_context';
import { useRecipesContext } from '../context/recipes_context';

const Filters = () => {
  const { loading } = useRecipesContext();
  const {
    filters: { text, category, min_time, time, max_time },
    updateFilters,
    clearFilters,
    all_recipes,
  } = useFilterContext();

  const getCategories = data => {
    let uniqueCategories = data.map(item => {
      return item.category;
    });
    return ['Wszystkie', ...new Set(uniqueCategories)];
  };
  const categories = getCategories(all_recipes);

  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        {/* Search input */}
        <div className="my-6 text-center">
          <input
            type="text"
            name="text"
            placeholder="wyszukaj przepis"
            className=" focus:outline-none border-2 border-pink-300 rounded-md text-xl font-roboto py-2 px-4 inline-block text-gray-600 font-medium "
            value={text}
            onChange={updateFilters}
          />
        </div>
        {/* End search input */}
        {/* Categories */}
        <div className="w-3/4 m-auto grid grid-flow-col grid-cols-2 grid-rows-2 gap-1  md:flex md:flex-row justify-around items-center md:justify-center">
          {categories.map((c, index) => {
            return (
              <button
                key={index}
                className={`py-2 bg-pink-300 w-32 font-roboto font-medium text-gray-600 capitalize my-1 m-auto md:mx-2 focus:outline-none inline-block rounded-md md:hover:bg-pink-400 ${
                  category === c ? 'bg-pink-400' : null
                }`}
                onClick={updateFilters}
                name="category"
                type="button"
              >
                {c}
              </button>
            );
          })}
        </div>
        {/* end of categories */}
        {/* time */}
        <div className=" w-4/5 mt-6 m-auto font-roboto font-medium text-center justify-around h-20 items-center text-gray-700">
          <div className="flex justify-center items-center">
            <h1 className="mx-1">Czas wykonania:</h1>
            <p className="text-lg mx-1 ">{loading ? '' : `${time} min`}</p>
          </div>

          <input
            type="range"
            name="time"
            onChange={updateFilters}
            min={min_time}
            max={max_time}
            value={time}
            className="slider mt-4 w-48"
          />
          <button
            type="button"
            onClick={clearFilters}
            className="mx-3 font-medium text-pink-400 focus:outline-none"
          >
            Wyczyść
          </button>
        </div>
        {/* end time */}
      </form>
    </div>
  );
};

export default Filters;
