import React from "react";
import classes from "./countrySelection.module.css";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
const countrySelection = () => {
    const countriesOptions = countryList.map((item) => item.country);

  return (
    <div className={classes["selection"]}>
      <Image
        className={classes["image"]}
        width="45"
        height="26"
        alt="logo"
        src="/flag.png"
      />
      <div className={classes["country"]}>
        <p className={classes["country"]}>United States</p>
        <IoIosArrowDown  className={classes['arrow']}/>
      </div>
      <div className={classes['options']}>

      </div>
    </div>
  );
};

export default countrySelection;
