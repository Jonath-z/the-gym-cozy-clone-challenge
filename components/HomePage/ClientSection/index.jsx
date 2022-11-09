import Image from "next/image";
import React from "react";
import DeskWraper from "../../modules/Layouts/DeskWrapper";

const ClientSection = () => {
  return (
    <div className="bg-hero-text px-5">
      <DeskWraper>
        <div className="py-16 lg:max-w-3xl lg:mx-auto xl:max-w-1200 xl:px-20">
          <div>
            <div className="flex flex-col gap-10 justify-center items-center">
              <h1 className="text-2xl leading-8 font-fraunces font-semibold text-primary-blue md:text-61 md:py-24">
                ❤️ from our clients
              </h1>
              <div className="w-10 h-1 bg-primary-chocolate" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-10 md:gap-5 px-5 mt-20 relative">
              <div className="absolute h-20 w-20 bg-hero-text m-auto inset-0 flex justify-center items-center rounded-full">
                <Image
                  src="/vectors/chat-icon.svg"
                  alt="chat icon"
                  width={32}
                  height={32}
                />
                <div className="absolute -inset-2 border-2 border-hero-text rounded-full opacity-70" />
                <div className="absolute -inset-4 border-2 border-hero-text rounded-full opacity-30" />
              </div>
              <div className="bg-primary-blue shadow-2xl shadow-primary-blue bg-grain bg-grain-size text-right flex flex-col gap-4 pr-10 pl-16 py-20 rounded-tr-8/10 rounded-tl-8/10 rounded-bl-1/1 md:h-fit md:mt-auto">
                <Image
                  src="/images/client1.webp"
                  alt="client 1"
                  width={80}
                  height={80}
                  className="border-3 border-white rounded-3xl mx-auto"
                />
                <h3 className="font-fraunces font-semibold text-20 text-primary-chocolate mt-6">
                  “One of the top design <br /> professionals…”
                </h3>
                <p className="font-fraunces text-18 text-hero-text font-normal">
                  I connect with hundreds of talented folks on a regular basis,
                  and I can say with complete confidence that Lee is one of the
                  best UX designers in Aquent/Vitamin T&apos;s global network.
                </p>

                <div>
                  <p className="uppercase text-hero-text text-12 font-poppins font-bold tracking-4">
                    Susie Pollasky
                  </p>
                  <p className="text-hero-text opacity-70 font-poppins text-12 leading-4 mt-1">
                    Now: Leadership Recruiting @ Product Design at <br />{" "}
                    Facebook
                  </p>
                </div>
              </div>
              {/* ------------------------------------------------------ */}
              <div className="bg-card-slate shadow-2xl shadow-card-slate bg-grain bg-grain-size text-left flex flex-col gap-4 pr-10 pl-16 py-20 rounded-tr-1/1 rounded-tl-1/1 rounded-br-5/10 lg:mr-10 xl:mr-28">
                <Image
                  src="/images/client2.webp"
                  alt="client 1"
                  width={80}
                  height={80}
                  className="border-3 border-white rounded-3xl mx-auto"
                />
                <h3 className="font-fraunces font-semibold text-20 text-primary-chocolate mt-6">
                  “They’re a very well-
                  <br />
                  rounded organization…”
                </h3>
                <p className="font-fraunces text-18 text-hero-text font-normal">
                  Cost per conversion and all of those metrics have dropped
                  significantly. We used to pay an average of $100 per lead that
                  converts… now we have that down to about $20. Sessions and
                  contacts have also gone up astronomically, at least threefold.
                  Organic search and social media referrals have all continued
                  to skyrocket. We’re really pleased.
                </p>

                <div>
                  <p className="uppercase text-hero-text text-12 font-poppins font-bold tracking-4">
                    Martin Spritzer
                  </p>
                  <p className="text-hero-text opacity-70 font-poppins text-12 leading-4 mt-1">
                    General Manager @ iQuoteXpress
                  </p>
                </div>
              </div>
              {/*--------------------------------------------------------- */}
              <div className="bg-secondary-chocolate shadow-2xl shadow-secondary-chocolate bg-grain bg-grain-size text-right flex flex-col gap-4 pr-10 pl-16 py-20 rounded-tl-1/1 rounded-br-6/10 rounded-bl-6/10 md:h-fit md:mb-auto lg:ml-14 xl:ml-28">
                <Image
                  src="/images/client3.webp"
                  alt="client 1"
                  width={80}
                  height={80}
                  className="border-3 border-white rounded-3xl ml-auto"
                />
                <h3 className="font-fraunces font-bold text-20 text-hero-text mt-6">
                  “They&apos;re just good people.”
                </h3>
                <p className="font-fraunces text-18 text-hero-text font-normal">
                  They were a pleasure to work with and I&apos;m really happy
                  with the results. They pretty much nailed it.
                </p>

                <div>
                  <p className="uppercase text-hero-text text-12 font-poppins font-bold tracking-4">
                    Eric weiss
                  </p>
                  <p className="text-hero-text opacity-70 font-poppins text-12 leading-4 mt-1">
                    Founder @ Full Cycle Product Development
                  </p>
                </div>
              </div>
              {/* ------------------------------------------------------------ */}
              <div className="bg-dark-chocolate shadow-2xl shadow-dark-chocolate secondary-chocolate bg-grain bg-grain-size text-left flex flex-col gap-4 pr-10 pl-16 py-20 rounded-tr-1/1 rounded-br-6/10 rounded-bl-6/10 md:h-fit md:mb-auto">
                <Image
                  src="/images/client4.webp"
                  alt="client 1"
                  width={80}
                  height={80}
                  className="border-3 border-white rounded-3xl mr-auto"
                />
                <h3 className="font-fraunces font-bold text-20 text-hero-text mt-6">
                  “The project was successful”
                </h3>
                <p className="font-fraunces text-18 text-hero-text font-normal">
                  They strive to come up with good design, and they focus on all
                  the right things. The quality of their work is high, and all
                  the deliverables are very well-organized and professional.
                </p>

                <div>
                  <p className="uppercase text-hero-text text-12 font-poppins font-bold tracking-4">
                    Michael Weisfeld
                  </p>
                  <p className="text-hero-text opacity-70 font-poppins text-12 leading-4 mt-1">
                    Director of Digital Marketing @ National Funding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DeskWraper>
    </div>
  );
};

export default ClientSection;
