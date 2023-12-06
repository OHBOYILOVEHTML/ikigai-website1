import { useState } from "react";
import Link from "next/link";

export default function MainComp() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");

  const handleMouseEnter = (item) => {
    const positions = {
      Home: "0% 20%",
      Subjects: "0% 40%",
      Help: "0% 60%",
    };
    setBackgroundPosition(positions[item]);
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setBackgroundPosition("0% 0%");
    setHoveredItem(null);
  };

  return (
    <div className="bg-neutral-800 text-white font-bold min-h-screen flex flex-col justify-center text-6xl relative">
      <div
        id="menu-background-pattern"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.1) 9%, transparent 9%)",
          backgroundPosition: backgroundPosition,
          backgroundSize: "12vmin 12vmin",
          transition: "background-position 500ms ease",
        }}
        className="absolute top-0 left-0 h-full min-h-screen w-full z-0"
      />

      <div className="md:px-56 relative flex flex-col items-center md:items-start">
        {["Home", "Subjects", "Help"].map((item) => (
          <Link
            legacyBehavior
            key={item}
            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
          >
            <a
              className={`menu-item hover:text-7xl transition-all py-5 duration-500 ${
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
        ))}
      </div>
    </div>
  );
}
