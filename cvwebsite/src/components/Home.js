import React from "react";
import {motion} from "framer-motion"
import "./style/Home.css"

const Home = () => (
      <motion.div className={"homeMain"} initial={{opacity:0}} animate={{opacity:1}}>
          <div className={"homeTitleContainer"}>
              <motion.h1 initial={{x:"100vw"}} animate={{x:0}} transition={{delay:1.25-0.8}} className={"homeTitle text-secondary"}>Ignacio</motion.h1><br/>
              <motion.h1 initial={{scaleY:0}} animate={{scaleY:1}} transition={{delay:1.35-0.8}} className={"homeTitle text-highlight"}>Villanueva</motion.h1>
              <motion.div initial={{scaleX:0}} animate={{scaleX:1}} transition={{delay:1.55-0.8}} className={"homeTopSeparator"}/>
              <motion.div initial={{scaleX:0}} animate={{scaleX:1}} transition={{delay:1.65-0.8}} className={"homeBottomSeparator"}/>
              <motion.h3 initial={{y:"20%", opacity:0}} animate={{y:0, opacity:1}} transition={{delay:2-0.8, duration:1}} className={"homeSubtitle text-secondary"}>Software Engineer</motion.h3>
          </div>
      </motion.div>
);

export default Home;