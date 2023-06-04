import { FormFields } from "@/views/multi-step-form/multi-step-form.types";
import { Control } from "react-hook-form";

export interface PilotsProps {
  control: Control<FormFields>;
}

export interface PilotProps {
  active: boolean;
}
