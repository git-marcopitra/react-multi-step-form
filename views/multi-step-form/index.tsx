import { FC } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";

import { Box, Button, Typography } from "@/elements";
import { Pilots } from "@/components";
import {
  FormFields,
  Interval,
  MultiStepFormProps,
} from "./multi-step-form.types";
import { PlusSVG, TrashSVG } from "@/components/svg";

const DEFAULT_INTERVAL_VALUE: Interval = {
  amount: 0,
  endDate: "",
  startDate: "",
  type: "fixed",
};

const Form: FC<MultiStepFormProps> = ({
  control,
  setValue,
  register,
  fieldsArray: { fields, append, remove },
}) => {
  const step = useWatch({ control, name: "step" });

  const handleGoToForm = () => setValue("step", 1);
  const handleGoToResume = () => setValue("step", 2);

  const addNewLine = () => append(DEFAULT_INTERVAL_VALUE);
  const removeLine = (index: number) => () => remove(index);

  if (step === 2)
    return (
      <Box mt="2rem" gap="1rem" display="flex" flexDirection="column">
        <Typography color="white" as="h2" textAlign="center">
          Resume
        </Typography>
        <Box
          gap="1rem"
          display="grid"
          gridTemplateColumns={["1fr", "repeat(2, 1fr)"]}
        >
          <Button onClick={handleGoToForm} border="1px solid white">
            Edit Form
          </Button>
          <Button bg="#2a9d8f">Submit</Button>
        </Box>
      </Box>
    );

  return (
    <Box mt="2rem" gap="1rem" display="flex" flexDirection="column">
      <Typography color="white" as="h2" textAlign="center">
        Form
      </Typography>
      <Box display="flex" flexDirection="column">
        {fields.map((field, index) => (
          <Box key={field.id}>
            <input
              type="date"
              placeholder="DD/MM/YYYY"
              {...register(`intervals.${index}.startDate`)}
            />
            <input
              type="date"
              placeholder="DD/MM/YYYY"
              {...register(`intervals.${index}.endDate`)}
            />
            <input
              type="number"
              placeholder="12345"
              {...register(`intervals.${index}.amount`)}
            />
            <Button
              p="0.7rem"
              gap="1rem"
              color="red"
              display="flex"
              border="1px solid red"
              justifyContent="center"
              onClick={removeLine(index)}
            >
              <TrashSVG width="1rem" />
            </Button>
          </Box>
        ))}
      </Box>
      <Box display="flex" flexDirection="column" gap="0.5rem">
        <Button
          gap="1rem"
          display="flex"
          onClick={addNewLine}
          justifyContent="center"
          border="1px solid white"
        >
          <PlusSVG width="1rem" /> Add new interval
        </Button>
        <Button onClick={handleGoToResume} bg="#2a9d8f">
          Go To Resume
        </Button>
      </Box>
    </Box>
  );
};

const MultiStepForm: FC = () => {
  const { control, setValue, register } = useForm<FormFields>({
    defaultValues: {
      step: 1,
      intervals: [DEFAULT_INTERVAL_VALUE],
    },
  });

  const fieldArray = useFieldArray<FormFields>({ control, name: "intervals" });

  return (
    <Box
      p="2rem"
      bg="#181818"
      width="100%"
      maxWidth="25rem"
      borderRadius="1rem"
    >
      <Pilots control={control} />
      <Form
        control={control}
        register={register}
        setValue={setValue}
        fieldsArray={fieldArray}
      />
    </Box>
  );
};

export default MultiStepForm;
