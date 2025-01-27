import React from "react";
import classes from "./top.module.css";
import { manrope, DMSans } from "@/app/fonts";
const Top = () => {
  return (
    <div className={`${DMSans.className} ${classes["container"]}`}>
      <div className={classes["top"]}>
        <h1 className={`${manrope.className} ${classes["title"]}`}>
          Stocking Investment
        </h1>
        <p className={`${DMSans.className} ${classes["description"]}`}>
          Unravel the leading market strategies from professional traders and
          discover key insights and signals to propel your path to financial
          freedom!
        </p>
      </div>
      <button className={classes["get-started"]}>Get Started</button>
    </div>
  );
};

export default Top;
