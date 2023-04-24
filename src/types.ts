import { Dispatch, SetStateAction } from "react"
export type ErrorsType<T> = { [key in keyof T]: string | undefined }
export type TouchedType<T> = { [key in keyof T]: boolean }

export interface IZodFormValidation<FValues> {
  values: FValues
  setValues: Dispatch<SetStateAction<FValues>>
  errors: ErrorsType<FValues>
  setFieldValue: (key: keyof FValues, value: FValues[keyof FValues]) => void
  onBlur: (key: keyof FValues) => void
  touched: TouchedType<FValues>
  reset: () => void
  isDisabled: (validator?: () => boolean) => boolean
}
