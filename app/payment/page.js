import { manrope, DMSans } from "../fonts";
import React from "react";
import classes from "./page.module.css";
import PaymentForm from "@/ui/paymentForm/PaymentForm";
const page = () => {
  return (
    <div>
      <h1 className={`${manrope.className} ${classes["page-title"]}`}>
      Payment
      </h1>

      <PaymentForm />
    </div>
  );
};

export default page;
