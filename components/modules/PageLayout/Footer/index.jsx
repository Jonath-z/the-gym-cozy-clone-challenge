import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <Image
        src="/vectors/logo-footer.svg"
        width={72.81}
        height={50}
        alt="logo - footer"
      />

      <div>
        <p>About</p>
        <p>Services</p>
        <p>Work</p>
        <p>Blog</p>
        <p>Contact</p>

        <div>
          <p>
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
