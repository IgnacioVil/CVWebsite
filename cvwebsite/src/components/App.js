import React from 'react';
import Navbar from './Navbar';
import "./style/App.css";

import {Switch, Route, useLocation, useHistory} from "react-router-dom";

import * as routes from "../constants/routes";
import {AnimatePresence} from "framer-motion";


let prevLocation = null;

const App = () => {

    const location = useLocation();
    if(prevLocation === null){
        prevLocation = location;
    }
    const history = useHistory();

    let lockScroll = false;

    if(location !== prevLocation) {
        lockScroll = true;
        prevLocation = location;
    }

    function onAnimationEnd(){
        lockScroll = false;
        console.log("ENDOIND!");
    }

    function handleScroll(event) {
        if(!lockScroll) {
            let index = routes.getPageIndex(location.pathname);
            if (event.deltaY > 0) {
                if (index < routes.routes.length - 1)
                    history.push(routes.routes[index + 1].path);
            } else {
                if (index > 0)
                    history.push(routes.routes[index - 1].path);
            }
        }
    }


    let defineRoutes = [];
    for(let i = 0; i < routes.routes.length; i++){
        defineRoutes.push(<Route path={routes.routes[i].path} exact component={routes.routes[i].component} />)
    }

    return <div className="mainContainer" onWheel={handleScroll}>
        <Navbar />
            <div className="contentContainer">
                <AnimatePresence onExitComplete={onAnimationEnd}>
                    <Switch location={location} key={location.pathname}>
                        {defineRoutes}
                    </Switch>
                </AnimatePresence>
            </div>
        </div>
};

export default App;