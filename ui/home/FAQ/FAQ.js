"use client";
import React, { useState } from "react";
import classes from "./FAQ.module.css";
import { manrope, DMSans } from "@/app/fonts";
import PlusICon from "./PlusICon";
import ExitIcon from "./ExitIcon";
const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState("");
  const questions = [
    {
      num: "01",
      question: "In publishing and graphic design?",
      answer:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    },
    {
      num: "02",
      question: "In publishing and graphic design?",
      answer:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    },
    {
      num: "03",
      question: "In publishing and graphic design?",
      answer:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    },
    {
      num: "04",
      question: "In publishing and graphic design?",
      answer:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    },
    {
      num: "05",
      question: "In publishing and graphic design?",
      answer:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    },
  ];
  return (
    <div className={`${DMSans.className} ${classes["container"]}`}>
            <span className={classes["green-ball"]}></span>
      <span className={classes["green-ball-2"]}></span>


      <h2 className={`${manrope.className} ${classes["title"]}`}>
        <span className={classes["title-span-1"]}>Frequently Asked</span>
        <span className={classes["title-span-2"]}>Question</span>
      </h2>
      <div className={classes["questions"]}>
        {questions.map((item, index) => (
          <div
            onClick={() => {
              setActiveQuestion(index + 1);
            }}
            key={index}
            className={
              classes[activeQuestion === index + 1 ? "active-item" : "item"]
            }
          >
            <p
              className={
                classes[
                  activeQuestion === index + 1
                    ? "active-question-num"
                    : "question-num"
                ]
              }
            >
              {item.num}
            </p>
            <div className={classes["question-and-answer"]}>
              <div
                className={
                  classes[
                    activeQuestion === index + 1
                      ? "active-question"
                      : "question"
                  ]
                }
              >
                <h4
                  className={
                    classes[
                      activeQuestion === index + 1
                        ? "active-question-text"
                        : "question-text"
                    ]
                  }
                >
                  {item.question}
                </h4>
                <div className={classes["icon-wrapper"]}>
                  {activeQuestion === index + 1 ? <ExitIcon /> : <PlusICon />}
                </div>
              </div>
              {activeQuestion === index + 1 && (
                <div className={classes["answer"]}>{item.answer}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
