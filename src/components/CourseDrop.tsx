import { useCourseStore } from "../../store/CourseStore"

export default function CourseDrop() {
  const dropped = useCourseStore((state) => state.droppedCourses)

  return (
    <div>
      <h2>รายวิชาที่ถอนแล้ว</h2>
      <ul>
        {dropped.map((c) => (
          <li key={c.id}>
            {c.code} - {c.nameTH} ({c.credit} หน่วยกิต)
          </li>
        ))}
      </ul>
    </div>
  )
}
