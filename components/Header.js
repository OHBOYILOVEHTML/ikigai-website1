import Link from "next/link";
import { ImFacebook, ImInstagram, ImLinkedin2 } from "react-icons/im";

export default function Header() {
  const instaLink = "https://www.instagram.com/lovenils1/";
  const facebookLink = "https://www.facebook.com/LOVENILS/";
  const linkedinLink = "https://www.linkedin.com/company/lovenils/";
  return (
    <header className="bg-gray-50 drop-shadow text-red-600 font-bold uppercase">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-5">
        <div className="w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <div className="flex gap-6">
            <Link href={"/"}>
              <a>HOME</a>
            </Link>
            <Link href={"/learn"}>
              <a>LEARN</a>
            </Link>
            <Link href={"/blog"}>
              <a>BLOG</a>
            </Link>
          </div>
        </div>
        <div className="shrink w-80 sm:order-2">
          <Link href={"/"}>
            <a className="text-3xl">Ikigai Project</a>
          </Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <Link href={facebookLink}>
              <a>
                <ImFacebook color="#DC2626"></ImFacebook>
              </a>
            </Link>
            <Link href={instaLink}>
              <a>
                <ImInstagram color="#DC2626"></ImInstagram>
              </a>
            </Link>
            <Link href={linkedinLink}>
              <a>
                <ImLinkedin2 color="#DC2626"></ImLinkedin2>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
