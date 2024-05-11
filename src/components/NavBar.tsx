import React from "react";
import Link from "next/link";
import { CartIcon, ProfileIcon, SearchIcon } from "./Icons";
import Image from "next/image";
import BrandImage from "../../public/images/Brand Logo.png";

const NavBar = () => {
  return (
    <div className="flex justify-around items-center py-6">
      <nav className="">
        <Image src={BrandImage} height={20} alt="Brand Image" />
      </nav>
      <span className="flex gap-x-8">
        <Link href="/"> Home</Link>
        <Link href="/"> Shop</Link>
        <Link href="/"> Product</Link>
        <Link href="/"> Contact Us</Link>
      </span>
      <div className="flex gap-x-4">
        <Link href="/">
          <SearchIcon />
        </Link>
        <Link href="/">
          <ProfileIcon />
        </Link>
        <Link href="/">
          <CartIcon />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
