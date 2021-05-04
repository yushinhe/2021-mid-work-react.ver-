import React from "react";
import Home from './page/Home'
import Error from './page/Error'
import ProductList from './page/ProductList'
import Lecture from './page/Lecture'
import About from './page/About'
import {
  Switch,
  Route,
} from "react-router-dom";
export default function App() {
  return (
    <div>
      <Switch>      
        <Route exact path="/product-list" component={ProductList} />
        <Route exact path="/lecture" component={ Lecture} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}