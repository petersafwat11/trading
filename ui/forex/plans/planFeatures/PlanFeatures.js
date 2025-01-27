import React from "react";
import classes from "./planFeatures.module.css";
import { MdArrowDropDown } from "react-icons/md";
import Image from "next/image";

const PlanFeatures = () => {
  const features = [
    { feature: "projects", data: ["2 circles", "4 circles", "5 circles"] },
    { feature: "projects", data: [5, 15, 40] },
    {
      feature: "Keywords_to_track_with_daily_updates",
      data: [500, 1500, 5000],
    },
    {
      feature: "Keywords_domain_and_backlink_analytics",
      data: ["included", "included", "included"],
    },
    { feature: "Historical_Data", data: ["", "included", "included"] },
    {
      feature: "Content_Marketing_Platform",
      data: ["0 circles", "included", "included"],
    },
    {
      feature: "Looker_Studio_Integration",
      data: ["", "included", "included"],
    },
    { feature: "Share_of_Voice_Matric", data: ["", "", "included"] },
    { feature: "API_Access", data: ["", "", "included"] },
    {
      feature: "Domain_and_keywords_Analytics",
      data: ["3 circles", "4 circles", "5 circles"],
    },
    {
      feature: "Project_Features",
      data: ["2 circles", "3 circles", "5 circles"],
    },
    { feature: "Reporting", data: ["1 circles", "4 circles", "5 circles"] },
  ];
  return (
    <div className={classes["table"]}>
      <div className={classes["header"]}>
        Key Features
        <MdArrowDropDown className={classes["arrow-down"]} />
      </div>
      {features.map((item, index) => (
        <div key={index} className={classes["row"]}>
          <p className={classes["feature"]}>{item.feature}</p>
          {item.data.map((item, index) => (
            <div className={classes['value-wrapper']} key={index}>
              {item.length === 0 ? (
                "_"
              ) : typeof item === "number" ? (
                item
              ) : item === "included" ? (
                <Image
                  width="22"
                  height="22"
                  alt="included"
                  src="/svg/included.svg"
                />
              ) : item.includes("circles") ? (
                <div className={classes["circles"]}>
                  {[1, 2, 3, 4, 5].map((circles, index) => (
                    <span
                      key={index}
                      className={
                        classes[
                          item.split(" ")[0] < circles
                            ? "circle"
                            : "included-circle"
                        ]
                      }
                    ></span>
                  ))}
                </div>
              ) : item.length > 0 ? (
                item
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PlanFeatures;
