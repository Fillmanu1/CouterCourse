import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import CourseForm from "./components/CourseForm"
import CourseList from "./components/CourseList"
import CourseDrop from "./components/CourseDrop"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <h1>ระบบถอนรายวิชา</h1>
    <CourseForm />
    <CourseList />
    <CourseDrop />
  </React.StrictMode>
)
