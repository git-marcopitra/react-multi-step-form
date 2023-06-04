import stylin from "@stylin.js/react";
import { FC } from "react";
import { BoxElementProps, BoxProps } from "./box.types";

const Box: FC<BoxProps> = ({ as, ...props }) => {
  const StylinBox = stylin<BoxElementProps>(as ?? "div")();

  return <StylinBox {...props} />;
};

export default Box;
