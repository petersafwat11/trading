import React from "react";
import classes from "./prophits.module.css";
import Image from "next/image";
import { manrope, DMSans } from "@/app/fonts";
const Prophits = () => {
  return (
    <div className={`${DMSans.className} ${classes["container"]}`}>
      <span className={classes["green-ball"]}></span>

      <div className={classes["top-text"]}>
        <h2 className={`${manrope.className} ${classes["title"]}`}>
          <span className={classes["title-span-1"]}>Maximise Your </span>
          <span className={classes["title-span-2"]}>Profits</span>
        </h2>

        <p className={classes["para"]}>
          Explore this years profits from our students
        </p>
      </div>
      <div className={classes["course-item"]}>
        <p className={classes["course-para"]}>
          Sarah extended our courses to high risk trading and received huge
          returns as a result.
        </p>

        <button className={classes["read-more"]}> Read more</button>
      </div>
      <Image
        className={classes["image-1"]}
        width="296"
        height="255"
        alt="logo"
        src="/svg/landing-page/prophits-1.svg"
      />
      <Image
        className={classes["image-2"]}
        width="272"
        height="276"
        alt="logo"
        src="/svg/landing-page/prophits-2.svg"
      />
      <Image
        className={classes["image-3"]}
        width="133"
        height="276"
        alt="logo"
        src="/svg/landing-page/prophits-3.svg"
      />
      <Image
        className={classes["image-4"]}
        width="271"
        height="276"
        alt="logo"
        src="/svg/landing-page/prophits-4.svg"
      />

      <Image
        className={classes["image-5"]}
        width="267"
        height="276"
        alt="logo"
        src="/svg/landing-page/prophits-5.svg"
      />
    </div>
  );
};

export default Prophits;
