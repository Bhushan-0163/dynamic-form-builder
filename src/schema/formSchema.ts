export type FieldType = "text" | "select";

export interface ValidationRule {
  required?: boolean;
  asyncValidate?: (value: unknown) => Promise<string | null>;
}

export interface ConditionRule {
  fieldId: string;
  equals: unknown;
}

export interface FieldSchema {
  id: string;
  label: string;
  type: FieldType;
  options?: string[];
  validation?: ValidationRule;
  condition?: ConditionRule;
  repeatable?: boolean;
}

export interface FormSchema {
  fields: FieldSchema[];
}
