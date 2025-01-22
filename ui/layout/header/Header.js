"use client";
import React, { useState } from "react";
import classes from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { DMSans } from "@/app/fonts";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <header className={`${DMSans.className} ${classes["header"]}`}>
      <div className={classes["desktop"]}>
        <div className={classes["logo-wrapper"]}>
          <Image
            className={classes["logo"]}
            width="106"
            height="55"
            alt="logo"
            src="/svg/layout/logo.svg"
          />
        </div>
        <nav className={classes["menu"]}>
          <Link href="/courses" className={classes["menu-item"]}>
            Courses
          </Link>
          <Link href="/testimonials" className={classes["menu-item"]}>
            Testimonials
          </Link>
          <Link href="/contact" className={classes["menu-item"]}>
            Contact Us
          </Link>
        </nav>

        <div className={classes["action-btns"]}>
          <button className={` ${DMSans.className} ${classes["login"]}`}>
            Login
          </button>
          <button className={`${DMSans.className} ${classes["signup"]}`}>
            Sign Up
          </button>
        </div>
      </div>
      <div className={classes["mobile"]}>
        <Image
          className={classes["mobile-logo"]}
          src="/svg/layout/mobile-logo.svg"
          width="59"
          height="30"
          alt="logo"
        />
        <Image
          onClick={() => {
            setShowMobileMenu(!showMobileMenu);
          }}
          className={classes["menu-icon"]}
          src="/svg/layout/menu-icon.svg"
          width="33"
          height="33"
          alt="menu"
        />
      </div>

      <div
        className={classes[showMobileMenu ? "mobile-menu-show" : "mobile-menu"]}
      >
        <IoClose
          onClick={() => {
            setShowMobileMenu(!showMobileMenu);
          }}
          className={classes["close-menu"]}
        />

        <div className={classes["pages"]}>
          <Link href="/courses" className={classes["menu-item"]}>
            Courses
          </Link>
          <Link href="/testimonials" className={classes["menu-item"]}>
            Testimonials
          </Link>
          <Link href="/contact" className={classes["menu-item"]}>
            Contact Us
          </Link>
          <Link href="/login" className={classes["menu-item"]}>
            Login
          </Link>
          <Link href="/signup" className={classes["menu-item"]}>
            Signup
          </Link>
        </div>
        <div className={classes["social"]}>
          <Image
            width="22"
            height="22"
            alt="logo"
            src="/svg/layout/facebook.svg"
          />
          <Image
            width="24"
            height="24"
            alt="logo"
            src="/svg/layout/google.png"
          />
          <Image
            width="22"
            height="22"
            alt="logo"
            src="/svg/layout/instagram.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
