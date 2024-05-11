import React from "react";
import Link from "next/link";
import Image from "next/image";

import FirstBannerImage from "../../public/images/Banner Image/First Banner Image.png";
import { RightArrow } from "./Icons";

const Banner = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4 items-center justify-center">
      {/* Living Room Section */}
      <div className="row-span-3 ... relative ">
        <div className="font-medium text-3xl absolute top-8 left-14">
          Living Room
        </div>
        <div className="w-[548px]">
          <Image src={FirstBannerImage} alt="Banner Image" />
        </div>
        <div className="absolute top-20 left-14">
          <Link className="flex text-sm relative" href="/">
            Shop Now&nbsp;
            <RightArrow />
            <span className="absolute top-5 left-0 border w-[6.3em]"></span>
          </Link>
        </div>
      </div>
      {/* Living Room Section Ends */}
      {/* Bedroom Section */}
      <div className="col-span-2 ... "></div>
      {/* Kitchen Section */}
      <div className="row-span-2 col-span-2 ...">03</div>
    </div>
  );
};

export default Banner;
