import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlackArrowRight } from "./Icons";
import FirstBannerImage from "../../public/images/Banner Image/First Banner Image.png";
import BedroomBannerImage from "../../public/images/Banner Image/Bedroom Banner Image.png";
import KitchenBannerImage from "../../public/images/Banner Image/Kitchen Banner Image.png";

const Banner = () => {
  return (
    <div className="grid grid-rows-2 grid-flow-col gap-[25px]  justify-center">
      {/* Living Room Section */}
      <div className="row-span-3 ... relative ">
        <div className="font-medium text-3xl absolute top-8 left-14">
          Living Room
        </div>

        <div className="w-[548px]">
          <Image src={FirstBannerImage} loading="lazy" alt="Banner Image" />
        </div>

        <div className="absolute top-20 left-14">
          <Link className="flex text-sm relative" href="/">
            Shop Now&nbsp;
            <BlackArrowRight />
            <span className="absolute top-5 left-0 border-t w-[6.3em]"></span>
          </Link>
        </div>
      </div>

      {/* Bedroom Section */}
      <div className="col-span-2 ... relative ">
        <div className="font-medium text-3xl absolute bottom-20 left-14">
          Bedroom
        </div>
        <div className="w-[548px]">
          <Image src={BedroomBannerImage} alt="Bedroom Banner Image" />
        </div>
        <div className="absolute bottom-12 left-14">
          <Link className="flex text-sm relative" href="/">
            Shop Now&nbsp;
            <BlackArrowRight />
            <span className="absolute top-5 left-0 border-t w-[6.3em]"></span>
          </Link>
        </div>
      </div>

      {/* Kitchen Section */}
      <div className="row-span-2 col-span-2 ... relative">
        <div className="font-medium text-3xl absolute bottom-28 left-14">
          Kitchen
        </div>
        <div className="w-[548px]">
          <Image
            src={KitchenBannerImage}
            loading="lazy"
            alt="Kitchen Banner Image"
          />
        </div>
        <div className="absolute bottom-20 left-14">
          <Link className="flex text-sm relative" href="/">
            Shop Now&nbsp;
            <BlackArrowRight />
            <span className="absolute top-5 left-0 border-t w-[6.3em] "></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
