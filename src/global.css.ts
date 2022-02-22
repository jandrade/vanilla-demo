import { globalStyle, globalFontFace } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalFontFace("Lato", {
  src: "url(https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap)",
});

globalStyle("body, body *", {
  all: "unset",
  boxSizing: "border-box",
  fontFamily: "'Lato', sans-serif",
});
