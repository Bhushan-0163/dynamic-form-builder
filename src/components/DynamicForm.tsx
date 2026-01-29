import { useEffect, useRef } from "react";
import { FormSchema } from "../schema/formSchema";
import { useFormEngine } from "../hooks/useFormEngine";
import { FieldRenderer } from "./FieldRenderer";
import { isFieldVisible } from "../utils/isFieldVisible";

interface Props {
  schema: FormSchema;
  onSubmit?: (values: Record<string, unknown>) => void;
}

export function DynamicForm({ schema, onSubmit }: Props) {
  const { values, errors, setValue, validate } = useFormEngine(schema);
  const formRef = useRef<HTMLFormElement>(null);

  // Focus first error
  useEffect(() => {
    const firstError = Object.keys(errors)[0];
    if (!firstError || !formRef.current) return;
    const el = formRef.current.querySelector(
      `[name="${firstError}"]`
    ) as HTMLElement | null;
    el?.focus();
  }, [errors]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const valid = await validate();
    if (valid && onSubmit) onSubmit(values);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-4"
      noValidate
    >
      {schema.fields.map((field) => {
        if (!isFieldVisible(field, values)) return null;

        // Repeatable fields
      if (field.repeatable) {
  const arr: unknown[] = Array.isArray(values[field.id])
    ? (values[field.id] as unknown[])
    : [""];

  return (
    <div key={field.id} className="space-y-2">
      {arr.map((val, i) => (
        <FieldRenderer
          key={i}
          field={field}
          value={val}
          error={errors[field.id]}
          onChange={(v) => {
            const updated: unknown[] = [...arr];
            updated[i] = v;
            setValue(field.id, updated);
          }}
        />
      ))}

      <button
        type="button"
        className="text-blue-600 underline"
        onClick={() => setValue(field.id, [...arr, ""])}
      >
        Add another
      </button>
    </div>
  );
}


        return (
          <FieldRenderer
            key={field.id}
            field={field}
            value={values[field.id]}
            error={errors[field.id]}
            onChange={(v) => setValue(field.id, v)}
          />
        );
      })}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
