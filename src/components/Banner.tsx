import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlackArrowRight } from "./Icons";
import FirstBannerImage from "../../public/images/Banner Image/First Banner Image.png";
import BedroomBannerImage from "../../public/images/Banner Image/Bedroom Banner Image.png";
import KitchenBannerImage from "../../public/images/Banner Image/Kitchen Banner Image.png";

const Banner = () => {
  return (
    <div className="flex items-center justify-center gap-6 xs:flex-col py-5">
      <div className="relative">
        <div className="font-medium text-3xl xs:text-xl absolute top-8 left-14">
          Living Room
        </div>
        <div className="absolute left-14 top-20 xs:top-16 ">
          <Link className="flex text-sm relative" href="/">
            Shop Now&nbsp;
            <BlackArrowRight />
            <span className="absolute left-0 top-5 border-t w-[6.3em]"></span>
          </Link>
        </div>
        <div className="">
          <Image
            src={FirstBannerImage}
            width={548}
            loading="lazy"
            alt="Banner Image"
          />
        </div>
      </div>

      <div>
        {/* Bedroom Section */}
        <div className="relative ">
          <div className="font-medium text-3xl xs:text-xl absolute bottom-20 left-14">
            Bedroom
          </div>
          <div className="absolute left-14 bottom-12 xs:bottom-14 ">
            <Link className="flex text-sm relative" href="/">
              Shop Now&nbsp;
              <BlackArrowRight />
              <span className="absolute top-5 left-0 border-t w-[6.3em]"></span>
            </Link>
          </div>
          <div className="">
            <Image
              src={BedroomBannerImage}
              width={548}
              alt="Bedroom Banner Image"
            />
          </div>
        </div>

        {/* Kitchen Section */}
        <div className="mt-6 relative">
          <div className="font-medium text-3xl xs:text-xl absolute bottom-20 left-14">
            Kitchen
          </div>
          <div className="absolute left-14 bottom-12 xs:bottom-14">
            <Link className="flex text-sm relative" href="/">
              Shop Now&nbsp;
              <BlackArrowRight />
              <span className="absolute top-5 left-0 border-t w-[6.3em] "></span>
            </Link>
          </div>
          <div className="">
            <Image
              width={548}
              src={KitchenBannerImage}
              loading="lazy"
              alt="Kitchen Banner Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
