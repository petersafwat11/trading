import React from "react";
import classes from "./soloPackage.module.css";
import { manrope, space_Grotesk, DMSans } from "@/app/fonts";
const SoloPackage = () => {
  const packages = [
    {
      name: "30 MINUTE CONSULTATION",
      describtion: "Discuss your ideas with an expert of the stock exchange.",
      price: "£75",
    },
    {
      name: "1 Hour Consultation",
      describtion: "Discuss your ideas with an expert of the stock exchange.",
      price: "£125",
    },
    {
      name: "Introductionn to shorts trading",
      describtion: "Discuss your ideas with an expert of the stock exchange.",
      price: "£125",
    },
    {
      name: "Introduction Long Term TRADES",
      describtion: "Discuss your ideas with an expert of the stock exchange.",
      price: "£99",
    },
    {
      name: "Identifying major market levels - full course",
      describtion: "Discuss your ideas with an expert of the stock exchange.",
      price: "£125",
    },
    {
      name: "EXPLORING TRADING PHYCOLOGY - FULL COURSE",
      describtion: "Discuss your ideas with an expert of the stock exchange.",
      price: "£67.50",
    },
    {
      name: "Candlestick & Technical Analysis Full course",
      describtion: "Discuss your ideas with an expert of the stock exchange.",
      price: "£125",
    },
  ];
  return (
    <div className={`${manrope.className} ${classes["container"]}`}>
      <h2 className={classes["title"]}>
        <span className={classes["title-span-1"]}>Solo</span>
        <span className={classes["title-span-2"]}>PACKAGES</span>
      </h2>
      <div className={classes["packages"]}>
        {packages.map((item, index) => (
          <div key={index} className={classes["package"]}>
            <div className={classes["top"]}>
              <h4 className={classes["package-name"]}>{item.name}</h4>

              <p
                className={` ${DMSans.className} ${classes["package-describtion"]}`}
              >
                {item.describtion}
              </p>
            </div>
            <div className={classes["bottom"]}>
              <p className={classes["price"]}>
                {item.price}
                <span className={classes["annually"]}>
                  {index < 2 ? "/Annually" : "/One Time Free"}
                </span>
              </p>
              <button
                className={`${space_Grotesk.className} ${
                  classes[
                    item.name === "30 MINUTE CONSULTATION"
                      ? "special-purchase"
                      : "purchase"
                  ]
                }`}
              >
                Purchase
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoloPackage;
