import { DynamicForm } from "./components/DynamicForm";
import { FormSchema } from "./schema/formSchema";

const schema: FormSchema = {
  fields: [
    {
      id: "email",
      label: "Email",
      type: "text",
      validation: { required: true },
    },
  ],
};

export default function App() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <DynamicForm schema={schema} />
    </div>
  );
}
