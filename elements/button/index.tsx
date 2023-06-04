import stylin from "@stylin.js/react";
import { FC } from "react";
import { ButtonProps, ButtonElementProps } from "./box.types";

const Button: FC<ButtonProps> = stylin<ButtonElementProps>("button")({
  all: "unset",
  color: "white",
  cursor: "pointer",
  textAlign: "center",
  borderRadius: "0.5rem",
  padding: "0.7rem 1.5rem",
  transition: "transform 300ms ease-in-out",
  ":hover": {
    transform: "scale(0.95)",
  },
  ":active": {
    transform: "scale(0.9)",
  },
});

export default Button;
