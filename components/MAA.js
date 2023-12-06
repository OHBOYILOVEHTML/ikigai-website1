import { useState } from "react";
import Link from "next/link";

export default function MainComp() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");

  const handleMouseEnter = (item) => {
    const positions = {
      Notes: "0% 20%",
      Questions: "0% 20%",
      Upload: "0% 40%",
      Request: "0% 40%",
    };
    setBackgroundPosition(positions[item]);
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setBackgroundPosition("0% 0%");
    setHoveredItem(null);
  };

  return (
    <div className="bg-neutral-800 font-bold text-white flex flex-col min-h-screen justify-center text-6xl relative">
      <div
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.1) 9%, transparent 9%)",
          backgroundPosition: backgroundPosition,
          backgroundSize: "12vmin 12vmin",
          transition: "background-position 500ms ease",
        }}
        className="absolute top-0 left-0 h-full w-full z-0"
      />
      <div className="flex flex-row text-center md:text-start pt-32 z-10 md:pl-56 hover:text-7xl transition-all">
        <Link href={"./"}>{"<-"}</Link>
      </div>
      <div className="text-5xl pb-10 text-center">
        Mathematics Analysis and Approaches
      </div>
      <div className="pb-10 md:grid md:grid-cols-2 flex flex-col overflow-hidden place-items-center gap-4 relative">
        {["Notes", "Questions", "Upload", "Request"].map((item) => {
          const justifyClass =
            item === "Notes" || item === "Upload"
              ? "justify-self-end"
              : "justify-self-start";
          return (
            <Link key={item} href={`maa/${item.toLowerCase()}`}>
              <a
                className={`text-center transition-opacity w-8/12 drop-shadow bg-opacity-20 bg-neutral-700 border border-neutral-700 rounded-lg py-20 duration-500 ${justifyClass} ${
                  hoveredItem && hoveredItem !== item
                    ? "opacity-50"
                    : "opacity-100"
                }`}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                {item}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
