import React from "react";
import classes from "./journy.module.css";
import Image from "next/image";
import { manrope, DMSans } from "@/app/fonts";
const Journy = () => {
  const categories = ["Stocks", "Forex", "Crypto"];
  return (
    <div className={`${DMSans.className} ${classes["container"]}`}>
      <h2 className={`${manrope.className} ${classes["title"]}`}>
        <span className={classes["title-span-1"]}>Choose Your</span>
        <span className={classes["title-span-2"]}>Journey</span>
      </h2>
      <div className={classes["categories"]}>
        {categories.map((item, index) => (
          <div key={index} className={classes["category"]}>
            <div className={classes["cat-first"]}>
              <h4 className={classes["cat-title"]}>{item}</h4>
              <button className={classes["join-btn"]}>Join Now</button>
            </div>

            <Image
              className={classes["logo"]}
              width="215"
              height="234"
              alt="logo"
              src={`/svg/landing-page/${item.toLocaleLowerCase()}.svg`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journy;
