import React from "react";
import classes from "./financialFreedom.module.css";
import Image from "next/image";
import { manrope, DMSans } from "@/app/fonts";
const FinancialFreedom = () => {
  return (
    <div className={classes["container"]}>
      <div className={`${DMSans.className} ${classes["wrapper"]}`}>
        <div className={classes["first"]}>
          <h2 className={`${manrope.className} ${classes["title"]}`}>
            <span className={classes["title-span-1"]}>Financial Freedom</span>

            <span className={classes["title-span-2"]}>Starts Here</span>
          </h2>

          <p className={classes["para"]}>
            Learn directly from the industry experts and become a master at
            trading stocks, forex and more!
          </p>
          <button className={classes["join-btn"]}>Join Now</button>
        </div>
        <div className={classes["second"]}>
          <Image
            className={classes["image"]}
            width="828"
            height="566"
            alt="freedom"
            src="/svg/landing-page/financial.svg"
          />
          <Image
            className={classes["image-mobile"]}
            width="330"
            height="226"
            alt="freedom"
            src="/svg/landing-page/financial-mobile.svg"
          />
          
        </div>
      </div>
    </div>
  );
};

export default FinancialFreedom;
