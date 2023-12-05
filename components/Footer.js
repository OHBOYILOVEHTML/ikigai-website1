import Link from "next/link";
import { ImFacebook, ImLinkedin2, ImInstagram } from "react-icons/im";

const SocialLink = ({ href, label, children }) => (
  <Link legacyBehavior href={href}>
    <a aria-label={label} className="text-gray-400 hover:text-gray-500">
      {children}
    </a>
  </Link>
);

export default function Footer() {
  const socialLinks = [
    {
      href: "https://www.instagram.com/lovenils1/",
      icon: <ImInstagram />,
      label: "Instagram",
    },
    {
      href: "https://www.facebook.com/LOVENILS/",
      icon: <ImFacebook />,
      label: "Facebook",
    },
    {
      href: "https://www.linkedin.com/company/lovenils/",
      icon: <ImLinkedin2 />,
      label: "LinkedIn",
    },
  ];

  return (
    <>
      <footer className="bg-neutral-800">
        <div className="container mx-auto flex justify-center py-4">
          <div className="py-5">
            <div className="flex gap-6 justify-center">
              {socialLinks.map(({ href, icon, label }) => (
                <SocialLink key={href} href={href} label={label}>
                  {icon}
                </SocialLink>
              ))}
            </div>
            <nav className="flex flex-row pt-5 text-gray-400 gap-8">
              <Link legacyBehavior href="/">
                <a className="hover:text-gray-500">Home</a>
              </Link>
              <Link legacyBehavior href="/learn">
                <a className="hover:text-gray-700">Learn</a>
              </Link>
            </nav>
          </div>
        </div>
      </footer>
      <footer className="py-6 text-center bg-neutral-900 text-white">
        Designed by HSB
      </footer>
    </>
  );
}
