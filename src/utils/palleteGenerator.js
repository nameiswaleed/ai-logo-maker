import ColorScheme from "color-scheme";

export const generateColorPalette = () => {
  const scheme = new ColorScheme();
  // Choosing a random hue within a reasonable range

  const firstColors = scheme
    .from_hue(((Math.random() * 360) / Math.random()) * Date.now())
    .scheme("contrast") // Using a triadic color scheme for better contrast
    .variation("soft")
    .colors(Math.random() * 4);
  const secondColors = scheme
    .from_hue(((Math.random(5) * 270) / Math.random()) * Date.now())
    .scheme("triade") // Using a triadic color scheme for better contrast
    .variation("hard")
    .colors();

  // Convert colors to hexadecimal format
  const colorCodes1 = firstColors.map((color) => `#${color}`).slice(0, 2);
  const colorCodes2 = secondColors.map((color) => `#${color}`).slice(0, 2);

  return [...colorCodes1, ...colorCodes2];
};
export const generateWholePallete = () => {
  let newPallete = [];
  for (let i = 0; i < 5; i++) {
    const colorCodes = generateColorPalette();
    newPallete.push(colorCodes);
  }
  return newPallete;
};
