import { fontStyles } from "../static/fonts"
import { generateWholePallete } from "./palleteGenerator"
export const conceptGenerator = () => {
    const palletes = generateWholePallete()
    const font = fontStyles[Math.floor(Math.random() * fontStyles.length)]
    const colors = palletes[Math.floor(Math.random() * palletes.length)]
    const concept = {
        font: font.className,
        color: colors
    }
    return concept
}