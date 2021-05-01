import React from 'react';
import Home from './page/Home';
import { Route, Switch} from 'react-router-dom';


function App() {
  return (
    <>
      <Switch>
        {/* <Route component={() => '123'} /> */}
        <Route  path="/" component ={Home}/>
      </Switch>
    </>
  );
}

export default App;
