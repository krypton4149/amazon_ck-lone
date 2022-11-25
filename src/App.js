// import logo from './logo.svg';
import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { CheckOutlined } from '@mui/icons-material';
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51LMEydSHeOiY2Qvh51kJT7Ck2sY7Y5N6YAUeVd42kdPvHrcnNGTiojLhZnb9hu8M2o2m77ZJafeV1qJ1QNkOWfnk00BZRZXEo4'
);




function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }  
    })

  },[])
  return (
    //BEM
    <Router>
    <div className="App">
     
    
      <Switch>
      <Route path="/orders">
      <Header/>
      <orders />
        </Route>
      <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
        <Header/>
          <Checkout />
        </Route>
        <Route path="/Payment">
        <Header/>
        <Elements stripe={promise}>
        <Payment/>
        </Elements>
        </Route>
        <Route path="/">
        <Header/>
    
    <Home/>
    </Route>
    </Switch>
</div>

    </Router>

  );
}

export default App;
