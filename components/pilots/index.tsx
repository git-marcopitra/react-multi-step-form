import { FC } from "react";
import { useWatch } from "react-hook-form";

import { Box } from "@/elements";

import Pilot from "./pilot";
import { PilotsProps } from "./pilots.types";

const Pilots: FC<PilotsProps> = ({ control }) => {
  const step = useWatch({ control, name: "step" });

  return (
    <Box
      mx="auto"
      width="10rem"
      display="flex"
      position="relative"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box bg="#BBB" height="0.2rem" width="100%" position="absolute" />
      <Pilot active={step > 0}>1</Pilot>
      <Pilot active={step > 1}>2</Pilot>
    </Box>
  );
};

export default Pilots;
