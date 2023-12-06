import React from "react";
import Link from "next/link";
import { ImFacebook, ImInstagram, ImLinkedin2 } from "react-icons/im";

const SocialLink = ({ href, label, children }) => (
  <Link legacyBehavior href={href}>
    <a aria-label={label} className="hover:text-blue-800">
      {children}
    </a>
  </Link>
);

export default function Header() {
  const socialLinks = [
    {
      href: "https://www.instagram.com/lovenils1/",
      icon: <ImInstagram className="text-white" />,
      label: "Instagram",
    },
    {
      href: "https://www.facebook.com/LOVENILS/",
      icon: <ImFacebook className="text-white" />,
      label: "Facebook",
    },
    {
      href: "https://www.linkedin.com/company/lovenils/",
      icon: <ImLinkedin2 className="text-white" />,
      label: "LinkedIn",
    },
  ];

  const titleName = "Placeholder";

  return (
    <header className="backdrop-blur-sm drop-shadow bg-opacity-20 bg-neutral-700 border-b border-neutral-700 text-white font-bold uppercase z-20 fixed w-full">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-8">
        <div className="shrink w-80 sm:order-2">
          <Link legacyBehavior href={"/"}>
            <a className="text-3xl hover:text-gray-100">{titleName}</a>
          </Link>
        </div>
        {/* <nav className="w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <Link legacyBehavior href={"/"}>
            <a className="mr-6 hover:text-gray-100">HOME</a>
          </Link>
          <Link legacyBehavior href={"/learn"}>
            <a className="hover:text-gray-100">LEARN</a>
          </Link>
        </nav> */}
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
