import stylin from "@stylin.js/react";
import { FC } from "react";
import { TypographyElementProps, TypographyProps } from "./typography.types";

const Typography: FC<TypographyProps> = ({ as, ...props }) => {
  const StylinTypography = stylin<TypographyElementProps>(as ?? "p")();

  return <StylinTypography {...props} />;
};

export default Typography;
