"use client";
import React from "react";
import Link from "next/link";
import { CartIcon, HamburgerIcon, ProfileIcon, SearchIcon } from "./Icons";

import { usePathname } from "next/navigation";

export default function NavBar() {
  const CustomLink = ({ href = "", title = " " }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
      <Link href={href}>
        <span className={`${isActive ? "font-semibold" : ""}`}>{title}</span>
      </Link>
    );
  };

  return (
    <div className="flex justify-around items-center py-6 sticky top-0 bg-white z-10">
      <nav className="flex items-center gap-3">
        <span className="hidden xs:block">
          <HamburgerIcon />
        </span>
        <Link href="/">
          <span className="text-[28px] font-semibold xs:text-xl">SHOP</span>
          <span className="text-[28px] xs:text-xl ">LITE</span>
        </Link>
      </nav>
      <nav className="flex gap-x-8 xs:hidden">
        <CustomLink href="/" title="Home" />
        <CustomLink href="/shop" title="Shop" />
        {/* <CustomLink href="/product" title="Product" /> */}
        <CustomLink href="/contact" title="Contact Us" />
      </nav>
      <div className="flex gap-x-4 xs:invisible">
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
      <div className="hidden xs:block ">
        <CartIcon />
      </div>
    </div>
  );
}
