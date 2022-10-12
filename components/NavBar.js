// James Make Edits in Here- Create the Navbar- https://tailwindcss.com/docs/installation (See this for styling details)
import Image from 'next/image'
import profilepic from '/components/profilepic.jpeg'
export default function NavBar() {

    return (
        <>
          <div className="bg-purple z-1 flex flex-row font-mono">
            <div className="flex flex-row">
              <div>
                <Image src={profilepic} className=""/>
              </div>
              <div>
                <h1 className="font-bold px-5 text-2xl text-white flex flex-row py-2">Ikigai</h1>
              </div>
            </div>
            <div className="text-white flex flex-row py-2 items-stretch ">
              <h2 className="hover:font-bold px-10">Home</h2>
              <h2 className="hover:font-bold px-10">About us</h2>
              <h2 className="hover:font-bold px-10">Learn</h2>
            </div>
          </div>
        </>
    )
}
