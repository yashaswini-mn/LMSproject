import React, { useEffect, useState } from 'react';
import { FaPython, FaJsSquare, FaCss3Alt, FaCode, FaLaptopCode } from 'react-icons/fa';

const icons = [FaPython, FaJsSquare, FaCss3Alt, FaCode, FaLaptopCode];

export default function Orbiting() {
  const [positions, setPositions] = useState([0, 1, 2, 3, 4]); // 5 positions for 5 icons

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prev) => prev.map((_, i) => prev[(i + 1) % 5])); // Correct the mapping for 5 icons
    }, 5000); // Increased duration for smoother movement
    return () => clearInterval(interval);
  }, []);

  const getPositionClasses = (pos) => {
    const distance = 'translate-x-[5px] translate-y-[5px]'; // Adjusted closer distance
    switch (pos) {
      case 0:
        return `top-0 left-1/2 -translate-x-1/2 ${distance}`;
      case 1:
        return `top-1/2 right-0 ${distance} -translate-y-1/2`;
      case 2:
        return `bottom-0 left-1/2 -translate-x-1/2 ${distance}`;
      case 3:
        return `top-1/2 left-0 -translate-x-full -translate-y-1/2`;
      case 4:
        return `top-1/4 left-3/4 ${distance}`; // Adjusted position to bring it closer
      default:
        return '';
    }
  };

  return (
    <div className="relative w-[600px] h-[600px] mx-auto my-12">
      {/* Central Image */}
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] transform -translate-x-1/2 -translate-y-1/2 z-10">
        <img src="/sample.png" alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Orbiting Icons */}
      {icons.map((Icon, i) =>(
        <div
          key={i}
          className={`absolute w-24 h-24 flex items-center justify-center text-4xl text-[#13A586] transition-all duration-[2000ms] ease-in-out transform ${getPositionClasses(positions[i])}`}
        >
          <Icon />
        </div>
      ))}
    </div>
  );
}
