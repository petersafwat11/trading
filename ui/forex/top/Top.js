import React from "react";
import classes from "./top.module.css";
import { manrope, DMSans } from "@/app/fonts";
const Top = ({title, description, }) => {
  return (
    <div className={`${DMSans.className} ${classes["container"]}`}>
      <div className={classes["top"]}>
        <h1 className={`${manrope.className} ${classes["title"]}`}>
          {title}
        </h1>
        <p className={`${DMSans.className} ${classes["description"]}`}>
          {description}
        </p>
      </div>
      <button className={classes["get-started"]}>Get Started</button>
    </div>
  );
};

export default Top;
