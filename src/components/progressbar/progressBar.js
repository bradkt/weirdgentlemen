import React from "react";
import classes from "./styles.module.css";
import { motion } from "framer-motion";

const ProgressBar = props => {

  return (
  <motion.div 
    className={classes.componentContiner}
    initial={{ width: 100 }}
    animate={{ width: '100vw' }}
    transition={{
        delay: 1,
        ease: [0.17, 0.67, 0.83, 0.67],
        duration: 3,
      }}
  >

  </motion.div >
  );
};

export default ProgressBar;