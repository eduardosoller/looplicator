import { Orbitron } from "next/font/google";
import localFont from 'next/font/local'

export const primary = Orbitron({ weight: "400", subsets: ["latin"], display: "auto" });
export const secondary = localFont({ src: '../../../public/fonts/retro_computer.woff2', display: "swap" })
