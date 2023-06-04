import type { StylinComponentProps } from "@stylin.js/react";
import type { HTMLAttributes } from "react";

export type ButtonElementProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "color" | "content" | "translate"
>;

export type ButtonProps = StylinComponentProps & ButtonElementProps;
