// James Make Edits in Here- Create the Navbar- https://tailwindcss.com/docs/installation (See this for styling details)
import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/logo.webp'
export default function NavBar() {
  // <div>
  //   <Image src={profilepic} className=""/>
  // </div>
//learn --> blog, videos, lessons
  //EMPTY DIVS ARE IMPORTANT PLS DONT MAKE ME REMOVE THEM
// <Image className=""><\Image>
    return (
        <>
          <header className="bg-white flex flex-row py-2 fixed justify-between items-center w-full z-10 drop-shadow font-sans font-bold text-red-600">
            <div className="px-1 flex flex-row">
              <Image src={logo} width="50" height="50" alt="Our logo"/>
              <a className="px-2 py-3 text-2xl" href="/">IKIGAI</a>
            </div>
            <div className="flex flex-row gap-x-20 px-10 justify-center">
              <a className="hover:drop-shadow hover:underline text-l" href="/">HOME</a>
              <a className="hover:drop-shadow hover:underline text-l" href="/learn">LEARN</a>
              <a className="hover:drop-shadow hover:underline text-l" href="/blog">BLOG</a>
            </div>
          </header>
        </>
    )
}
