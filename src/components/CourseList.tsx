import { useCourseStore } from "../../store/CourseStore"
import DropButton from "./DropButton"

export default function CourseList() {
  const courses = useCourseStore((state) => state.courses)
  const gpa = useCourseStore((state) => state.gpa)

  return (
    <div>
      <h2>รายวิชาที่ลงทะเบียน</h2>
      <ul>
        {courses.map((c) => (
          <li key={c.id}>
            {c.code} - {c.nameTH} ({c.credit} หน่วยกิต) เกรด: {c.grade ?? "-"}{" "}
            <DropButton id={c.id} />
          </li>
        ))}
      </ul>
      <p>GPA รวม: {gpa().toFixed(2)}</p>
    </div>
  )
}
