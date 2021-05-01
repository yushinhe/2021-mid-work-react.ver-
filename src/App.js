import React from 'react';
import Home from './page/Home';
import { Route, Switch} from 'react-router-dom';


function App() {
  return (
    <>
      <Switch>
        <Route exact  path="/123" component={() => '456'} />
        <Route  component={() => '123'} />
        <Route exact path="/" component ={Home}/>
      </Switch>
    </>
  );
}

export default App;
