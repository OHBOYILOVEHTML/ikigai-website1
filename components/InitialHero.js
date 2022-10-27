import Link from "next/link";

//import exampleCharity1 from '../images/exampleCharity1.jpg';

export default function InitialHero() {
  var message = "New blog post out now!";
  return (
    <>
      <section className="relative flex min-h-screen flex-row justify-center md:justify-start py-20 overflow-hidden">
        <div className="font-sans flex flex-col p-10 md:flex-row md:text-left">
          <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
            <div className="mx-auto max-w-md">
              <div className="divide-y divide-gray-300/50">
                <div className="p-9 space-y-3 text-base leading-7 text-gray-900 text-center sm:text-left">
                  <div className="">
                    <h2>{message}</h2>
                  </div>
                  <h1 className="text-9xl font-bold">IKIGAI</h1>
                  <h2 className="text-4xl">A conceptual project by LoveNils</h2>
                </div>
                <div className="pt-8 flex flex-col gap-y-3 md:flex-row md:gap-x-10 justify-center leading-7">
                  <Link href={"/blog"}>
                    <button className="font-semibold rounded-md py-3 px-4 border-solid border-2 border-black-300 hover:bg-gray-200">
                      Explore
                    </button>
                  </Link>
                  <button
                    type="button"
                    onclick="document.getElementById('aboutus').scrollIntoView({behavior: 'smooth'})"
                    className="rounded-md text-white px-6 bg-red-400 border-solid hover:bg-red-500"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
