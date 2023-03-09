module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./setupTests.ts'],
  testMatch: ["**/__tests__/**/*.test.[jt]s?(x)"],
};