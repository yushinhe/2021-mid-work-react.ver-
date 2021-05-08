import React from "react";
import Home from './page/Home'
import Error from './page/Error'
import ProductList from './page/ProductList'
import Lecture from './page/Lecture'
import ArticleList from './page/ArticleList'
import ProductDetail from './page/ProductDetail'
import About from './page/About'
import Answer from './page/Answer'
import Article from './page/Article'
import {
  Switch,
  Route,
} from "react-router-dom";

import ScrollToTop from './component/ScrollToTop'
export default function App() {
  return (
    <div>
      <ScrollToTop>
        <Switch>
          <Route exact path="/product-list" component={ProductList} />
          <Route exact path="/lecture" component={Lecture} />
          <Route exact path="/about" component={About} />
          <Route exact path="/answer" component={Answer} />
          <Route exact path="/articleList" component={ArticleList} />
          <Route exact path="/product-detail/:id" component={ProductDetail} />
          <Route exact path="/article/:id" component={Article} />
          <Route exact path="/" component={Home} />
          <Route component={Error} />
        </Switch>
      </ScrollToTop>
    </div>
  );
}