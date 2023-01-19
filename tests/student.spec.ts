import request from 'supertest'
import app from '../src'

describe('Student', () => {
  describe('Success', () => {
    it('Given studentId should return valid grade', async () => {
      const response = await request(app)
        .post('/graphql')
        .send({
          query: `query ($studentId: Int) {
            getStudentGrades(studentId: $studentId) {
              id
              studentId
              geo
              math
              avg
            }
          }`,
          variables: {
            studentId: 1
          }
        })
        .set('Accept', 'application/json')

      expect(response.body.errors).toBe(undefined)
      expect(response.body.data.getStudentGrades).toStrictEqual({
        avg: null,
        geo: 9,
        id: 1,
        math: 6.5,
        studentId: '1'
      })
    })
  })
  describe('Errors', () => {
    it('Given invalid studentId should return error', async () => {
      const response = await request(app)
        .post('/graphql')
        .send({
          query: `query ($studentId: Int) {
            getStudentGrades(studentId: $studentId) {
              id
              studentId
              geo
              math
              avg
            }
          }`,
          variables: {
            studentId: 999
          }
        })
        .set('Accept', 'application/json')

      expect(response.body.errors[0].extensions.exception.message).toBe(
        'No grade found to student with id=999'
      )
    })
  })
})
