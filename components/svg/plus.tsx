import { FC, SVGAttributes } from "react";

const Plus: FC<SVGAttributes<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M8 1V15M1 8H15"
      stroke-width="2"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default Plus;
