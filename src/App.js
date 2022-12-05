import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Drinks from './pages/Drinks';
import drinksProgress from './pages/Drinks-progress';
import drinksRecipes from './pages/Drinks-recipes';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Meals from './pages/Meals';
import mealsProgress from './pages/Meals-progress';
import mealsRecipes from './pages/Meals-recipes';
import Profile from './pages/Profile';
import Recipes from './pages/Recipes';

function App() {
  return (
    // <div className="meals">
    //   <span className="logo">TRYBE</span>
    //   <object
    //     className="rocksGlass"
    //     type="image/svg+xml"
    //     data={ rockGlass }
    //   >
    //     Glass
    //   </object>
    // </div>
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/meals" component={ Meals } />
      <Route path="/drinks" component={ Drinks } />
      <Route path="/meals/:id-da-receita" component={ mealsRecipes } />
      <Route path="/drinks/:id-da-receita" component={ drinksRecipes } />
      <Route path="/meals/:id-da-receita/in-progress" component={ mealsProgress } />
      <Route path="/drinks/:id-da-receita/in-progress" component={ drinksProgress } />
      <Route path="/profile" component={ Profile } />
      <Route path="/done-recipes" component={ Recipes } />
      <Route path="/favorite-recipes" component={ Favorites } />
    </Switch>
  );
}

export default App;
