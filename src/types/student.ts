import { objectType, queryType, intArg } from 'nexus'
import { StudentResolver } from '../resolvers/student.resolver'

export const Student = objectType({
  name: 'Student',
  definition (field) {
    field.id('id')
    field.string('name')
    field.int('age')
    field.field('grade', { type: 'Grade' })
  }
})

export const Query = queryType({
  definition (type) {
    type.field('getStudentGrades', {
      type: 'Grade',
      args: {
        studentId: intArg()
      },
      resolve: async (_, { studentId }): Promise<any> => {
        const resolver = new StudentResolver(studentId ?? 0)
        return await resolver.getGrades()
      }
    })
  }
})
