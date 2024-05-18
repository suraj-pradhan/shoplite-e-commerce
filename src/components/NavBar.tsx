"use client";
import React from "react";
import Link from "next/link";
import { CartIcon, ProfileIcon, SearchIcon } from "./Icons";
import Image from "next/image";
import BrandImage from "../../public/images/Brand Logo.png";

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
    <div className="flex justify-around items-center py-6">
      <nav>
        <Link href="/">
          <Image src={BrandImage} priority height={20} alt="Brand Image" />
        </Link>
      </nav>
      <span className="flex gap-x-8">
        <CustomLink href="/" title="Home" />
        <CustomLink href="/shop" title="Shop" />
        <CustomLink href="/product" title="Product" />
        <CustomLink href="/contact" title="Contact Us" />
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
}
