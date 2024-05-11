import React from "react";
import { ShippingIcon } from "./Icons";

const Values = () => {
  return (
    <div className="flex py-8 px-24 justify-around">
      <div className=" rounded-md bg-light-blue px-8 py-8">
        <div>
          <ShippingIcon />
        </div>
        <div className="my-3 font-medium text-[18px]">Free Shipping</div>
        <div className="text-xs">Order above 499 ₹</div>
      </div>
      <div className=" rounded-md bg-light-blue px-8 py-8">
        <div>
          <ShippingIcon />
        </div>
        <div className="my-3 font-medium text-[18px]">Free Shipping</div>
        <div className="text-xs">Order above 499 ₹</div>
      </div>
      <div className=" rounded-md bg-light-blue px-8 py-8">
        <div>
          <ShippingIcon />
        </div>
        <div className="my-3 font-medium text-[18px]">Free Shipping</div>
        <div className="text-xs">Order above 499 ₹</div>
      </div>
      <div className=" rounded-md bg-light-blue px-8 py-8">
        <div>
          <ShippingIcon />
        </div>
        <div className="my-3 font-medium text-[18px]">Free Shipping</div>
        <div className="text-xs">Order above 499 ₹</div>
      </div>
    </div>
  );
};

export default Values;
