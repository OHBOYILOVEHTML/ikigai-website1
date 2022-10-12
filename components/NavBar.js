// James Make Edits in Here- Create the Navbar- https://tailwindcss.com/docs/installation (See this for styling details)
import Image from 'next/image'
import profilepic from '/components/profilepic.jpeg'
export default function NavBar() {
  // <div>
  //   <Image src={profilepic} className=""/>
  // </div>
    return (
        <>
          <div className="bg-purple flex flex-row font-mono py-2 justify-center">
            <div className="flex flex-row">
              <div className="py-2 flex flex-row text-white justify-start">
                <a className="font-bold px-4 text-2xl" href="google.com">Ikigai</a>
              </div>
            </div>
            <div className="text-white flex flex-row py-3 items">
              <a className="hover:font-bold px-10 text-xl" href="google.com">Home</a>
              <a className="hover:font-bold px-10 text-xl" href="google.com">About us</a>
              <a className="hover:font-bold px-10 text-xl" href="google.com">Learn</a>
            </div>
          </div>
        </>
    )
}
