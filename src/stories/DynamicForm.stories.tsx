import type { Meta, StoryObj } from "@storybook/react";
import { DynamicForm } from "../components/DynamicForm";
import { FormSchema } from "../schema/formSchema";

const meta: Meta<typeof DynamicForm> = {
  title: "Forms/DynamicForm",
  component: DynamicForm,
};

export default meta;

export const Default: StoryObj<typeof DynamicForm> = {
  args: {
    schema: {
      fields: [
        { id: "name", label: "Name", type: "text", validation: { required: true } },
        {
          id: "role",
          label: "Role",
          type: "select",
          options: ["User", "Admin"],
        },
        {
          id: "adminCode",
          label: "Admin Code",
          type: "text",
          condition: { fieldId: "role", equals: "Admin" },
        },
      ],
    },
  },
};

export const AsyncValidation: StoryObj<typeof DynamicForm> = {
  args: {
    schema: {
      fields: [
        {
          id: "username",
          label: "Username",
          type: "text",
          validation: {
            required: true,
            asyncValidate: async (value) => {
              await new Promise((r) => setTimeout(r, 800));
              if (value === "admin") return "Username already taken";
              return null;
            },
          },
        },
      ],
    },
  },
};

export const RepeatableFields: StoryObj<typeof DynamicForm> = {
  args: {
    schema: {
      fields: [
        {
          id: "phones",
          label: "Phone Number",
          type: "text",
          repeatable: true,
        },
      ],
    },
  },
};

export const SubmitDemo: StoryObj<typeof DynamicForm> = {
  args: {
    schema: {
      fields: [{ id: "email", label: "Email", type: "text" }],
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  },
};
