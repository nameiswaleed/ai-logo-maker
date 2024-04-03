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
    <div className="  grid grid-cols-3  gap-5 my-5 mx-auto   ">
      {colors.map((color, index) => (
        <div
          key={index}
          className="flex items-center justify-center shadow-sm  rounded-lg "
        >
          {color.map((color, index) => (
            <span
              key={index}
              style={{ backgroundColor: color }}
              className="w-16 h-16 shadow-sm"
            ></span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ColorPallete;
