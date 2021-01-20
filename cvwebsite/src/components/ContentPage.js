import {motion} from "framer-motion";
import * as routes from "../constants/routes";
import {useLocation} from "react-router-dom";

const pageVariant = {
    enter: (isDown) => {
        return {
            y: (isDown ? "":"-") + "50vh",
            opacity: 0,
            transition:{
                type: "spring",
                duration: 0.85
            }
        }},

    center: {
        y: "0",
        opacity: 1,
        transition:{
            type: "spring",
            duration: 1.25
        }
    },

    exit: (isDown) => {
        return {
            y: (isDown ? "-":"") + "50vh",
            opacity: 0,
            transition:{
                type: "spring",
                duration: 0.85
            }
        }},
}


export const ContainerSize = {
    NORMAL: {
        position: "absolute",
        height: "100%",
        width: "85%",
        marginLeft: "15%",
    },
    FULLSCREEN: {
        position: "absolute",
        height: "100%",
        width: "100%",
    }
}

export function getContentContainerSize(path){
    switch (path){
        case routes.HOME.path:
            return ContainerSize.FULLSCREEN;
        default:
            return ContainerSize.NORMAL;
    }
}

const ContentPage = (props) => {
    const location = useLocation();
    return <motion.div initial={"enter"} animate={"center"} exit={"exit"} custom={props.isDown} variants={pageVariant} style={getContentContainerSize(location.pathname)}>
        {props.children}
    </motion.div>
}

export default ContentPage;

