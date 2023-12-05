import { useState } from "react";
import Link from "next/link";

export default function MainComp() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");

  const handleMouseEnter = (item) => {
    const positions = {
      MAI: "0% 20%",
      MAA: "0% 40%",
      Physics: "0% 60%",
      Chemistry: "0% 80%",
    };
    setBackgroundPosition(positions[item]);
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setBackgroundPosition("0% 0%");
    setHoveredItem(null);
  };

  return (
    <div className="bg-neutral-800 text-white flex flex-col min-h-screen justify-center text-6xl relative">
      <div
        id="menu-background-pattern"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.1) 9%, transparent 9%)",
          backgroundPosition: backgroundPosition,
          backgroundSize: "12vmin 12vmin",
          transition: "background-position 500ms ease",
        }}
        className="absolute top-0 left-0 h-full w-full z-0"
      />

      <div className="pt-28 pb-10 flex flex-col items-center gap-4 relative">
        {["MAI", "MAA", "Physics", "Chemistry"].map((item) => (
          <a
            key={item}
            className={`text-center w-4/5 drop-shadow bg-opacity-20 bg-neutral-700 border border-neutral-700 rounded-lg py-20 transition-opacity duration-500 ${
              hoveredItem && hoveredItem !== item ? "opacity-50" : "opacity-100"
            }`}
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
            style={{
              backdropFilter: "blur(5px)",
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
