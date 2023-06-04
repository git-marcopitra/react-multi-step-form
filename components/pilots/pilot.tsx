import { Typography } from "@/elements";
import { FC, PropsWithChildren } from "react";
import { PilotProps } from "./pilots.types";

const Pilot: FC<PropsWithChildren<PilotProps>> = ({
  active,
  children,
}) => (
  <Typography
    color="#BBB"
    bg="#181818"
    width="2rem"
    height="2rem"
    display="flex"
    fontSize="0.9rem"
    alignItems="center"
    position="relative"
    borderRadius="1rem"
    justifyContent="center"
    border="1px solid #BBB"
    {...(active && {
      bg: "#BBB",
      color: "#282828",
    })}
  >
    {children}
  </Typography>
);

export default Pilot;
