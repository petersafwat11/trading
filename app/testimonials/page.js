import { manrope, DMSans } from "../fonts";
import React from "react";
import classes from "./page.module.css";
import Testimonial from "@/ui/testimonial/Testimonial";

const page = () => {
  return (
    <div className={"page"}>
      <div className={classes["container"]}>
        <h1 className={`${manrope.className} ${classes["page-title"]}`}>
          Testimonials
        </h1>
      </div>
      <div className={classes["testimonials"]}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((items, index) => (
          <Testimonial key={index} />
        ))}
      </div>
      <div className={classes["button-wrapper"]}>
        <button className={`${DMSans.className} ${classes["load-more"]}`}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default page;
