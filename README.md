# zod-react-form

const FormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
})

const initialFormState = {
  name: "",
  email: "",
}

Create a zod schema and an initalState for the form

Infer the types from the schema: type FormSchemaType = z.infer<typeof UserRegistrationSchema>

Pass the inferface, schema and initial form the the hook.

 const { values, setValues, errors, setFieldValue, onBlur, touched, reset } =
    useZodFormValidation<FormSchemaType>(FormSchema, initialFormState)


TextField exampe

          <TextField
            name="name"
            value={name}
            onChange={(e) => onChange(e.target.name, e.target.value)}
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
