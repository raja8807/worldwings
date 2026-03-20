import {
  Gideon_Roman as Font1,
  // Allura as Font2,
  // Plus_Jakarta_Sans as Font3,
  // Playfair_Display as Font4,
} from "next/font/google";

const font1 = Font1({
  // weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-primary",
});

// const font2 = Font2({
//   // weight: ["400", "500", "600", "700", "800", "900"],
//   weight: ["400"],
//   subsets: ["latin"],
//   variable: "--font-secondary",
// });

// const font3 = Font3({
//   weight: ["200", "300", "400", "500", "600", "700", "800"],
//   subsets: ["latin"],
//   variable: "--font-script",
// });
// const font4 = Font4({
//   weight: ["400", "500", "600", "700", "800"],
//   subsets: ["latin"],
//   variable: "--font-script",
// });

export const FONTS = {
  font1: font1.className,
};

export default FONTS;
