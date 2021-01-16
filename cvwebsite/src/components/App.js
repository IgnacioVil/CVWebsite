import React from 'react';
import Navbar from './Navbar';
import "./style/App.css";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home";
import Abilities from "./Abilities";
import Experience from "./Experience";

const App = () => (

    <Router>
        <div className="mainContainer">
        <Navbar />
            <div className="contentContainer">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/abilities" component={Abilities} />
                    <Route path="/experience" component={Experience} />
                </Switch>
            </div>
        </div>
    </Router>

);

export default App;