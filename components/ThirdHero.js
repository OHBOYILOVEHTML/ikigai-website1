import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import exampleCharity1 from "../images/exampleCharity1.jpg";

export default function SecondHero() {
  const h1Content = "Contact Us";
  const pContent =
    "Reach out to us with any questions and we would be happy to help!";
  const contactLink = "https://www.lovenils.org/contact";
  const contactEmail = "info@lovenils.org";

  return (
    <div
      className="flex flex-col-reverse p-14 m-9 bg-white rounded-xl justify-center lg:flex-row-reverse"
      id="aboutus"
    >
      <div className="flex flex-row-reverse gap-x-10">
        <div>
          <h1 className="font-bold text-6xl pt-2 pb-5">{h1Content}</h1>
          <p className="text-2xl pb-3">{pContent}</p>
          <div className="p-2 bg-red-100 rounded-xl mt-9">
            <h2 className="text-2xl">Contact Email: {contactEmail}</h2>
          </div>
          <div className="p-2 bg-red-200 rounded-xl mt-4">
            <Link href={contactLink}>
              <h2 className="text-2xl">Visit The LoveNils Contact Details</h2>
            </Link>
          </div>
        </div>
        <div className="w-1/2 justify-self-start">
          <Image src={exampleCharity1} alt="Example test Image" />
        </div>
      </div>
    </div>
  );
}
