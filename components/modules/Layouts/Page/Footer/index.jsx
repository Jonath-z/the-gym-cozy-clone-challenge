import Image from "next/image";
import Logos from "./Logos";
import Parteners from "./Parteners";

const Footer = () => {
  return (
    <div className="bg-hero-text flex flex-col justify-center items-center py-16 md:items-stretch md:px-10">
      <div className="md:flex md:justify-between md:items-center md:pb-10">
        <div className="flex flex-col justify-center items-center md:flex-row md:gap-10">
          <Image
            src="/vectors/logo-footer.svg"
            width={72.81}
            height={50}
            alt="logo - footer"
          />
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 text-13 font-fraunces font-medium text-dark-chocolate my-5 pt-2">
            <p>About</p>
            <p>Services</p>
            <p>Work</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Logos />
        </div>
      </div>
      <div className="md:flex md:justify-between border-t-2 py-10 border-primary-chocolate">
        <Parteners />
        <div>
          <p className="flex items-center justify-center gap-1 text-12 font-fraunces font-normal text-primary-blue mt-10">
            Made with
            <span>
              <Image
                src="/vectors/heart.svg"
                width={12}
                height={16}
                alt="heart icon"
              />
            </span>
            in beautiful, sunny San Diego. ©2021
          </p>

          <p className="flex justify-center gap-10 mt-10 items-center font-fraunces font-normal text-12 text-dark-chocolate">
            <span>Privacy</span>
            <span>Photo credit</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
