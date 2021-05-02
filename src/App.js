import React from "react";
import Home from './page/Home'
import Error from './page/Error'
import ProductList from './page/ProductList'
import {
  Switch,
  Route,
} from "react-router-dom";
export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/about" component={() => 'About'} />
        <Route exact path="/product-list" component={ProductList} />
        <Route exact path="/" component={Home} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}