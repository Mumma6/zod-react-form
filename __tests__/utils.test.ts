import { cloneWithDefaultValues, generateErrorObject } from "../src/utils"

import { z } from "zod"

describe("cloneWithDefaultValues", () => {
  it("should return a new object with all values set to the default value", () => {
    const input = { a: 1, b: "test" }
    const defaultValue = null
    const output = cloneWithDefaultValues(input, defaultValue)
    expect(output).toEqual({ a: null, b: null })
  })

  it("should return a new object with all values set to the default value, other then null", () => {
    const input = { a: 1, b: "test" }
    const defaultValue = true
    const output = cloneWithDefaultValues(input, defaultValue)
    expect(output).toEqual({ a: true, b: true })
  })
})

describe("generateErrorObject", () => {
  it("should return an error object with keys and messages from zod issues", () => {
    const issues = [
      { path: ["a"], message: "Error message 1", code: z.ZodIssueCode.custom },
      { path: ["b"], message: "Error message 2", code: z.ZodIssueCode.custom },
    ]
    const output = generateErrorObject<typeof issues[0]>(issues)
    expect(output).toEqual({ a: "Error message 1", b: "Error message 2" })
  })
})
