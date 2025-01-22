import { manrope, DMSans } from "../fonts";
import React from "react";
import classes from "./page.module.css";
const page = () => {
  return (
    <div className={classes['page']}>
      <div className={classes["top"]}>
        <h1 className={`${manrope.className} ${classes["title"]}`}>
          Contact Us
        </h1>
        <p className={`${DMSans.className} ${classes["description"]}`}>
          Need help or have further enquires? Feel free to contact us via email
          through the form below.
        </p>
      </div>
    </div>
  );
};

export default page;
