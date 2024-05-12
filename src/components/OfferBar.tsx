import React from "react";
import { RightArrow, TicketPercent } from "./Icons";
import Link from "next/link";

const OfferBar = () => {
  return (
    <div className="flex items-center justify-center h-8 py-5 bg-light-blue text-[13px]  ">
      <TicketPercent /> &nbsp; 30% off storewide - Limited time! &nbsp;
      <div className=" text-blue relative ">
        <Link className="flex" href="/">
          Shop Now&nbsp;
          <RightArrow />
          <span className="absolute top-[19px] left-0 border w-[6.4em]"></span>
        </Link>
      </div>
    </div>
  );
};

export default OfferBar;
