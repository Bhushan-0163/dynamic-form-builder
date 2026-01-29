import { FieldSchema } from "../schema/formSchema";

interface Props {
  field: FieldSchema;
  value: unknown;
  error?: string;
  onChange: (value: unknown) => void;
}

export function FieldRenderer({ field, value, error, onChange }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={field.id} className="font-medium">
        {field.label}
      </label>

      {field.type === "text" && (
        <input
          id={field.id}
          name={field.id}
          type="text"
          value={(value as string) || ""}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? `${field.id}-error` : undefined}
          className="border rounded p-2"
        />
      )}

      {field.type === "select" && (
        <select
          id={field.id}
          name={field.id}
          value={(value as string) || ""}
          onChange={(e) => onChange(e.target.value)}
          className="border rounded p-2"
        >
          <option value="">Select</option>
          {field.options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}

      {error && (
        <span
          id={`${field.id}-error`}
          role="alert"
          className="text-sm text-red-600"
        >
          {error}
        </span>
      )}
    </div>
  );
}
