import { intArg, objectType, queryType, stringArg } from 'nexus'
import { studentResolver } from "../resolvers/student.resolver";

export const Student = objectType({
  name: 'Student',
  definition(type) {
    type.id('id'),
    type.string('name'),
    type.int('age'),
    type.int('grade')
  }
})

export const Query = queryType({
  definition(type) {
    type.field('getStudent', {
      type: 'String',
      args: {
        name: stringArg(),
        age: intArg(),
        grade: intArg()
      },
      resolve: (_, { name, age, grade }) => studentResolver({ name, age, grade })
    })
  }
})