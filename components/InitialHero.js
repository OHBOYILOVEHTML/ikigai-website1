import Link from "next/link";
//import Image from "next/image";
import { useRef } from "react";

export default function InitialHero() {
  // Use the useRef hook to create a reference to the element that you want to scroll to
  const aboutUsRef = useRef(null);

  function scroll() {
    // Use the scrollIntoView method on the element to scroll to it
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  }

  var message = "New blog post out now!";
  return (
    <section className="relative flex min-h-screen flex-col justify-center md:justify-start pt-20 overflow-hidden bg-slate-700">
      <div className="relative bg-slate-700 px-6 pt-10 pb-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="mx-auto max-w-md">
          <div className="divide-y divide-gray-300/50">
            <div className="pd-9 px-3 space-y-3 text-base leading-7 text-sky-100 text-center sm:text-left">
              <h2>{message}</h2>
              <h1 className="text-7xl font-bold">THE IKIGAI PROJECT</h1>
              <h2 className="text-4xl pb-8">
                A conceptual project by LoveNils
              </h2>
            </div>
            <div className="pt-8 flex flex-col gap-y-3 md:flex-row md:gap-x-10 justify-center leading-7">
              <Link href={"/learn"}>
                <button className="font-semibold rounded-md py-3 px-4 border-solid border-2 border-black-300 hover:bg-gray-200">
                  Explore
                </button>
              </Link>
              <button
                type="button"
                onClick={scroll}
                // Add the ref attribute to the button that you want to use to scroll to the element
                ref={aboutUsRef}
                className="rounded-md text-white px-6 bg-red-400 border-solid hover:bg-red-500"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
