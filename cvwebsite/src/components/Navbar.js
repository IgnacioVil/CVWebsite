import {NavLink, useLocation} from 'react-router-dom'
import { motion } from "framer-motion";
import "./style/Navbar.scss"
import * as routes from "../constants/routes";

function usePageViews() {
    let location = useLocation();
    return routes.getPageIndex(location.pathname);
}

function Navbar() {
    let defineNavitems = [];
    for(let i = 0; i < routes.routes.length; i++){
        defineNavitems.push(<li className={"navitem"}><NavLink to={routes.routes[i].path} activeClassName="isActive" exact key="{routes.routes[i].path}"> {routes.routes[i].name} </NavLink></li>)
    }

    return <div className={"navbar"}>
        <ul className="navlist">

            {defineNavitems}
            <motion.li className={"slider"}
                       initial={{scale: 0.5}}
                       animate={{y: (usePageViews() * 100) + "%", scale: 1}}/>

        </ul>
    </div>
}

export default Navbar;