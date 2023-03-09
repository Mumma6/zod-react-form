# zod-react-form

To handle form validation in a React application using `zod`, follow these steps:

1. Define a `zod` schema for your form data, specifying the expected shape and types of the fields.

2. Set an initial state for the form fields that matches the structure of the zod schema.

3. Use the useZodFormValidation hook from the zod-react-form package to handle form validation.
   Pass in the FormSchema and initialFormState values, and the hook will manage the form state, validation errors,
   and other form-related functionality.

4. In your form components, use the values and setFieldValue props provided by the hook to manage the state of your form fields.
   Make sure to use the correct value prop when rendering form fields, such as values.name instead of a component-specific state variable.

```jsx
const FormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
})

const initialFormState = {
  name: "",
  email: "",
}

// Infer the types from the schema:
type FormSchemaType = z.infer<typeof FormSchema>

// Pass the interface, schema and initial form the the hook.
const { values, setValues, errors, setFieldValue, onBlur, touched, reset } =
  useZodFormValidation < FormSchemaType > (FormSchema, initialFormState)

// TextField example
;<TextField
  name="name"
  value={values.name}
  onChange={(e) => setFieldValue(e.target.name, e.target.value)}
  autoFocus
  margin="dense"
  id="name"
  label="Name"
  type="text"
  fullWidth
  onBlur={() => onBlur("name")}
  helperText={(touched.name && errors.name) || " "}
  error={Boolean(touched.name && errors.name)}
/>
```
