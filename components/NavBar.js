// James Make Edits in Here- Create the Navbar- https://tailwindcss.com/docs/installation (See this for styling details)
import Image from 'next/image'
import Link from 'next/link'
import profilepic from '/components/profilepic.jpeg'
export default function NavBar() {
  // <div>
  //   <Image src={profilepic} className=""/>
  // </div>
//learn --> blog, videos, lessons
  //EMPTY DIVS ARE IMPORTANT PLS DONT MAKE ME REMOVE THEM

    return (
        <>
          <header className="bg-purple flex flex-row font-mono py-2 justify-between items-center sticky top-0 z-50">
            <div className="flex flex-row">
              <div className="py-2 flex flex-row text-white">
                <a className="font-bold px-4 text-2xl" href="google.com">Ikigai</a>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div className="text-white flex flex-row py-3 items justify-left">
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
