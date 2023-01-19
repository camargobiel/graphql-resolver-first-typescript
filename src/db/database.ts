import { School } from '../interfaces/database.interface'
import fs from 'fs'
import path from 'path'

export class Database {
  public instance (): School {
    const dbString = fs.readFileSync(path.join(__dirname, './db.json'), { encoding: 'utf-8' })
    const db = JSON.parse(dbString)
    return db
  }
}
