import React from "react";
import Home from './page/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/about" component={() => 'About'}/>
      
          <Route exact path="/topics" component={() => 'Topics'}/>
        
          <Route exact path="/" component={Home}/>       
          <Route component={() => 'Error'}/>
        </Switch>
      </div>
    </Router>
  );
}
