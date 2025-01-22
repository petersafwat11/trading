import React from "react";
import classes from "./footer.module.css";
import Image from "next/image";
import { instrument_sans, DMSans, manrope, montserrat } from "@/app/fonts";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <div className={classes["container"]}>
        <div className={classes["first"]}>
          <Image
            width="106"
            height="55"
            alt="logo"
            src="/svg/layout/footer-logo.svg"
          />

          {/* <p className={classes["text"]}> */}
          <p className={`${instrument_sans.className} ${classes["text"]}`}>
            Integer sit quisque sed at. Fermentum nunc aliquet cursus eget.
            Egestas ornare.
          </p>
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
        <div className={`${DMSans.className} ${classes["second"]}`}>
          <ul className={classes["menu"]}>
            <h5 className={`${manrope.className} ${classes["menu-header"]}`}>
              Legal
            </h5>

            <Link href="/" className={classes["menu-item"]}>
              Courses
            </Link>
            <Link href="/" className={classes["menu-item"]}>
              Testimonials{" "}
            </Link>
            <Link href="/" className={classes["menu-item"]}>
              Contact us
            </Link>
          </ul>
          <ul className={classes["menu"]}>
            <h5 className={`${manrope.className} ${classes["menu-header"]}`}>
              Legal
            </h5>
            <Link href="/" className={classes["menu-item"]}>
              Terms and Conditions
            </Link>
            <Link href="/" className={classes["menu-item"]}>
              Privacy and Policy{" "}
            </Link>
            <Link href="/" className={classes["menu-item"]}>
              Refund and Policy
            </Link>
          </ul>
          <ul className={classes["menu"]}>
            <h5 className={`${manrope.className} ${classes["menu-header"]}`}>
              Social Links
            </h5>
            <Link href="/" className={classes["social-item"]}>
              {" "}
              <Image
                width="22"
                height="22"
                alt="logo"
                src="/svg/layout/facebook.svg"
              />
              Facebook Link
            </Link>
            <Link href="/" className={classes["social-item"]}>
              {" "}
              <Image
                width="24"
                height="24"
                alt="logo"
                src="/svg/layout/google.png"
              />
              Google Link{" "}
            </Link>
            <Link href="/" className={classes["social-item"]}>
              {" "}
              <Image
                width="22"
                height="22"
                alt="logo"
                src="/svg/layout/instagram.svg"
              />
              Instagram Link
            </Link>
          </ul>
        </div>
      </div>
      <div className={classes["copyright"]}>
        <p className={`${montserrat.className} ${classes["copyright-text"]}`}>
          © 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
