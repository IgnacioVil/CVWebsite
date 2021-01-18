import {NavLink, useLocation} from 'react-router-dom'
import { motion } from "framer-motion";
import "./style/Navbar.scss"
import * as routes from "../constants/routes";

function usePageViews() {
    let location = useLocation();
    return routes.getPageIndex(location.pathname);
}

function Navbar() {
    return <div className={"navbar"}>
        <ul className="navlist">

            {routes.routes.map( x => (
                <li key={x.name} className={"navitem"}><NavLink to={x.path} activeClassName="isActive" exact> {x.name} </NavLink></li>
            ))}
            <motion.li className={"slider"}
                       exit={{scale:0}}
                       animate={{y: (usePageViews() * 100) + "%", scale: 1}}>
                <div className={"innerSlider"}/>
            </motion.li>

        </ul>
    </div>
}

export default Navbar;