import React from "react";
import Image from "next/image";

const Logos = () => {
  return (
    <div className="mt-4">
      <p className="flex items-center justify-center gap-2 text-13 font-fraunces text-primary-red font-medium">
        <span>
          <Image
            src="/images/footer-comapany-lo.webp"
            width={20}
            height={20}
            alt="logo company"
          />
        </span>
        <span>San Diego Digital Designers</span>
      </p>
      <div className="flex gap-2 py-5">
        <div className="h-6 w-6  flex justify-center bg-tweeter-blue items-center rounded border-b border-gray-600">
          <Image
            src="/vectors/tweeter.svg"
            alt="tweeter icon"
            width={12}
            height={12}
          />
        </div>
        <div className="h-6 w-6 bg-linkedin-blue flex justify-center items-center rounded border-b border-gray-600">
          <Image
            src="/vectors/linkedin.svg"
            alt="tweeter icon"
            width={12}
            height={12}
          />
        </div>

        <div className="h-6 w-6 bg-facebook-blue flex justify-center items-center rounded border-b border-gray-600">
          <Image
            src="/vectors/facebook.svg"
            alt="tweeter icon"
            width={12}
            height={12}
          />
        </div>
        <div className="h-6 w-6 bg-instagram-red flex justify-center items-center rounded border-b border-gray-600">
          <Image
            src="/vectors/instagram.svg"
            alt="tweeter icon"
            width={12}
            height={12}
          />
        </div>
        <div className="h-6 w-6 bg-youtube-red flex justify-center items-center rounded border-b border-gray-600">
          <Image
            src="/vectors/youtube.svg"
            alt="tweeter icon"
            width={12}
            height={12}
          />
        </div>
        <div className="h-6 w-6 bg-clutch-dark-blue flex justify-center items-center rounded border-b border-gray-600">
          <Image
            src="/vectors/clutch.svg"
            alt="tweeter icon"
            width={12}
            height={12}
          />
        </div>
        <div className="h-6 w-6 bg-envelope-slate flex justify-center items-center rounded border-b border-gray-600">
          <Image
            src="/vectors/envelope.svg"
            alt="tweeter icon"
            width={12}
            height={12}
          />
        </div>
      </div>
    </div>
  );
};

export default Logos;
