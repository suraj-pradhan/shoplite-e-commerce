import React from "react";
import { RightArrow, TicketPercent } from "./Icons";

const OfferBar = () => {
  return (
    <div className="flex items-center justify-center h-8 py-5 bg-light-blue font text-sm">
      <TicketPercent /> &nbsp; 30% off storewide - Limited time! &nbsp;
      <span className="underline underline-offset-[6px] text-blue ">
        <a href="http://">Shop Now</a>
      </span>
      &nbsp;
      <RightArrow />
    </div>
  );
};

export default OfferBar;
