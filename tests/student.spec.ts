import request from 'supertest'
import app from '../src'

describe('Student', () => {
  it('Given variables should return message correct', async () => {
    const response = await request(app)
      .post('/graphql')
      .send({
        query: `query ($name: String, $age: Int, $grade: Int) {
          getStudent(name: $name, age: $age, grade: $grade)
        }`,
        variables: {
          name: 'Gabriel',
          age: 19,
          grade: 8
        }
      })
      .set('Accept', 'application/json')

    expect(response.body.errors).toBe(undefined)
    expect(response.body.data.getStudent).toBe('Hello Gabriel, welcome to our system! You are current 19yo and in 8th grade')
  })
})
