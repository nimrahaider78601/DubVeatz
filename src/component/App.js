import React, { useEffect } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as Actions from "../store/actions";
import Home from "./Home";
import Login from "./Login/LoginPage";
import Register from "./Login/RegisterPage/Register";
import FavRestaurants from "./FavRestaurants/FavRestaurants";
import RestaurantDetails from "./RestaurantDetails/RestaurantDetails";
import FoodtDetails from "./FoodDetails";
import Returning from "./ReturningCheckout";
import CuponCheckout from "./CuponCheckout";

const App = (props) => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Login} />
        <Route path="/registerpage" component={Register} />
        <Route path="/favrestaurant" component={FavRestaurants} />
        <Route path="/restaurantdetail" component={RestaurantDetails} />
        <Route path="/fooddetails" component={FoodtDetails} />
        <Route path="/cart" component={Returning} />
        <Route path="/cuponcheckout" component={CuponCheckout} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
