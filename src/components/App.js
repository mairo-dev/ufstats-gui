import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import StatsTable from "./StatsTable";
import Chart from "./Chart";
import Navigation from  "./Navigation"

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <h3 className="m3 d-flex justify-content-center">
                    Test project demo
                </h3>
                <h5 className="m3 d-flex justify-content-center">
                    Stats table
                </h5>
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

export default App;