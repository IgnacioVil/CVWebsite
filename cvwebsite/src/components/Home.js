import React from "react";
import {motion} from "framer-motion"
import "./style/Home.css"

const Home = () => (
      <motion.div className={"homeMain"} initial={{opacity:0}} animate={{opacity:1}}>
          <div className={"homeBackground"} style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/homeBG.jpg'})`}}/>
          <div className={"homeDivider"}>
              <div className={"homeTopDivider"}/>
          </div>
          <div className={"homeTitleContainer"}>
              <motion.h3 className={"homeHiim text-primary"}>Hi, I'm:</motion.h3>
              <motion.h1 initial={{x:"-50vw"}} animate={{x:0}} transition={{delay:1.25-0.8}} className={"homeTitle homeIgnacio text-primary"}>Ignacio</motion.h1>
              <motion.h1 initial={{scaleY:0}} animate={{scaleY:1}} transition={{delay:1.35-0.8}} className={"homeTitle homeVillanueva text-highlight"}>Villanueva</motion.h1>
              <motion.h3 initial={{y:"20%", opacity:0}} animate={{y:0, opacity:1}} transition={{delay:2-0.8, duration:1}} className={"homeSubtitle text-secondary"}>Software Engineer</motion.h3>
          </div>
      </motion.div>
);

export default Home;