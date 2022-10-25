import Image from 'next/image'
import Link from 'next/link'

import exampleCharity1 from '../images/exampleCharity1.jpg';

export default function InitialHero() {

    const loveNilsLink = "https://www.lovenils.org/";

    return (
        <>
            <section className="w-screen items-center py-20 text-black">
                <div className="flex flex-col items-center justify-center p-20 md:flex-row md:text-left">
                    <div className='p-9'>
                        <div className=''><h2>New Blog Post Out Now</h2></div>
                        <h1 className="text-9xl font-bold">Ikigai</h1>
                        <h2 className="text-4xl pt-5">A conceptual project by LoveNils</h2>
                        <div className='pt-5 flex flex-col gap-y-3 md:flex-row md:gap-x-5'>
                            <Link href={loveNilsLink}><button className='rounded-md px-6 bg-sky-200 border-black'>Learn more</button></Link>
                            <button className='py-3 px-4 rounded-sm border border-white'>Explore</button>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <Image src={exampleCharity1} />
                    </div>
                </div>
            </section>
        </>
    )
}
