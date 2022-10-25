// Zach has comendeered this component- do not attempt to edit, no not make a merge error
import Link from 'next/link';
import Image from 'next/image';

import logo from '../images/logo.png';

export default function Footer() {
    return (
      <>
        <div className="bg-teal-300 px-9 text-black">
            <div className="flex flex-col p-9 gap-x-64 items-center justify-between lg:flex-row">
                <div className="flex flex-col">
                    <div className="w-48"><Image src={logo} alt="Ikigai Logo" /></div>
                    <p>Ikigai Project By Lovenils</p>
                </div>
                <div className="px-9 flex flex-row gap-x-20">
                    <div className="flex flex-col pt-5">
                        <h1 className="font-bold"><Link href='/'>Home</Link></h1>
                        <Link href=''>For Donations</Link>
                        <Link href=''>For Learners</Link>
                    </div>

                    <div className="flex flex-col pt-5">
                        <h1 className="font-bold"><Link href='/aboutus'>About Us</Link></h1>
                        <Link href=''>Lovenils</Link>
                        <Link href=''>Cookies Policy</Link>
                    </div>

                    <div className="flex flex-col pt-5">
                        <h1 className="font-bold"><Link href='/aboutus'>About Us</Link></h1>
                        <Link href=''>Blog</Link>
                        <Link href=''>Videos</Link>
                    </div>

                    <div className="flex flex-col pt-5">
                        <h1 className="font-bold">Social Media</h1>
                        <Link href=''>Twitter</Link>
                        <Link href=''>Youtube</Link>
                        <Link href=''>Instagram</Link>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}
