import Image from "next/image";
import Link from "next/link";

import InitialHero from "../components/InitialHero";

export default function Blog() {
  return (
    <section className="relative flex min-h-screen flex-row justify-center py-20 overflow-hidden">
      <div className="font-sans flex flex-col p-10 md:flex-row md:text-left">
        <div className="bg-white px-6 pt-10 pb-8 shadow-xl ring-1 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div className="mx-auto max-w-md">
            <div className="p-9 space-y-3 text-base leading-7 text-gray-900 text-center sm:text-left">
              <h1 className="text-5xl font-bold">
                This page is still in development - please check back later!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
