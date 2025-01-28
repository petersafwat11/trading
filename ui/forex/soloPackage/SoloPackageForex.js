import React from "react";
import classes from "./soloPackage.module.css";
import { manrope, space_Grotesk, DMSans } from "@/app/fonts";
const SoloPackageForex = () => {
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
      name: "XAU/USD SIGNAL TELEGRAM",
      describtion:
        "Get real time signals from experienced forex traders to discover the best times to invest.",
      price: "£300",
    },
    {
      name: "EUR/USD SIGNAL TELEGRAM",
      describtion: "Discuss your ideas with an expert of the stock exchange.",
      price: "£50",
    },
    {
      name: "GBP/USD SIGNAL TELEGRAM",
      describtion: "Discuss your ideas with an expert of the stock exchange.",
      price: "£50",
    },
    {
      name: "USING STOPS AND LIMITS TO MITIGATE RISK - FULL COURSE",
      describtion:
        "Watch the full 10 hours introductory course of smart money concepts to understand the fundamentals.",
      price: "£90",
    },
    {
      name: "TRADING FOREX WITH AI",
      describtion: "Discuss your ideas with an expert of the stock exchange.",
      price: "£40",
    },
    {
      name: "How spread betting and CFD trading work",
      describtion:
        "Watch the full 10 hours introductory course of smart money concepts to understand the fundamentals. ",
      price: "£70",
    },
    {
      name: "INTRODUCTION TO SMART MONEY CONCEPTS",
      describtion: "Discuss your ideas with an expert of the stock exchange.",
      price: "£40",
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

export default SoloPackageForex;
