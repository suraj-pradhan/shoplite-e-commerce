import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FacebookIcon, InstgramIcon, YoutubeIcon } from "./Icons";
import BrandLogoWhite from "../../public/images/Brand Logo White.png";

const Footer = () => {
  return (
    <footer className=" flex flex-col text-white bg-dark-grey px-36 text-sm">
      <div className="flex justify-between gap-x-12 pb-16 pt-20 ">
        <div className="flex items-center gap-x-10">
          <span>
            <Image src={BrandLogoWhite} height={17} alt="Brand Logo White" />
          </span>
          <span>|</span>
          <span>Gift & Decoration Store</span>
        </div>
        <span className="flex gap-x-10">
          <Link href="/"> Home</Link>
          <Link href="/"> Shop</Link>
          <Link href="/"> Product</Link>
          <Link href="/"> Blog</Link>
          <Link href="/"> Contact Us</Link>
        </span>
      </div>
      <hr />
      <div className="flex justify-between gap-x-12 text-xs pt-5 pb-12 ">
        <div className="flex gap-x-10">
          <span>Copyright © 2024 Suraj Pradhan. All rights reserved</span>
          <span className="font-bold">Privacy Policy</span>
          <span className="font-bold">Terms of Use</span>
        </div>

        <div className="flex gap-x-6">
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
