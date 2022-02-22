import { createTheme, fontFace } from "@vanilla-extract/css";

const primaryFont = fontFace({
  src: "url(https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap)",
});

const baseSpace = {
  xxxxSmall_2: "2px",
  xxxSmall_4: "4px",
  xxSmall_6: "6px",
  xSmall_8: "8px",
  small_12: "12px",
  medium_16: "16px",
  large_24: "24px",
  xLarge_32: "32px",
  xxLarge_48: "48px",
  xxxLarge_64: "64px",
};

export const [light, vars] = createTheme({
  color: {
    blue: "#1865f2",
    purple: "#9059ff",
    green: "#00a60e",
    gold: "#ffb100",
    red: "#d92916",

    offBlack: "#21242c",
    offBlack32: "#22242c32",
    white: "#ffffff",

    // Brand
    darkBlue: "#0a2a66",
    teal: "#14bf96",
    lightBlue: "#37c5fd",
    pink: "#fa50ae",
  },
  font: {
    body: primaryFont,
  },
  space: baseSpace,
});

export const dark = createTheme(vars, {
  color: {
    blue: "#1865f2",
    purple: "#9059ff",
    green: "#00a60e",
    gold: "#ffb100",
    red: "#d92916",

    offBlack: "#21242c",
    offBlack32: "#22242c32",
    white: "#ffffff",

    // Brand
    darkBlue: "#000",
    teal: "#14bf96",
    lightBlue: "#37c5fd",
    pink: "#fa50ae",
  },
  font: {
    body: "Arial",
  },
  space: baseSpace,
});
