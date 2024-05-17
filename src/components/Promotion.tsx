import Image from "next/image";
import Link from "next/link";
import React from "react";
import BannerImage from "../../public/images/Banner Image.png";
import { BlackArrowRight } from "./Icons";

const Promotion = () => {
  return (
    <div className="flex bg-light-blue">
      <div>
        <Image
          src={BannerImage}
          height={532}
          loading="lazy"
          alt="Banner Image"
        />
      </div>
      <div className="py-32 px-20">
        <div className="text-blue mb-3">SALE UPTO 30% OFF</div>
        <div className="font-semibold text-2xl">
          HUNDREDS of <br />
          New lower prices !
        </div>
        <p className="mt-2 mb-3 ">
          Its more affordable than ever to give every <br /> room in your home a
          stylish makeover
        </p>
        <div className=" relative ">
          <Link className="flex text-sm" href="/">
            Shop Now &nbsp;
            <BlackArrowRight />
            <span className="absolute top-5 left-0 border w-[6.3em]"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
