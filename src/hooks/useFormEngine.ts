import { useEffect, useState } from "react";
import { FormSchema } from "../schema/formSchema";

export function useFormEngine(schema: FormSchema) {
  const [values, setValues] = useState<Record<string, unknown>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Restore autosave
  useEffect(() => {
    const saved = localStorage.getItem("form-data");
    if (saved) setValues(JSON.parse(saved));
  }, []);

  // Autosave
  useEffect(() => {
    localStorage.setItem("form-data", JSON.stringify(values));
  }, [values]);

  const setValue = (id: string, value: unknown) => {
    setValues((prev) => ({ ...prev, [id]: value }));
  };

  const validate = async () => {
    const nextErrors: Record<string, string> = {};

    for (const field of schema.fields) {
      const value = values[field.id];

      if (field.validation?.required && !value) {
        nextErrors[field.id] = "This field is required";
        continue;
      }

      if (field.validation?.asyncValidate) {
        const error = await field.validation.asyncValidate(value);
        if (error) nextErrors[field.id] = error;
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  return { values, errors, setValue, validate };
}
