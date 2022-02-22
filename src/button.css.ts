import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const button = style({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: 40,
  paddingTop: 0,
  paddingBottom: 0,
  border: "none",
  borderRadius: 4,
  cursor: "pointer",
  outline: "none",
  textDecoration: "none",
  boxSizing: "border-box",
  // This removes the 300ms click delay on mobile browsers by indicating that
  // "double-tap to zoom" shouldn't be used on this element.
  touchAction: "manipulation",
  userSelect: "none",

  ":focus": {
    boxShadow: `0 0 0 1px ${vars.color.darkBlue}, 0 0 0 3px ${vars.color.white}`,
  },
  ":active": {
    boxShadow: `0 0 0 1px ${vars.color.darkBlue}, 0 0 0 3px ${vars.color.teal}`,
  },
  ":disabled": {
    background: vars.color.offBlack32,
    color: vars.color.offBlack,
    cursor: "default",
  },
});

export const variant = styleVariants({
  primary: {
    background: vars.color.blue,
    color: vars.color.white,
    paddingLeft: vars.space.medium_16,
    paddingRight: vars.space.medium_16,
  },
  secondary: {
    background: "none",
    color: vars.color.blue,
    borderColor: vars.color.offBlack32,
    borderStyle: "solid",
    borderWidth: 1,
    paddingLeft: vars.space.medium_16,
    paddingRight: vars.space.medium_16,
  },
});
