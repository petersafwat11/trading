import React from "react";
import classes from "./page.module.css";
import Top from "@/ui/forex/top/Top";
import BundlePackege from "@/ui/forex/bundlePackege/BundlePackege";
import SoloPackage from "@/ui/forex/soloPackage/SoloPackage";
import Plans from "@/ui/forex/plans/Plans";
const page = () => {
  return (
    <div className={classes["page"]}>
      <span className={classes["green-ball"]}></span>
      <span className={classes["green-ball-2"]}></span>
      <Top title="Forex Trading" description="Unravel the leading market strategies from professional traders and discover key insights and signals to propel your path to financial freedom!" />
      <BundlePackege />
      <SoloPackage />
      <Plans />
    </div>
  );
};

export default page;
