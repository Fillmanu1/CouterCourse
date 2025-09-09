import { useState } from "react"
import { useCourseStore } from "../../store/CourseStore"
import { v4 as uuidv4 } from "uuid"

export default function CourseForm() {
  const addCourse = useCourseStore((state) => state.addCourse)
  const [form, setForm] = useState({
    code: "",
    nameTH: "",
    nameEN: "",
    credit: 3,
    teacher: "",
    grade: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addCourse({ id: uuidv4(), ...form })
    setForm({ code: "", nameTH: "", nameEN: "", credit: 3, teacher: "", grade: "" })
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
      <input
        placeholder="รหัสวิชา"
        value={form.code}
        onChange={(e) => setForm({ ...form, code: e.target.value })}
      />
      <input
        placeholder="ชื่อวิชา (ไทย)"
        value={form.nameTH}
        onChange={(e) => setForm({ ...form, nameTH: e.target.value })}
      />
      <input
        placeholder="ชื่อวิชา (อังกฤษ)"
        value={form.nameEN}
        onChange={(e) => setForm({ ...form, nameEN: e.target.value })}
      />
      <input
        type="number"
        placeholder="หน่วยกิต"
        value={form.credit}
        onChange={(e) => setForm({ ...form, credit: Number(e.target.value) })}
      />
      <input
        placeholder="อาจารย์ผู้สอน"
        value={form.teacher}
        onChange={(e) => setForm({ ...form, teacher: e.target.value })}
      />
      <select
        value={form.grade}
        onChange={(e) => setForm({ ...form, grade: e.target.value })}
      >
        <option value="">-- เกรด --</option>
        <option value="A">A</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="C+">C+</option>
        <option value="C">C</option>
        <option value="D+">D+</option>
        <option value="D">D</option>
        <option value="F">F</option>
      </select>
      <button type="submit">เพิ่มวิชา</button>
    </form>
  )
}
