import React from "react";
import Link from "next/link";
import { FacebookIcon, InstgramIcon, YoutubeIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className=" flex flex-col text-white bg-dark-grey px-36 text-sm">
      <div className="flex justify-between gap-x-12 pb-12 pt-14 ">
        <span>Shoplite | Gift & Decoration Store</span>
        <span className="flex gap-x-8">
          <Link href="/"> Home</Link>
          <Link href="/shop"> Shop</Link>
          <Link href="/"> Product</Link>
          <Link href="/"> Blog</Link>
          <Link href="/"> Contact Us</Link>
        </span>
      </div>
      <hr />
      <div className="flex justify-between gap-x-12 text-xs pt-5 pb-8 ">
        <div className="flex gap-x-12">
          <span>Copyright © 2024 Suraj Pradhan. All rights reserved</span>
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
        </div>

        <div className="flex gap-x-4">
          <Link href="https://www.instagram.com/" target={"_blank"}>
            <InstgramIcon />
          </Link>
          <Link href="https://www.facebook.com/" target={"_blank"}>
            <FacebookIcon />
          </Link>
          <Link href="https://www.youtube.com/" target={"_blank"}>
            <YoutubeIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
