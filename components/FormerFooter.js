// Zach has comendeered this component- do not attempt to edit, no not make a merge error
import Link from "next/link";
import Image from "next/image";

import logo from "../public/logo.webp";

export default function Footer() {
  const instaLink = "https://www.instagram.com/lovenils1/";
  const facebookLink = "https://www.facebook.com/LOVENILS/";
  const linkedinLink = "https://www.linkedin.com/company/lovenils/";
  const lovenilsLink = "https://www.lovenils.org/";
  const donationsLink = "https://www.giving.sg/campaigns/theikigaiproject2023";
  const volunteersLink = "https://www.lovenils.org/volunteer";
  const privacyPolicy = "https://www.lovenils.org/privacy-policy";

  return (
    <div className="bg-white px-9 md:px-1 text-black text-center md:text-left">
      <div className="flex flex-col md:flex-row lg:flex-row p-9 gap-x-1 sm:gap-x-15 md:gap-x-20 lg:gap-x-40 items-center justify-between">
        <div className="flex flex-col">
          <div className="w-48 md:w-24 lg:w-48">
            <Image src={logo} alt="Ikigai Logo" />
          </div>
          <p>Ikigai Project By Lovenils</p>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row gap-x-1 md:gap-x-20 lg:gap-x-20">
          <div className="flex flex-col pt-5">
            <h1 className="font-bold">
              <Link href="/">Home</Link>
            </h1>
            <Link href={donationsLink}>For Donations</Link>
            <Link href={volunteersLink}>For Volunteers</Link>
          </div>

          <div className="flex flex-col pt-5">
            <h1 className="font-bold">
              <Link href="/">About Us</Link>
            </h1>
            <Link href={lovenilsLink}>LoveNils</Link>
            <Link href={privacyPolicy}>Cookies Policy</Link>
          </div>

          <div className="flex flex-col pt-5">
            <h1 className="font-bold">
              <Link href="/">Home</Link>
            </h1>
            <Link href="/learn">Learn</Link>
            <Link href="/blog">Blog</Link>
          </div>

          <div className="flex flex-col pt-5">
            <h1 className="font-bold">Social Media</h1>
            <Link href={instaLink}>Instagram</Link>
            <Link href={facebookLink}>Facebook</Link>
            <Link href={linkedinLink}>LinkedIn</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
