import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.webp";
export default function NavBar() {
  //edit from px-5 to pr-5: makes navbar not against side of phones
  return (
    <>
      <header className="bg-white grid grid-cols-2 sm:grid-cols-3 py-2 fixed items-center w-full z-10 drop-shadow ">
        <div className="flex flex-row font-sans font-bold text-red-600">
          <Image src={logo} width="50" height="50" alt="Our logo" />
          <a className="px-2 py-3 text-2xl" href="/">
            IKIGAI PROJECT
          </a>
        </div>
        <div className="flex flex-row gap-x-5 sm:gap-x-20 pr-5 justify-center font-sans font-bold text-red-600">
          <a className="hover:drop-shadow hover:underline text-l" href="/">
            HOME
          </a>
          <a className="hover:drop-shadow hover:underline text-l" href="/learn">
            LEARN
          </a>
          <a className="hover:drop-shadow hover:underline text-l" href="/blog">
            BLOG
          </a>
        </div>
      </header>
    </>
  );
}
