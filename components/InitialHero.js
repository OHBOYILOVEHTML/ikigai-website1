import Image from 'next/image'
import Link from 'next/link'

import exampleCharity1 from '../images/exampleCharity1.jpg';

export default function InitialHero() {

    const loveNilsLink = "https://www.lovenils.org/";
    var message="New blog post out now!"
    return (
        <>
            <section className="relative flex min-h-screen flex-row justify-center py-20 overflow-hidden">
                <div className="font-sans flex flex-col p-10 md:flex-row md:text-left">
                        <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                            <div class="mx-auto max-w-md">
                                <div class="divide-y divide-gray-300/50">
                                <div className='p-9 space-y-3 text-base leading-7 text-gray-900'>
                                    <div className=""><h2>{message}</h2></div>
                                    <h1 className="text-9xl font-bold">IKIGAI</h1>
                                    <h2 className="text-4xl pt-5">A conceptual project by LoveNils</h2>
                                    <div className='pt-5 flex flex-col gap-y-3 md:flex-row md:gap-x-5'>
                                        <Link href={loveNilsLink}><button className='rounded-md px-6 bg-sky-200 border-black'>Learn more</button></Link>
                                        <button className='py-3 px-4 rounded-sm border border-white'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
