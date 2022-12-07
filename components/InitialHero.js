import Link from "next/link";
//import Image from "next/image";
import { useRef } from "react";
//import exampleCharity1 from "../images/exampleCharity1.jpg";

export default function InitialHero() {
  // Use the useRef hook to create a reference to the element that you want to scroll to
  const aboutUsRef = useRef(null);

  function scroll() {
    // Use the scrollIntoView method on the element to scroll to it
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  }

  var message = "New blog post out now!";
  return (
    <section class="relative flex min-h-screen flex-col justify-center md:justify-start pt-20 overflow-hidden">
      <div class="relative bg-white px-6 pt-10 pb-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div class="mx-auto max-w-md">
          <div class="divide-y divide-gray-300/50">
            <div class="pd-9 px-3 space-y-3 text-base leading-7 text-gray-900 text-center sm:text-left">
              <h2>{message}</h2>
              <h1 class="text-7xl font-bold">THE IKIGAI PROJECT</h1>
              <h2 class="text-4xl pb-8">A conceptual project by LoveNils</h2>
            </div>
            <div class="pt-8 flex flex-col gap-y-3 md:flex-row md:gap-x-10 justify-center leading-7">
              <Link href={"/blog"}>
                <button class="font-semibold rounded-md py-3 px-4 border-solid border-2 border-black-300 hover:bg-gray-200">
                  Explore
                </button>
              </Link>
              <button
                type="button"
                onClick={scroll}
                // Add the ref attribute to the button that you want to use to scroll to the element
                ref={aboutUsRef}
                class="rounded-md text-white px-6 bg-red-400 border-solid hover:bg-red-500"
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
