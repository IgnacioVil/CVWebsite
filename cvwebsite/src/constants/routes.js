import Home from "../components/Home";
import Hobbies from "../components/Hobbies";
import Experience from "../components/Experience";
import Abilities from "../components/Abilities";

export class Route {

    constructor(path, name, component) {
        this.path = path;
        this.name = name;
        this.component = component;
    }
}

export const routes = [
    {path: "/", name: "Home", component: Home},
    {path: "/abilities", name: "Abilities", component: Abilities},
    {path: "/experience", name: "Experience", component: Experience},
    {path: "/hobbies", name: "Hobbies", component: Hobbies},
    {path: "/bitach", name: "BIATCH", component: Hobbies},
]

export function getPageIndex(page){
    for(let i = 0; i < routes.length; i++){
        if(routes[i].path === page)
            return i
    }
    return -1;
}