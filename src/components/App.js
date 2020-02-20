import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import StatsTable from "./StatsTable";
import Chart from "./Chart";
import Navigation from "./Navigation";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <BrowserRouter>
          <div className="container">
            <Navigation/>
            <Switch>
              <Route path='/' component={StatsTable} exact/>
              <Route path='/stats' component={StatsTable}/>
              <Route path='/chart' component={Chart}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }


}

export default App;