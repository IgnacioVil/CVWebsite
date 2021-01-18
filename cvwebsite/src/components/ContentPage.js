import {motion} from "framer-motion";

const pageVariant = {
    enter: (isDown) => {
        return {
            y: (isDown ? "-":"") + "50vh",
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
            y: (isDown ? "":"-") + "50vh",
            opacity: 0,
            transition:{
                type: "spring",
                duration: 0.85
            }
        }},
}

const style = {
    position: "absolute",
    height: "100%",
    width: "100%",
    margin: "0",
}

const ContentPage = (props) => {
    return <motion.div initial={"enter"} animate={"center"} exit={"exit"} custom={props.isDown} variants={pageVariant} style={style}>
        {props.children}
    </motion.div>
}

export default ContentPage;

