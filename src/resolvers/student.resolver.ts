import { Grade } from '../interfaces/database.interface'
import { Database } from '../db/database'
import { GraphQLError } from 'graphql'
export class StudentResolver {
  private readonly studentId: number
  private readonly database: Database

  constructor (studentId: number) {
    this.studentId = studentId
    this.database = new Database()
  }

  public getGrades = async (): Promise<Grade> => {
    const db = this.database.instance()
    const grade = db.grades.find((grade: Grade) => grade.studentId === this.studentId)

    if (!grade) { throw new GraphQLError(`No grade found to student with id=${this.studentId}`) }

    return grade
  }
}
