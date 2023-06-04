import type { StylinComponentProps } from "@stylin.js/react";
import type { HTMLAttributes } from "react";

export type TypographyElementProps = Omit<
  HTMLAttributes<HTMLParagraphElement>,
  "color" | "content" | "translate"
>;

export interface TypographyProps extends StylinComponentProps, TypographyElementProps {
  as?: keyof JSX.IntrinsicElements;
}
