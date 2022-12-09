import React, { useState } from "react";
import Image from "next/image";

import exampleCharity1 from "../images/exampleCharity1.jpg";

export default function SecondHero() {
  const h1Content = "About Us";
  const h2Content = "";
  const pContent =
    'The Ikigai Project represents our endeavour to conduct enrichment activities for underprivileged children, granting them access to educational experiences and opportunities that will greatly benefit them in the long run. The project unites passion, love and creativity through the interactive sessions carried out by our very own students. These sessions are carried out both online (such as coding) and on campus. The on-site sessions involve an in-person coding camps, a science day and a "Learn with LEGO" event. To execute these various classes, we require funds to purchase the necessary equipment and obtain the sufficient resources. We would be incredibly grateful if we could use this website to raise awareness!';
  return (
    <div
      className="container flex flex-col m-9 bg-white rounded-xl justify-center lg:flex-row sm:rounded-lg"
      id="aboutus"
    >
      <div className="grid grid-cols-2">
        <div style={{ padding: "2rem" }}>
          <h1 className="font-bold text-3xl pb-5">{h1Content}</h1>
          <p>{pContent}</p>
        </div>
        <div
          className="justify-self-end rounded-xl"
          style={{ padding: "2rem" }}
        >
          <Image
            src={exampleCharity1}
            alt="Example charity image"
            style={{ borderRadius: "1%" }}
          />
        </div>
      </div>
    </div>
  );
}
