import React from "react";
import Image from "next/image";

const HappyClient = () => {
  return (
    <div className="bg-primary-blue py-16 md:px-20">
      <div>
        <div>
          <h1 className=" font-fraunces text-primary-chocolate font-normal text-30 italic text-center ">
            More than 150 happy <br className="md:hidden" /> clients
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-10 justify-center items-center mt-10">
          <Image
            src="/vectors/happy-client1.svg"
            width={93.55}
            height={32}
            alt="happyClient1"
            className="mx-auto"
          />
          <Image
            src="/vectors/happy-client2.svg"
            width={105.25}
            height={32}
            alt="happyClient2"
            className="mx-auto"
          />
          <Image
            src="/vectors/happy-client3.svg"
            width={150}
            height={32}
            alt="happyClient3"
            className="mx-auto"
          />
          <Image
            src="/vectors/happy-client4.svg"
            width={86.32}
            height={32}
            alt="happyClient3"
            className="mx-auto"
          />
          <Image
            src="/vectors/happy-client5.svg"
            width={120.32}
            height={32}
            alt="happyClient3"
            className="mx-auto"
          />
          <Image
            src="/vectors/happy-client6.svg"
            width={100.32}
            height={32}
            alt="happyClient3"
            className="mx-auto"
          />
          <Image
            src="/vectors/happy-client7.svg"
            width={54.32}
            height={32}
            alt="happyClient3"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HappyClient;
