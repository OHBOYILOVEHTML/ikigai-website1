import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.webp";

export default function Header() {
  return (
    <header className="w-full bg-white drop-shadow fixed z-10 text-red-600 py-2">
      <nav className="container flex flex-row">
        <div className="logo object-fit">
          <Image src={logo} width="50" height="50" alt="Ikigai Project Logo" />
        </div>
        <Link href="/">
          <a className="px-2 py-3 text-2xl">IKIGAI PROJECT</a>
        </Link>
        <div className="nav-menu links text-center px-5 mr-auto">
          <nav className="menus flex flex-row">
            <ul className="primary-routes">
              <Link href="/">
                <a className="flex-1 p-4 hover:underline hover:drop-shadow px-5">
                  HOME
                </a>
              </Link>
              <Link href="/learn">
                <a className="flex-1 p-4 hover:underline hover:drop-shadow px-5">
                  LEARN
                </a>
              </Link>
              <Link href="/blog">
                <a className="flex-1 p-4 hover:underline hover:drop-shadow px-5">
                  BLOG
                </a>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="flex-row pt-4 px-5">
          <Link href="/login">
            <a className="font-semibold rounded-md py-3 px-6 text-black hover:drop-shadow">
              Log in
            </a>
          </Link>
          <Link href="/signup">
            <a className="font-semibold rounded-md py-3 px-4 text-white bg-red-500 hover:bg-red-600">
              Sign up
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
