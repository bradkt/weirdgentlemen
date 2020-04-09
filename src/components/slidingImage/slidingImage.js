import React from "react";
import classes from "./styles.module.css";
import { motion } from "framer-motion";
import circles from "../../assets/preloader-circle-shape.png";



const SlidingImage = props => {

  return (
  <div className={classes.componentContiner}>
        <motion.div 
            animate={{ x:-4000 }}
            transition={{
                delay: 1,
                duration: 3,
              }}
        >
            <img alt="blaa" src={`${circles}`} />
        </motion.div>
  </div>
  );
};

export default SlidingImage;