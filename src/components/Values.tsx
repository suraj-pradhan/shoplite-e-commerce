import React from "react";
import { PaymentIcon, ShippingIcon } from "./Icons";

const Values = () => {
  return (
    <div className="flex py-6 gap-10 xs:gap-2 xs:flex-col justify-center flex-wrap">
      <div className="flex gap-10 xs:gap-3">
        <div className=" rounded-md bg-light-blue px-8 py-8 w-56 xs:w-44">
          <div>
            <ShippingIcon />
          </div>
          <div className="my-3 font-medium text-[18px] xs:text-[16px]">
            Free Shipping
          </div>
          <div className="text-xs">Order above 499 ₹</div>
        </div>

        <div className="rounded-md bg-light-blue px-8 py-8 w-56 xs:w-44">
          <div>
            <PaymentIcon />
          </div>
          <div className="my-3 font-medium text-[18px] xs:text-[16px]">
            Money-back
          </div>
          <div className="text-xs">30 days guarantee</div>
        </div>
      </div>

      <div className="flex gap-10 xs:gap-2">
        <div className="rounded-md bg-light-blue px-8 py-8 w-56 xs:w-44 ">
          <div>
            <ShippingIcon />
          </div>
          <div className="my-3 font-medium text-[18px] xs:text-[16px]">
            Secure Payments
          </div>
          <div className="text-xs">Secured by Stripe</div>
        </div>
        <div className=" rounded-md bg-light-blue px-8 py-8 w-56 xs:w-44">
          <div>
            <ShippingIcon />
          </div>
          <div className="my-3 font-medium text-[18px] xs:text-[16px]">
            24/7 Support
          </div>
          <div className="text-xs">Phone & Email Support</div>
        </div>
      </div>
    </div>
  );
};

export default Values;
