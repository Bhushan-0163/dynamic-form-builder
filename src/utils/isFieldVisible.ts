import { FieldSchema } from "../schema/formSchema";

export function isFieldVisible(
  field: FieldSchema,
  values: Record<string, unknown>
) {
  if (!field.condition) return true;
  return values[field.condition.fieldId] === field.condition.equals;
}
