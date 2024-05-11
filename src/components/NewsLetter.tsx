import Image from "next/image";
import React from "react";
import NewsletterBackground from "../../public/images/Newsletter Background.png";

const Newsletter = () => {
  return (
    <div className="relative ">
      <Image src={NewsletterBackground} alt="Background Image" />
      <div className="flex flex-col items-center justify-center absolute top-28 right-32 left-32   ">
        <div className="text-3xl">Join Our Newsletter</div>
        <div className="pt-4">
          Sign up for deals, new products and promotions
        </div>
        <div className="border-none ">
          <input
            className="bg-transparent mt-3"
            type="email"
            name="mail"
            placeholder="Email Address"
          />
          <button className="">Sign Up</button>
        </div>
        <span className="mt-2 border w-[18em]"></span>
      </div>
    </div>
  );
};

export default Newsletter;
