import React from "react";
import classes from "./plans.module.css";
import Top from "./top/Top";
import PlanFeatures from "./planFeatures/PlanFeatures";
const Plans = () => {
  return (
    <div className={classes["container"]}>
      <Top />
      <PlanFeatures />
    </div>
  );
};

export default Plans;
