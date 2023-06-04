import type { StylinComponentProps } from "@stylin.js/react";
import type { HTMLAttributes } from "react";

export type BoxElementProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "color" | "content" | "translate"
>;

export interface BoxProps extends StylinComponentProps, BoxElementProps {
  as?: keyof JSX.IntrinsicElements;
}
