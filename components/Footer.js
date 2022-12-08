import Link from "next/link";
import { ImFacebook, ImLinkedin2, ImInstagram } from "react-icons/im";

export default function Footer() {
  const instaLink = "https://www.instagram.com/lovenils1/";
  const facebookLink = "https://www.facebook.com/LOVENILS/";
  const linkedinLink = "https://www.linkedin.com/company/lovenils/";
  const lovenilsLink = "https://www.lovenils.org/";
  const donationsLink = "https://www.giving.sg/campaigns/theikigaiproject2023";
  const volunteersLink = "https://www.lovenils.org/volunteer";
  const privacyPolicy = "https://www.lovenils.org/privacy-policy";

  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href={facebookLink}>
              <a>
                <ImFacebook color="#888888"></ImFacebook>
              </a>
            </Link>
            <Link href={instaLink}>
              <a>
                <ImInstagram color="#888888"></ImInstagram>
              </a>
            </Link>
            <Link href={linkedinLink}>
              <a>
                <ImLinkedin2 color="#888888"></ImLinkedin2>
              </a>
            </Link>
          </div>
          <div className="flex flex-row pt-5 text-gray-500 gap-8">
            <div className="flex flex-col">
              <h1 className="font-bold">
                <Link href={"/"}>Home</Link>
              </h1>
              <Link href={donationsLink}>For Donations</Link>
              <Link href={volunteersLink}>For Volunteers</Link>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold">
                <Link href="/">About Us</Link>
              </h1>
              <Link href={lovenilsLink}>LoveNils</Link>
              <Link href={privacyPolicy}>Cookies Policy</Link>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold">
                <Link href="/">Home</Link>
              </h1>
              <Link href="/learn">Learn</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
