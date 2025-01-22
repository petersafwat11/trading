import { manrope, DMSans } from "../fonts";
import React from "react";
import classes from "./page.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import CourseCard from "@/ui/courseCard/CourseCard";

const page = () => {
  return (
    <div className={classes["page"]}>
      <span className={classes["green-ball"]}></span>
      <span className={classes["green-ball-2"]}></span>

      <div className={classes["top"]}>
        <h1 className={`${manrope.className} ${classes["title"]}`}>
          BROWSE OUR COURSES
        </h1>
        <p className={`${DMSans.className} ${classes["description"]}`}>
          Scout out our catalogue of courses within each package to decide which
          ones best suit your needs!
        </p>
      </div>
      <div className={classes["courses"]}>
        <span className={classes["green-ball-3"]}></span>

        {[1, 2, 3, 4].map((item, index) => (
          <div key={index} className={classes["category"]}>
            <div className={classes["category-top"]}>
              <h3
                className={`${manrope.className} ${classes["category-title"]}`}
              >
                STOCKS{" "}
                <span className={classes["title-span"]}>Investment </span>
              </h3>
              <div className={classes["arrows"]}>
                <div className={classes["arrow-wrapper"]}>
                  <IoIosArrowBack className={classes["arrow"]} />
                </div>

                <div className={classes["clickable-arrow-wrapper"]}>
                  <IoIosArrowForward className={classes["clickable-arrow"]} />
                </div>
              </div>
            </div>
            <div className={classes["category-courses"]}>
              {[1, 2, 3].map((item, index) => (
                <CourseCard key={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
