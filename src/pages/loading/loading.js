import React from "react";
import classes from "./loading.module.css";
import SlidingImage from "../../components/slidingImage";
import ProgressBar from "../../components/progressbar"

const Loading = props => (

  <div className={classes.page}>
    <div className={classes.mainText}>
      <p>SoloMio</p>
      <h1 className={classes.header}>HappyDev Digital</h1>
      <SlidingImage />
    </div>
    <ProgressBar />
  </div>
);

export default Loading;