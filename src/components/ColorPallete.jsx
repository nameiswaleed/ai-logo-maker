import ColorScheme from "color-scheme";
import { useEffect, useState } from "react";
import { colorSchemes } from "../static/colors";
import {
  generateColorPalette,
  generateWholePallete,
} from "../utils/palleteGenerator";

const ColorPallete = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    setColors([]);
    const colorCodes = generateWholePallete();

    setColors(colorCodes);
  }, []);

  return (
    <div className="flex items-center justify-center text-white flex-col space-y-3 my-5  max-w-max mx-auto  ">
      {colors.map((color, index) => (
        <div
          key={index}
          className="flex items-center justify-center shadow-sm border rounded-lg"
        >
          {color.map((color, index) => (
            <span
              key={index}
              style={{ backgroundColor: color }}
              className="w-16 h-16"
            ></span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ColorPallete;
