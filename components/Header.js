import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ImFacebook, ImInstagram, ImLinkedin2 } from "react-icons/im";

const SocialLink = ({ href, label, children }) => (
  <Link href={href}>
    <a aria-label={label} className="hover:text-blue-800">
      {children}
    </a>
  </Link>
);

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down and past 100 pixels
      setIsVisible(false);
    } else if (currentScrollY < lastScrollY && lastScrollY > 100) {
      // Scrolling up and past 100 pixels
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const socialLinks = [
    {
      href: "https://www.instagram.com/lovenils1/",
      icon: <ImInstagram className="text-blue-700" />,
      label: "Instagram",
    },
    {
      href: "https://www.facebook.com/LOVENILS/",
      icon: <ImFacebook className="text-blue-700" />,
      label: "Facebook",
    },
    {
      href: "https://www.linkedin.com/company/lovenils/",
      icon: <ImLinkedin2 className="text-blue-700" />,
      label: "LinkedIn",
    },
  ];

  const titleName = "Placeholder";

  return (
    <header
      className={`bg-white text-blue-700 font-bold uppercase drop-shadow z-10 fixed w-full transition-transform duration-300 ${
        !isVisible ? "-translate-y-full" : ""
      }`}
    >
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="shrink w-80 sm:order-2">
          <Link href={"/"}>
            <a className="text-3xl hover:text-blue-800">{titleName}</a>
          </Link>
        </div>
        <nav className="w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <Link href={"/"}>
            <a className="mr-6 hover:text-blue-800">HOME</a>
          </Link>
          <Link href={"/learn"}>
            <a className="hover:text-blue-800">LEARN</a>
          </Link>
        </nav>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            {socialLinks.map(({ href, icon, label }) => (
              <SocialLink key={href} href={href} label={label}>
                {icon}
              </SocialLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
