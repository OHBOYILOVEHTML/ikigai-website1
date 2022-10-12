// James Make Edits in Here- Create the Navbar- https://tailwindcss.com/docs/installation (See this for styling details)
import Image from 'next/image'
import profilepic from '/components/profilepic.aspx.jpg'
export default function NavBar() {

    return (
        <>
          <div>
            <h1 className="bg-midnight">Ikigai</h1>
            <h2>Home</h2>
            <h2>About us</h2>
            <h2>Learn</h2>
            <Image src={profilepic}/>
          </div>
        </>
    )
}
