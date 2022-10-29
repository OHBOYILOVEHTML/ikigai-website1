import Image from "next/image";
import React, { useState } from "react";

import exampleCharity1 from "../images/exampleCharity1.jpg";

function SecondHero() {
  const [styling, setStyling] = useState(
    "flex flex-col p-14 m-9 bg-white rounded-xl justify-center lg:flex-row"
  );

  const h2Content = "Lorem Ipsum";
  const h1Content = "Dolor sit amet";
  const pContent =
    "Consectetur adipiscing elit. Phasellus facilisis vel sapien ac ullamcorper. Sed congue dolor nibh, finibus aliquet libero sagittis vel. Maecenas eleifend, sapien at dignissim porttitor, felis lorem posuere eros, nec placerat velit nibh ut est. Nunc gravida tellus porta velit sagittis pellentesque.";

  function change() {
    setStyling(
      "flex flex-col p-14 m-9 bg-slate-900 rounded-xl justify-center duration-1000 lg:flex-row"
    );
  }

  return (
    <>
      <div className={styling} id="aboutus">
        <div className="flex grid grid-cols-2">
          <h2 className="">{h2Content}</h2>
          <h1>{h1Content}</h1>
          <p>{pContent}</p>
          <button onClick={change}>Click me</button>
        </div>
        <div className="w-1/4">
          <Image src={exampleCharity1} alt="Example test Image" />
        </div>
      </div>
    </>
  );
}

export default SecondHero;
