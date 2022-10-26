// James Make Edits in Here- Create the Navbar- https://tailwindcss.com/docs/installation (See this for styling details)
import Image from 'next/image'
import Link from 'next/link'
import logo from '/images/logo.png'
export default function NavBar() {
  // <div>
  //   <Image src={profilepic} className=""/>
  // </div>
//learn --> blog, videos, lessons
  //EMPTY DIVS ARE IMPORTANT PLS DONT MAKE ME REMOVE THEM
// <Image className=""><\Image>
    return (
        <>
          <header className="bg-white flex flex-row py-2 justify-between items-center fixed w-full z-10 drop-shadow">
            <div className="flex flex-row">
            <div className="px-1">
              <Image src={logo} width="50" height="50" alt="Our logo"/>
            </div>
              <div className="py-3 flex flex-row text-red-600">
                <a className="font-sans font-bold px-4 text-2xl" href="/">IKIGAI</a>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div className="font-sans font-bold text-red-600 flex flex-row py-3 items justify-left">
              <a className="hover:drop-shadow px-10 text-l" href="/">HOME</a>
              <a className="hover:drop-shadow px-10 text-l" href="/aboutus">ABOUT US</a>
              <a className="hover:drop-shadow px-10 text-l" href="/learn">LEARN</a>
              <a className="hover:drop-shadow px-10 text-l" href="/blog">BLOG</a>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </header>
        </>
    )
}
