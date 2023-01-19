export interface School {
  studends: Students[]
  grades: Grade[]
}

export interface Students {
  id: number
  name: string
  age: number
}

export interface Grade {
  id: number
  studentId: number
  geo?: number
  math?: number
  avg?: number
}
