import React from "react";
import classes from "./page.module.css";
import FAQ from "@/ui/home/FAQ/FAQ";
import Mentorship from "@/ui/home/mentor/Mentorship";
import Prophits from "@/ui/home/prophits/Prophits";
import Journy from "@/ui/home/journy/Journy";
import FinancialFreedom from "@/ui/home/financialFreedom/FinancialFreedom";
const page = () => {
  return (
    <div className={classes["page"]}>
      {/* <h2 className={classes["title"]}>Frequently Asked Question </h2> */}
      <span className={classes["green-ball"]}></span>
      <span className={classes["green-ball-2"]}></span>

      <FinancialFreedom />
      <Journy />
      <Prophits />
      <Mentorship />
      <FAQ />
    </div>
  );
};

export default page;
