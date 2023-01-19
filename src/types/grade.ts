import { nonNull, objectType } from 'nexus'

export const Grade = objectType({
  name: 'Grade',
  definition (field) {
    field.field('id', { type: nonNull('Int') })
    field.field('studentId', { type: nonNull('ID') })
    field.float('math')
    field.float('geo')
    field.float('avg')
  }
})
