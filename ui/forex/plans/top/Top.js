import React from "react";
import classes from "./top.module.css";
import Plans from "../Plans";
const Top = () => {
  const plans = [
    {
      name: "Novice",
      price: "£139.95",
    },
    { name: "Expert", price: "£249.95" },
    { name: "Inside Trader", price: "£499.95" },
  ];

  return (
    <div className={classes["top"]}>
      <div className={classes["first"]}>
        <h2 className={classes["title"]}>Compare Plans</h2>

        <p className={classes["para"]}>
          {
            "Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts."
          }
        </p>
      </div>
      <div className={classes["plans"]}>
        {plans.map((plan, index) => (
          <div
            className={
              classes[plan.name === "Expert" ? "special-plan" : "plan"]
            }
            key={index}
          >
            <div className={classes["plan-top"]}>
              <h3 className={classes["plan-name"]}>{plan.name}</h3>
              <p className={classes["plan-price"]}>
                {plan.price.split(".")[0]}
                <span className={classes["price-cents"]}>
                  .{plan.price.split(".")[1]}
                </span>
              </p>
            </div>
            <button
              className={
                classes[
                  plan.name === "Expert" ? "special-subscribe" : "subscribe"
                ]
              }
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Top;
