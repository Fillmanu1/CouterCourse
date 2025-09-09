import { useCourseStore } from "../../store/CourseStore"

export default function DropButton({ id }: { id: string }) {
  const dropCourse = useCourseStore((state) => state.dropCourse)

  return <button onClick={() => dropCourse(id)}>ถอน</button>
}
