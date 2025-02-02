import React, { memo, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
interface MobileNavProps {
  handleScrollToTop: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  handleSmoothScroll: (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => void;
  menuItems: { name: string; href: string }[];
}

const MobileNav: React.FC<MobileNavProps> = ({
  handleScrollToTop,
  handleSmoothScroll,
  menuItems,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => setIsOpen(!isOpen);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={
          "flex lg:hidden justify-between align-items-center gap-4 px-[30px] sticky top-[20px] z-50"
        }
      >
        <Link href="/" aria-label="Go to homepage" onClick={handleScrollToTop}>
          <Image
            src="/images/logo.svg"
            alt="Astro Genesis Logo"
            width={54}
            height={66}
            priority
          />
        </Link>
        <Image
          onClick={toggleNav}
          className={"cursor-pointer btn-nav"}
          src="/images/icon-nav.svg"
          alt="nav"
          width={50}
          height={50}
          priority
        />
      </div>
      <div
        className={`fixed w-full h-full inset-0 z-40 pt-[75px] pb-[10px] transition-all duration-300 bg-[url('/images/bg-menu.jpg')] bg-cover bg-no-repeat ${
          isOpen
            ? "opacity-100 translate-x-0 z-[100]"
            : "opacity-0 translate-x-full"
        }`}
      >
        <Image
          onClick={toggleNav}
          className={
            "cursor-pointer absolute right-[30px] top-[20px] btn-close"
          }
          src="/images/icon-close.svg"
          alt="close"
          width={38}
          height={38}
        />
        <div className="flex flex-col justify-between h-full gap-5">
          <nav className={'flex flex-col h-full justify-center'}>
            <ul className="space-y-2 tracking-wide text-center font-bold uppercase text-lg">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group">
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      handleSmoothScroll(e, item.href);
                      setIsOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <Image
              className={"m-auto mb-3"}
              src="/images/img-astrogenesis-flame.svg"
              alt="Astrogenesis"
              width={82}
              height={173}
            />
            <Image
              className={"m-auto"}
              src="/images/img-astro-genesis-typo.svg"
              alt="Astrogenesis"
              width={392}
              height={56}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(MobileNav);
