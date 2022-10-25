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
          <header className="bg-teal-300 flex flex-row py-2 justify-between items-center fixed w-full z-10">
            <div className="flex flex-row">
            <div className="px-1">
              <Image src={logo} width="50" height="50" alt="Our logo"/>
            </div>
              <div className="py-3 flex flex-row text-black">
                <a className="font-bold px-4 text-2xl" href="/">Ikigai</a>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div className="text-black flex flex-row py-3 items justify-left">
              <a className="hover:font-bold px-10 text-xl" href="google.com">Home</a>
              <a className="hover:font-bold px-10 text-xl" href="google.com">About us</a>
              <a className="hover:font-bold px-10 text-xl" href="google.com">Learn</a>
              <a className="hover:font-bold px-10 text-xl" href="google.com">Blog</a>
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
