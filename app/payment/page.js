import { manrope } from "../fonts";
import React from "react";
import classes from "./page.module.css";
import PaymentForm from "@/ui/paymentForm/PaymentForm";
const page = () => {
  return (
    <div className={classes["page"]}>
      <div className={classes["top"]}>
        <h1 className={`${manrope.className} ${classes["page-title"]}`}>
          Payment
        </h1>
      </div>
      <PaymentForm />
    </div>
  );
};

export default page;
