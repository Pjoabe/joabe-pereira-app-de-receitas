import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import '../styles/header.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  firstTwelveFoods, allFoodCategories, firstTwelveFoodCategories,
} from '../services/Apis';

function Meals() {
  const [twelveFoods, setTwelveFoods] = useState([]);
  const [categoryName, setCategoryName] = useState([]);
  const [lastCategory, setLastCategory] = useState('');
  const { setTitle } = useContext(RecipesContext);
  const TWELVE = 12;
  const FIVE = 5;
  const setFoods = async () => {
    setTwelveFoods(await firstTwelveFoods());
    setCategoryName(await allFoodCategories());
  };
  useEffect(() => {
    setTitle('Meals');
  }, []);

  useEffect(() => {
    setFoods();
  }, []);
  const foodButton = async ({ target: { name } }) => {
    setLastCategory(name);
    if (name === 'all'
    || name === lastCategory) return setTwelveFoods(await firstTwelveFoods());
    setTwelveFoods(await firstTwelveFoodCategories(name));
  };
  return (
    <>
      <div className="container_meals">
        <Header />
        <div>
          {categoryName.slice(0, FIVE).map(({ strCategory }) => (
            <button
              data-testid={ `${strCategory}-category-filter` }
              type="button"
              name={ strCategory }
              key={ strCategory }
              onClick={ foodButton }
            >
              {strCategory}
            </button>
          ))}
          <button
            data-testid="All-category-filter"
            onClick={ async ({ target: { name } }) => {
              if (name === 'all') return setTwelveFoods(await firstTwelveFoods());
              setTwelveFoods(await firstTwelveFoodCategories(name));
            } }
            type="button"
            name="all"
          >
            All
          </button>
        </div>
        {twelveFoods.slice(0, TWELVE).map(({ strMeal, strMealThumb, idMeal }, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ idMeal }>
            <img
              src={ strMealThumb }
              alt={ strMeal }
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>{strMeal}</p>
          </div>
        ))}
      </div>

      {twelveFoods.slice(0, TWELVE).map(({ strMeal, strMealThumb, idMeal }, index) => (
        <Link to={ `/meals/${idMeal}` } key={ idMeal }>
          <div data-testid={ `${index}-recipe-card` }>
            <img
              src={ strMealThumb }
              alt={ strMeal }
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>{strMeal}</p>
          </div>
        </Link>
      ))}
    </div>

      <Footer data-testid="footer" />
    </>
  );
}

export default Meals;
