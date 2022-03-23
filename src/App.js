import WeeklyScore from './WeeklyScore';
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Daily from './Daily';
import NotFound from './NotFound';

function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route  path="/" exact >
          <WeeklyScore/>
        </Route>

        <Route path="/daily/:day" > 
          <Daily />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
