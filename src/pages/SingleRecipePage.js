import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useRecipesContext } from '../context/recipes_context';
import { FiClock } from 'react-icons/fi';
import { Loading, Error, Rating } from '../components';

const singleRecipe_url =
  'https://malinowe-ciastko-api.netlify.app/api/singlerecipe/?id=';

const SingleRecipePage = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    single_recipe_loading: loading,
    single_recipe_error: error,
    single_recipe: recipe,
    fetchSingleData,
  } = useRecipesContext();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/');
      }, 3000);
    }
  }, [error]);

  useEffect(() => {
    fetchSingleData(`${singleRecipe_url}${id}`);
  }, [id]);

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
        <Error />;
      </div>
    );
  }
  const {
    name,
    date,
    category,
    time,
    description,
    ingredients,
    url,
    quantity,
    rating,
  } = recipe;
  console.log(rating);

  return (
    <div className="lg:flex min-h-almostFull max-w-screen-xl mx-auto mt-8">
      <img
        src={url}
        alt=""
        className=" object-cover w-96 object-center ml-6 m-auto rounded-md lg:w-1/3 shadow-lg"
      />

      <div className="flex flex-col justify-center p-8 flex-grow font-roboto font-medium text-gray-700 tracking-wider lg:w-3/5">
        <div className="text center mb-8">
          <h1 className="font-roboto text-3xl md:text-4xl w-full text-center uppercase tracking-wider font-medium text-gray-700">
            {name}
          </h1>
          <div className="bg-pink-300 h-0.5 w-80 mx-auto mt-3"></div>
          <Rating rating={rating} />
        </div>
        <div className="justify-center">
          <div className="">
            <h2 className="text-lg my-3 flex items-center">
              <FiClock className="mr-2" />
              Czas przygotowania: {time} min
            </h2>
            <h2 className="text-lg mb-2">
              Składniki:{' '}
              <span className="text-gray-500">
                ({quantity}
                {Number(quantity) === 1 || category === 'cake'
                  ? 'szt.'
                  : Number(quantity) > 4
                  ? ' porcji'
                  : ' porcje'}
                )
              </span>
            </h2>
            <ul className="">
              {ingredients?.split(',').map((item, index) => {
                if (item === 'kruszonka')
                  return (
                    <h2 key={index} className="capitalize text-lg my-2">
                      {item}:
                    </h2>
                  );
                return (
                  <li key={index} className="list-none">
                    - {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="">
            <h1 className="py-2 text-lg">Wykonanie:</h1>
            <p>{description}</p>
            <Link
              to="/recipes"
              className="bg-pink-300 hover:bg-pink-400 inline-block py-2 px-3 rounded-md mt-6"
            >
              Wróć do przepisów
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipePage;
