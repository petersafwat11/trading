"use client";
import React, { useState } from "react";
import classes from "./loginForm.module.css";
import Image from "next/image";
import { manrope, DMSans } from "@/app/fonts";
const LoginForm = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  return (
    <div className={`${DMSans.className} ${classes["form"]}`}>
      <span className={classes["green-ball"]}></span>
      <span className={classes["green-ball-2"]}></span>
      <span className={classes["green-ball-3"]}></span>

      <div className={classes["wrapper"]}>
        <Image
          className={classes["mobile-logo"]}
          src="/svg/login-logo.svg"
          width="76"
          height="39"
          alt="logo"
        />
        <h3 className={`${manrope.classes} ${classes["title"]}`}>
          Members Portal
        </h3>
        <div className={classes["inputs"]}>
          <div className={classes["input-group"]}>
            <label className={classes["label"]}>Username</label>
            <input
              className={classes["input"]}
              placeholder="Type Name Here"
              value={loginData.username}
              onChange={(e) => {
                setLoginData({
                  ...loginData,
                  username: e.target.value,
                });
              }}
            ></input>
          </div>
          <div className={classes["input-group"]}>
            <label className={classes["label"]}>Password</label>
            <input
              className={classes["input"]}
              placeholder="Type Password here"
              value={loginData.password}
              onChange={(e) => {
                setLoginData({
                  ...loginData,
                  password: e.target.value,
                });
              }}
            ></input>
          </div>
        </div>
        <p className={classes["forget-password"]}>Forgot Password?</p>
        <button className={classes["login-btn"]}>Login </button>
      </div>
    </div>
  );
};

export default LoginForm;
