import WeeklyScore from './WeeklyScore';
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Daily from './Daily';
import NotFound from './NotFound';

function App() {
  
  return (
    <div className="App">
    //Switch : 위에서부터 아래로 전체 페이지 route를 확인하는데 위에서 일치하는 것이 없으면 NotFound페이지로 연결됨
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
