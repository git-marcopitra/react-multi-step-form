import {
  Control,
  UseFieldArrayReturn,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

export interface Interval {
  amount: number;
  endDate: string;
  startDate: string;
  type: "percentage" | "fixed";
}

export interface FormFields {
  step: number;
  intervals: Array<Interval>;
}

export interface MultiStepFormProps {
  control: Control<FormFields>;
  setValue: UseFormSetValue<FormFields>;
  register: UseFormRegister<FormFields>;
  fieldsArray: UseFieldArrayReturn<FormFields, "intervals", "id">;
}
