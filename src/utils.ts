import { z } from "zod"
import { ErrorsType } from "./types"

export const cloneWithDefaultValues = <T extends object, N>(input: T, newVal: N) =>
  Object.fromEntries(Object.keys(input).map((key) => [key, newVal])) as Record<keyof T, N>

export const generateErrorObject = <T>(arr: z.ZodIssue[]) =>
  Object.fromEntries(arr.map((item) => [item.path[0], item.message])) as ErrorsType<T>
