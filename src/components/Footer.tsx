import React from "react";
import Image from "next/image";

const SocialIcon = ({
  href,
  src,
  alt,
}: {
  href: string;
  src: string;
  alt: string;
}) => (
  <a
    className="inline-block w-[66px] h-[66px] lg:w-[81px] lg:h-[81px]"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image src={src} alt={alt} width={81} height={81} />
  </a>
);

const Footer = () => {
  return (
    <footer className={"mb-10 text-tiny md:text-base"}>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 font-medium items-end ">
        <div className={"text-center md:text-left"}>
          <div className={"mb-1 lg:mb-0"}>© 2024-2025 AstroNFT</div>
          <div className={"flex xl:hidden justify-center md:justify-start"}>
            <div className="flex gap-4">
              <span>Privacy Policy</span>
              <span>|</span>
              <span>Terms and Conditions</span>
            </div>
          </div>
        </div>
        <div className={"hidden xl:flex justify-center"}>
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>|</span>
            <span>Terms and Conditions</span>
          </div>
        </div>
        <div className="flex justify-center md:justify-end order-first md:order-last">
          <div className="flex gap-4">
            <SocialIcon
              href="https://discord.com"
              src="/images/icon-discord-social.svg"
              alt="Discord"
            />
            <SocialIcon
              href="https://twitter.com"
              src="/images/icon-x-social.svg"
              alt="X social"
            />
            <SocialIcon
              href="https://t.me"
              src="/images/icon-telegram-social.svg"
              alt="Telegram"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
