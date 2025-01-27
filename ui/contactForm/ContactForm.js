"use client";
import { space_Grotesk, DMSans, manrope, roboto, inter } from "@/app/fonts";
import React, { useState } from "react";
import classes from "./contactForm.module.css";
import Image from "next/image";
const ContactForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    type: "",
    message: "",
  });
  const [activeType, setActiveType] = useState("Question");
  return (
    <div className={`${DMSans.className} ${classes["container"]}`}>
      <span className={classes["green-ball"]}></span>
      <div className={classes["first"]}>
        <div className={classes["top"]}>
          <h2 className={`${manrope.className} ${classes["title"]}`}>
            Let’s connect constellations
          </h2>
          <p className={classes["description"]}>
            {`Let's align our constellations! Reach out and let the magic of
          collaboration illuminate our skies.`}
          </p>
        </div>
        <div className={classes["form-rows"]}>
          <div className={classes["row"]}>
            <div className={classes["input-group"]}>
              <label className={classes["label"]}>First Name</label>
              <input
                className={classes["input"]}
                placeholder="First Name"
                value={data.firstName}
                onChange={(e) => {
                  setData({
                    ...data,
                    firstName: e.target.value,
                  });
                }}
              ></input>
            </div>
            <div className={classes["input-group"]}>
              <label className={classes["label"]}>Last Name</label>
              <input
                className={classes["input"]}
                placeholder="Last Name"
                value={data.lastName}
                onChange={(e) => {
                  setData({
                    ...data,
                    lastName: e.target.value,
                  });
                }}
              ></input>
            </div>
          </div>
          <div className={classes["row"]}>
            <div className={classes["input-group"]}>
              <label className={`${inter.className} ${classes["label"]}`}>
                Email Address
              </label>
              <input
                className={classes["input"]}
                placeholder="Email Address"
                value={data.emailAddress}
                onChange={(e) => {
                  setData({
                    ...data,
                    emailAddress: e.target.value,
                  });
                }}
              ></input>
            </div>
          </div>
        </div>
        <div className={classes["contact-type"]}>
          <p
            onClick={() => {
              console.log("sssssss clickedc");
            }}
            className={`${roboto.className} ${classes["type-text"]}`}
          >
            Select the appropriate option*
          </p>
          <div
            className={`${space_Grotesk.className} ${classes["types"]}`}
          >
            {["Question", "Complaint", "Other"].map((item, index) => (
              <button
                onClick={() => {
                  setActiveType(item);
                  console.log("active type", activeType);
                }}
                key={index}
                className={
                  classes[activeType === item ? "active-type" : "type"]
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <textarea
          className={`${inter.className} ${classes["text-area"]}`}
          placeholder="Message"
          value={data.message}
          onChange={(e) => {
            setData({
              ...data,
              message: e.target.value,
            });
          }}
        ></textarea>
        <button className={classes["submit"]}> Submit</button>
      </div>
      <div className={classes["second"]}>
        <Image
          className={classes["contact-image"]}
          width="516"
          height="616"
          alt="contact-image"
          src="/svg/contact.svg"
        />
      </div>
    </div>
  );
};

export default ContactForm;
