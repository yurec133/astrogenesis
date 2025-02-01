import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

const menuItems: { name: string; href: string }[] = [
  { name: "ABOUT", href: "#about" },
  { name: "GET ASTRO", href: "#astro" },
  { name: "TOKENOMICS", href: "#tokenomics" },
  { name: "ROADMAP", href: "#roadmap" },
  { name: "AIRDROP (soon)", href: "#airdrop" },
];

const DesktopNav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  useEffect(() => {
    const currentHash = window.location.hash;
    if (currentHash) {
      setActiveLink(currentHash);
    }

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveLink(null);
      } else {
        setIsSticky(window.scrollY > 100);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry.target.id);
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 },
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", handleScroll);
    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop =
        target.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setActiveLink(href);
  };

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveLink(null);
  };

  return (
    <header
      className={clsx(
        "hidden lg:flex mt-[40px] relative max-w-full z-50 mx-[40px] 2xl:m-auto min-h-[80px] 2xl:w-[1468px] rounded-full items-center justify-center transition-all duration-300",
        {
          "bg-card-light-purple-gradient sticky top-[20px]": isSticky,
        },
      )}
    >
      <div className="absolute left-[50px] top-1/2 -translate-y-1/2 transition-all duration-300">
        <Link href="/" aria-label="Go to homepage" onClick={handleScrollToTop}>
          <Image
            src="/images/logo.svg"
            alt="Astro Genesis Logo"
            width={isSticky ? 47 : 80}
            height={isSticky ? 56 : 97}
            priority
          />
        </Link>
      </div>
      <nav>
        <ul className="flex justify-center gap-11 font-bold uppercase tracking-tighter">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link
                href={item.href}
                className={clsx("transition", {
                  "text-yellow-300": activeLink === item.href,
                  "xl:hover:text-yellow-300": activeLink !== item.href,
                })}
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                {item.name}
              </Link>
              <span
                className={clsx(
                  "absolute left-1/2 bottom-[-10px] h-[6px] w-[18px] -translate-x-1/2 scale-0 rounded-full bg-yellow-300 transition-transform duration-300",
                  { "scale-100": activeLink === item.href },
                )}
              ></span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default DesktopNav;
