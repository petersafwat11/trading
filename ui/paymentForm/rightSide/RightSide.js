import React from "react";
import classes from "./rightSide.module.css";
import Image from "next/image";
import { roboto, DMSans, manrope } from "@/app/fonts";
const RightSide = ({ data, setData }) => {
  return (
    <div className={`${DMSans.className} ${classes["container"]}`}>
      <Image
        className={classes["logo"]}
        width="106"
        height="55"
        alt="logo"
        src="/svg/layout/logo.svg"
      />
      <div className={classes["input-group"]}>
        <label className={classes["label"]}>Full Name*</label>
        <input
          className={classes["input"]}
          placeholder="Name"
          value={data.promotionCode}
          onChange={(e) => {
            setData({
              ...data,
              promotionCode: e.target.value,
            });
          }}
        ></input>
      </div>
      <div className={classes["cart"]}>
        <p className={`${manrope.className} ${classes["title"]}`}>In cart</p>
        <div className={classes["cart-items"]}>
          <div className={classes["cart-item"]}>
            <p className={classes["name"]}>uSD/GBP Telegram signal group</p>
            <p className={`${roboto.className} ${classes["price"]}`}>£120.00</p>
          </div>
        </div>
      </div>
      <div className={classes["summery"]}>
        <p className={`${manrope.className} ${classes["title"]}`}>
          Order Summry
        </p>

        <div className={classes["summery-items"]}>
          <div className={classes["summery-item"]}>
            <p className={classes["name"]}>Subtotal</p>
            <p className={classes["price"]}>£120.00</p>
          </div>
          <div className={classes["summery-item"]}>
            <p className={classes["name"]}>Subtotal</p>
            <p className={classes["price"]}>£120.00</p>
          </div>
        </div>
        <div className={classes["summery-total"]}>
          <p className={classes["name"]}>Total</p>
          <p className={classes["price"]}>£240.00</p>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
