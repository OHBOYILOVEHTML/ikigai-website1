import { useState } from "react";

export default function MainComp() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");

  const handleMouseEnter = (item) => {
    const positions = {
      Home: "0% 20%",
      Work: "0% 40%",
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
    <div className="menu bg-neutral-800 text-white h-screen flex flex-col justify-center text-6xl relative">
      <div
        id="menu-background-pattern"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.1) 9%, transparent 9%)",
          backgroundPosition: backgroundPosition,
          backgroundSize: "12vmin 12vmin",
          transition: "background-position 500ms ease", // Add this line
        }}
        className="absolute top-0 left-0 h-full w-full z-0"
      />

      <div className="menu-items z-10 px-56 relative flex flex-col items-start">
        {["Home", "Work", "Help"].map((item) => (
          <div
            key={item}
            className={`menu-item py-5 transition-opacity duration-500 ${
              hoveredItem && hoveredItem !== item ? "opacity-50" : "opacity-100"
            }`}
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
