import Image from "next/image";
import React, { useState } from "react";

import exampleCharity1 from "../images/exampleCharity1.jpg";

function SecondHero() {

    const [styling, setStyling] = useState("flex flex-col p-14 m-9 bg-white rounded-xl justify-center lg:flex-row");

    const h2Content = "Educating Children Through In-person and Online Events";
    const h1Content = "What do we do?";
    const pContent = "We host events for children to explore science, technology and lots of fun things like lego and such";

    function change() {
        setStyling("flex flex-col p-14 m-9 bg-slate-900 rounded-xl justify-center duration-1000 lg:flex-row");
    }

    return (
        <>
            <div className={styling}>
                <div className="flex flex-col">
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
    )
}

export default SecondHero;