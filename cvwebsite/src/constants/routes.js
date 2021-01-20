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

export const HOME = {path: "/", name: "Home", component: Home};
export const ABILITIES = {path: "/abilities", name: "Abilities", component: Abilities};
export const EXPERIENCE = {path: "/experience", name: "Experience", component: Experience};
export const HOBBIES = {path: "/hobbies", name: "Hobbies", component: Hobbies};

export const routes = [
    HOME,
    ABILITIES,
    EXPERIENCE,
    HOBBIES,
]



export function getPageIndex(page){
    for(let i = 0; i < routes.length; i++){
        if(routes[i].path === page)
            return i
    }
    return -1;
}