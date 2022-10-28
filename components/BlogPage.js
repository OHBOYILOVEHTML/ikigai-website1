import Image from "next/image";
import Link from "next/link";

import InitialHero from "../components/InitialHero";

export default function Blog() {
  return (
    <>
      <section className="relative min-h-fit justify-center pb-20 pt-28">
        <div className="font-sans p-10 text-left grid grid-cols-1 gap-12">
          <div class="bg-white px-6 pt-10 pb-8 shadow-xl sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 w-full">
            <div>
              <h1>Title</h1>
              <p>Hello</p>
            </div>
          </div>
          <div class="bg-white px-6 pt-10 pb-8 shadow-xl sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 w-full">
            <div>
              <h1>Title</h1>
              <p>Hello</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
