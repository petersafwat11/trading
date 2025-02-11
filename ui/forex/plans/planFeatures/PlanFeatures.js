"use client";
import React, { useEffect, useRef } from "react";
import classes from "./planFeatures.module.css";
import { MdArrowDropDown } from "react-icons/md";
import Image from "next/image";
import { manrope } from "@/app/fonts";

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
      data: ["", "included", "included"],
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
    {
      feature: "Domain and keywords Analytics",
      data: ["3 circles", "4 circles", "5 circles"],
    },
    {
      feature: "Project Features",
      data: ["2 circles", "3 circles", "5 circles"],
    },
    { feature: "Reporting", data: ["1 circles", "4 circles", "5 circles"] },
    {
      feature: "Content Marketing Platform",
      data: ["0 circles", "4 circles", "5 circles"],
    },
  ];

  const tableRef = useRef(null);
  const thumbRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (tableRef.current && thumbRef.current) {
        const table = tableRef.current;
        const maxScroll = table.scrollWidth - table.clientWidth;
        const currentScroll = table.scrollLeft;

        // Calculate the percentage scrolled
        const scrollPercentage = (currentScroll / maxScroll) * 100;

        // Set fixed width (95% of viewport/700px ratio)
        const viewportRatio = (table.clientWidth / 700) * 95;
        console.log(viewportRatio, table.clientWidth);
        thumbRef.current.style.width = `${viewportRatio}%`;

        // Set left position based on scroll percentage
        thumbRef.current.style.left = `${scrollPercentage}%`;
      }
    };

    const tableElement = tableRef.current;
    if (tableElement) {
      tableElement.addEventListener("scroll", handleScroll);
      // Call once initially to set correct initial state
      handleScroll();
    }

    return () => {
      if (tableElement) {
        tableElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className={classes["wrapper"]}>
      <div
        className={`${classes["table"]} ${manrope.className}`}
        ref={tableRef}
      >
        <div className={classes["header"]}>
          <p className={classes["value-wrapper"]}>Key Features</p>
          {/* <MdArrowDropDown className={classes["arrow-down"]} /> */}
          <Image
            className={classes["arrow-down"]}
            src="/svg/arrow-down.svg"
            width="22"
            height="22"
            alt="arrow-down"
          />
        </div>
        <div className={classes["table-body"]}>
          {features.map((item, index) => (
            <div
              key={index}
              className={
                classes[index >= features.length - 4 ? "special-row" : "row"]
              }
            >
              <p className={classes["feature"]}>
                {item.feature}
                {index >= features.length - 4 && (
                  <Image
                    className={classes["arrow-down"]}
                    src="/svg/arrow-down.svg"
                    width="22"
                    height="22"
                    alt="arrow-down"
                  />
                )}
              </p>

              {item.data.map((item, index) => (
                <div className={classes["value-wrapper"]} key={index}>
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
      </div>{" "}
      <div className={classes["scroll-track"]}>
        <div className={classes["scroll-thumb"]} ref={thumbRef}></div>
      </div>
    </div>
  );
};

export default PlanFeatures;
