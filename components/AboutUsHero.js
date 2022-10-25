import Image from 'next/image'
import Link from 'next/link'

export default function InitialHero() {
    return (
        <>
            <section className="w-screen items-center p-9 text-black">
                <div className="flex flex-col text-center p-9 md:flex-row md:text-left">
                    <div className='p-9'>
                        <div className=''><h2>New Blog Post Out Now</h2></div>
                        <h1 className="text-9xl font-bold">Ikigai</h1>
                        <h2 className="text-4xl pt-5">A conceptual project by LoveNils</h2>
                        <div className='pt-5 flex flex-col gap-y-3 md:flex-row md:gap-x-5'>
                            <button className='rounded-md bg-sky-200 border-black'>Learn more</button>
                            <button className='py-3 px-4 rounded-sm border border-white'>Explore</button>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </section>
        </>
    )
}
