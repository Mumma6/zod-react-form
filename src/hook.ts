import { z } from "zod"

import { useState, useEffect, useCallback, useMemo } from "react"
import { ErrorsType, TouchedType, IZodFormValidation } from "./types"
import { cloneWithDefaultValues, generateErrorObject } from "./utils"

export { ErrorsType, TouchedType, IZodFormValidation }

export function useZodFormValidation<FValues extends object>(
  schema: z.Schema,
  formData: FValues
): IZodFormValidation<FValues> {
  const [values, setValues] = useState<FValues>(formData)
  const [errors, setErrors] = useState<ErrorsType<FValues>>(cloneWithDefaultValues(formData, undefined))
  const [touched, setTouched] = useState<TouchedType<FValues>>(cloneWithDefaultValues(formData, false))

  const generateErrorObjectMemoized = useMemo(
    () =>
      generateErrorObject as <FValues extends object>(
        issues: z.ZodIssue[],
        defaultValue?: FValues[keyof FValues] | undefined
      ) => ErrorsType<FValues>,
    []
  )

  const validateValuesCallback = useCallback(
    (input: FValues) => {
      const parse = schema.safeParse(input)
      setErrors(
        parse.success
          ? cloneWithDefaultValues(formData, undefined)
          : generateErrorObjectMemoized<FValues>(parse.error.issues)
      )
    },
    [schema, formData, generateErrorObjectMemoized]
  )

  useEffect(() => {
    validateValuesCallback(values)
  }, [values, validateValuesCallback, touched])

  const setFieldValue = useCallback((key: keyof FValues, value: FValues[keyof FValues]) => {
    setValues((prevState) => ({ ...prevState, [key]: value }))
  }, [])

  const onBlur = useCallback((key: keyof FValues) => {
    setTouched((prevState) => ({ ...prevState, [key]: true }))
  }, [])

  const reset = useCallback(() => {
    setTouched(cloneWithDefaultValues(formData, false))
    setErrors(cloneWithDefaultValues(formData, undefined))
  }, [])

  const isDisabled = useCallback(
    (validator?: () => boolean) => {
      const formErrors = Object.values(errors).some((error) => error)

      return validator ? (validator() && formErrors) || formErrors : formErrors
    },
    [errors]
  )

  return {
    values,
    setValues,
    errors,
    setFieldValue,
    onBlur,
    touched,
    reset,
    isDisabled,
  }
}
