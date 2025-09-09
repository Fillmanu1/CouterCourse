import { create } from "zustand"

export type Course = {
  id: string
  code: string
  nameTH: string
  nameEN: string
  credit: number
  teacher: string
  grade?: string
}

type CourseState = {
  courses: Course[]
  droppedCourses: Course[]
  addCourse: (course: Course) => void
  dropCourse: (id: string) => void
  gpa: () => number
}

export const useCourseStore = create<CourseState>((set, get) => ({
  courses: [],
  droppedCourses: [],
  addCourse: (course) =>
    set((state) => ({
      courses: [...state.courses, course],
    })),
  dropCourse: (id) =>
    set((state) => {
      const course = state.courses.find((c) => c.id === id)
      return course
        ? {
            courses: state.courses.filter((c) => c.id !== id),
            droppedCourses: [...state.droppedCourses, course],
          }
        : state
    }),
  gpa: () => {
    const gradeMap: Record<string, number> = {
      A: 4.0,
      "B+": 3.5,
      B: 3.0,
      "C+": 2.5,
      C: 2.0,
      "D+": 1.5,
      D: 1.0,
      F: 0.0,
    }
    const validCourses = get().courses.filter((c) => c.grade && gradeMap[c.grade])
    if (validCourses.length === 0) return 0
    const totalCredits = validCourses.reduce((sum, c) => sum + c.credit, 0)
    const totalPoints = validCourses.reduce(
      (sum, c) => sum + c.credit * (gradeMap[c.grade!] ?? 0),
      0
    )
    return totalPoints / totalCredits
  },
}))
