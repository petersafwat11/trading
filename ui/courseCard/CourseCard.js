import React from "react";
import classes from "./courseCard.module.css";
import Image from "next/image";
// import { IoIosArrowRoundForward } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
<FaArrowRightLong />;

import { manrope, DMSans } from "@/app/fonts";
const CourseCard = () => {
  return (
    <div className={`${manrope.className} ${classes["container"]}`}>
      <Image
        className={classes["image"]}
        width="371"
        height="242"
        alt="course-image"
        src="/svg/course.svg"
      />
      <p className={classes["tag"]}>Stock Investment</p>
      <h3 className={classes["course-title"]}>
        Construct Stock Market Indices
      </h3>
      <p className={`${DMSans.className} ${classes["intro"]}`}>
        Learn the methodology behind creating stock market indices and their
        role in market analysis. Perfect for investors and analysts seeking
        deeper insights.
      </p>
      <div className={classes["learn-more"]}>
        Learn More
        <FaArrowRightLong className={classes["more-arrow"]} />
      </div>
    </div>
  );
};

export default CourseCard;
