import Image from "next/image";
import React from "react";
import NewsletterBackground from "../../public/images/Newsletter Background.png";

const Newsletter = () => {
  return (
    <div className=" relative">
      <div className="flex items-center justify-center">
        <Image src={NewsletterBackground} alt="Background Image" />
      </div>
    </div>
  );
};

export default Newsletter;
