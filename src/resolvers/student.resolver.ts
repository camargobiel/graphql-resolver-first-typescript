export const studentResolver = async ({ name, age, grade }): Promise<string> => {
  return `Hello ${name}, welcome to our system! You are current ${age}yo and in ${grade}th grade`
}
