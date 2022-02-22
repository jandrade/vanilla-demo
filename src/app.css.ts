import { style, keyframes, composeStyles } from "@vanilla-extract/css";
import { vars } from "./theme.css";

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const app = style({
  backgroundColor: vars.color.darkBlue,
  color: vars.color.white,
  margin: 0,
  padding: vars.space.xLarge_32,
  display: "flex",
  height: "100vh",
  "@media": {
    "screen and (max-width: 768px)": {
      backgroundColor: "lightgreen",
    },
  },
  vars: {
    "--primary-color": "#1865f2",
  },
});

export const animated = style({
  animation: `3s infinite ${rotate}`,
});

export const animatedApp = composeStyles(app, animated);
