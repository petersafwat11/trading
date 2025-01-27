import React from "react";
import classes from "./bundlePackege.module.css";
import { manrope, DMSans } from "@/app/fonts";
const BundlePackege = () => {
  const bundledPackeges = [
    {
      name: "Novice Trader",
      describtion:
        "Get access to all of our solo package content and more with this tier.",
      price: "£200",
      className: "package-1",
    },
    {
      name: "Ultimate",
      describtion:
        "Guarantee your success in Stocks with 1-1 mentoring from our top professors in the field.",
      price: "£765",
      className: "package-2",
    },
    {
      name: "Expert Trader",
      describtion:
        "Learn the deep knowledge of trading through an extra 100 hours of courses exclusive to this tier.",
      price: "£430",
      className: "package-3",
    },
  ];
  return (
    <div className={`${DMSans.className} ${classes["container"]}`}>
      <h2 className={`${manrope.className} ${classes["title"]}`}>
        <span className={classes["title-span-1"]}>BUNDLED</span>
        <span className={classes["title-span-2"]}>PACKAGES</span>
      </h2>
      <div className={classes["packages"]}>
        {bundledPackeges.map((item, index) => (
          <div key={index} className={classes[item.className]}>
            <div className={classes["top"]}>
              <h4 className={classes["package-name"]}>{item.name}</h4>
              <p className={classes["package-describtion"]}>
                {item.describtion}
              </p>
            </div>
            <div className={classes["bottom"]}>
              <p className={classes["price"]}>
                {item.price}
                <span className={classes["annually"]}>/Annually</span>
              </p>
              <button className={classes["get-started"]}>Get Started</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BundlePackege;
