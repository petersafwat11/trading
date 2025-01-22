"use client";
import { manrope, DMSans } from "@/app/fonts";
import React, { useState } from "react";
import classes from "./paymentForm.module.css";
import DateIcon from "./dateIcon";
import RightSide from "./rightSide/RightSide";
import CountrySelection from "./countrySelection/CountrySelection";
const PaymentForm = () => {
  const [data, setData] = useState({
    fullName: "",
    emailAddress: "",
    confirmEmailAddress: "",
    countryCode: "",
    phoneNum: "",
    nationality: "",
    dateOfBirth: "",
    promotionCode: "",
  });
  return (
    <div className={`${DMSans.className} ${classes["form"]}`}>
      <div className={classes["first"]}>
        <h2 className={`${manrope.className} ${classes["title"]}`}>
          Your Details
        </h2>
        <div className={classes["form-rows"]}>
          <div className={classes["row"]}>
            <div className={classes["input-group"]}>
              <label className={classes["label"]}>Full Name*</label>
              <input
                className={classes["input"]}
                placeholder="Name"
                value={data.fullName}
                onChange={(e) => {
                  setData({
                    ...data,
                    fullName: e.target.value,
                  });
                }}
              ></input>
            </div>
          </div>
          <div className={classes["row"]}>
            <div className={classes["input-group"]}>
              <label className={classes["label"]}>Email Address*</label>
              <input
                className={classes["input"]}
                placeholder="Type your email address"
                value={data.emailAddress}
                onChange={(e) => {
                  setData({
                    ...data,
                    emailAddress: e.target.value,
                  });
                }}
              ></input>
            </div>
            <div className={classes["input-group"]}>
              <label className={classes["label"]}>Confirm Email Address*</label>
              <input
                className={classes["input"]}
                placeholder="Type email address"
                value={data.confirmEmailAddress}
                onChange={(e) => {
                  setData({
                    ...data,
                    confirmEmailAddress: e.target.value,
                  });
                }}
              ></input>
            </div>
          </div>
          <div className={classes["row"]}>
            <div className={classes["input-group"]}>
              <label className={classes["label"]}>Country Code*</label>
              <input
                className={classes["input"]}
                placeholder="Type Name Here"
                value={data.username}
                onChange={(e) => {
                  setData({
                    ...data,
                    username: e.target.value,
                  });
                }}
              ></input>
            </div>
            <div className={` ${classes[`number-group`]}`}>
              <label className={classes["label"]}>Phone Number*</label>
              <input
                className={classes["input"]}
                placeholder="Type your phone number"
                value={data.phoneNum}
                onChange={(e) => {
                  setData({
                    ...data,
                    phoneNum: e.target.value,
                  });
                }}
              ></input>
            </div>
          </div>
          <div className={classes["row"]}>
            {/* <CountrySelection />
             */}
            <div className={classes["input-group"]}>
              <label className={classes["label"]}>Nationality</label>
              <input
                className={classes["input"]}
                placeholder="Type Name Here"
                value={data.username}
                onChange={(e) => {
                  setData({
                    ...data,
                    username: e.target.value,
                  });
                }}
              ></input>
            </div>
            <div className={classes["date-group"]}>
              <label className={classes["label"]}>Date of Birth</label>
              <input
                className={classes["input"]}
                placeholder="DD/MM/YY"
                value={data.dateOfBirth}
                onChange={(e) => {
                  setData({
                    ...data,
                    dateOfBirth: e.target.value,
                  });
                }}
              ></input>
              <DateIcon className={classes["date-icon"]} />
            </div>
          </div>
        </div>
        <h2 className={`${manrope.className} ${classes["title"]}`}>
          Payment Method
        </h2>
        <p className={classes["choose-text"]}>Choose your payment option:</p>
        <div className={classes["saved-cards"]}>
          {[1, 2, 3].map((item, index) => (
            <div key={index} className={classes["saved-card"]}></div>
          ))}
        </div>
        <button className={classes["pay-button"]}>Pay Now</button>
      </div>
      <div className={classes["second"]}>
        <RightSide data={data} setData={setData} />
      </div>
    </div>
  );
};

export default PaymentForm;
