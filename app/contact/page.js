import { manrope, DMSans } from "../fonts";
import React from "react";
import classes from "./page.module.css";
import ContactForm from "@/ui/contactForm/ContactForm";
const page = () => {
  return (
    <div className={classes["page"]}>
      <span className={classes["green-ball"]}></span>
      <span className={classes["green-ball-2"]}></span>

      <div className={classes["container"]}>
        <div className={classes["top"]}>
          <h1 className={`${manrope.className} ${classes["title"]}`}>
            Contact Us
          </h1>
          <p className={`${DMSans.className} ${classes["description"]}`}>
            Need help or have further enquires? Feel free to contact us via
            email through the form below.
          </p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default page;
