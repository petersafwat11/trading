import React from "react";
import classes from "./mentorship.module.css";
import Image from "next/image";
import { manrope, DMSans } from "@/app/fonts";
const Mentorship = () => {
  return (
    <div className={` ${DMSans.className} ${classes["container"]}`}>
      <div className={classes["wrapper"]}>
        <div className={classes["first"]}>
          <div className={classes["text-top"]}>
            <h2 className={`${manrope.className} ${classes["title"]}`}>
              <span className={classes["title-span-1"]}>
                Get 1-1 Mentorship From
              </span>
              <span className={classes["title-span-2"]}>Top Traders</span>
            </h2>
            <p className={classes["para"]}>
              Learn from the lead investors from the industries and guarantee
              financial freedom and success!
            </p>
          </div>
          <button className={classes["join-btn"]}>Join Now</button>
        </div>
        <div className={classes["second"]}>
          <Image
            className={classes["mentor-image"]}
            layout="responsive"
            width="665"
            height="680"
            alt="mentor"
            src="/svg/landing-page/mentor.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
