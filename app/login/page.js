import { manrope, DMSans } from "../fonts";
import React from "react";
import classes from "./page.module.css";
import LoginForm from "@/ui/loginForm/LoginForm";
const page = () => {
  return (
    <div className={classes["page"]}>
      <span className={classes["green-ball"]}></span>
      <LoginForm />
    </div>
  );
};

export default page;
