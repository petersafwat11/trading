import React from "react";
import classes from "./testimonials.module.css";
import Image from "next/image";
import { DMSans } from "@/app/fonts";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonial = () => {
  return (
    <div className={`${DMSans.className} ${classes["testimonial"]}`}>
      {/* <span >‘‘</span> */}
      <RiDoubleQuotesL className={classes["quotes"]} />

      <p className={classes["text"]}>
        {`If anyone is looking to create a book cover, this is the place you need
        to visit.My editor recommended 99design and I am glad she did. My only
        regret is that I didn't here about them for my first 3 books. That did a
        great job!!`}
      </p>
      <div className={classes["personal-details"]}>
        <Image width="59" height="59" alt="logo" src="/svg/person.svg" />
        <div className={classes["texts"]}>
          <h4 className={classes["name"]}> Jaydon Bator</h4>
          <p className={classes["title"]}> Sr. Designer</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
