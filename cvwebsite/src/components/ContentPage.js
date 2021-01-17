import { Component } from "react";
import {pageDown, pageTransition} from "../constants/transitions";
import {motion} from "framer-motion";

export default class ContentPage extends Component {

    render(){
        return <motion.div initial={"initial"} animate={"in"} exit={"out"} variants={pageDown} transition={pageTransition} style={{position: "absolute"}}>
            {this.props.children}
        </motion.div>
    }

}
