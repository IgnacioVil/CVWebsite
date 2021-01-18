import React , {useState} from 'react';
import Navbar from './Navbar';
import "./style/App.css";

import {Switch, Route, useLocation, useHistory} from "react-router-dom";

import * as routes from "../constants/routes";
import {AnimatePresence, motion} from "framer-motion";
import {getPageIndex} from "../constants/routes";
import ContentPage from "./ContentPage";
let prevLocation = null;

const App = () => {

    const location = useLocation();
    if(prevLocation === null){
        prevLocation = location;
    }
    const history = useHistory();

    const [isScrollLocked, setScrollLock] = useState(false);
    const [isDown, setIsDown] = useState(true);

    function scrollLock(delay){
        setScrollLock(true);
        setTimeout(() => {setScrollLock(false)}, delay*1000);
    }

    if(location !== prevLocation) {
        if((getPageIndex(prevLocation.pathname) < getPageIndex(location.pathname)) !== isDown) {
            setIsDown(!isDown);
        }
        scrollLock(0.25);
        prevLocation = location;
    }

    function handleScroll(event) {
        if(!isScrollLocked) {
            let index = routes.getPageIndex(location.pathname);
            if (event.deltaY > 0) {
                if (index < routes.routes.length - 1) {
                    history.push(routes.routes[index + 1].path);
                }
            } else {
                if (index > 0) {
                    history.push(routes.routes[index - 1].path);
                }
            }

        }
    }

    return<div className="mainContainer light-theme" onWheel={handleScroll}>
        {/*<motion.div className={"curtain"} animate={{height: "0"}} transition={{duration:1.25, ease:[0.87, 0, 0.13, 1]}}>*/}
        {/*    <motion.h1 className={"curtainTitle"} animate={{opacity: 0}} transition={{duration:0.75, ease:[0.5, 0.15, 0.5, 1]}}>Ignacio Villanueva</motion.h1>*/}
        {/*</motion.div>*/}
        <Navbar />
        <div className="contentContainer">
            <AnimatePresence custom={isDown}>
                <Switch location={location} key={location.pathname}>
                    { routes.routes.map((x) => (<Route key={x.path} path={x.path} exact render={() => (
                        <ContentPage key={isDown} isDown={isDown} itemName={x.name}>
                            {x.component()}
                        </ContentPage>
                    )} /> ))}
                </Switch>
            </AnimatePresence>
        </div>
        </div>
};

export default App;