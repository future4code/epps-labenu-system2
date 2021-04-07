import app from "./app";
import { createClass } from "./endpoints/createClass";
import { createStudent } from "./endpoints/createStudent";
import { createTeacher } from "./endpoints/createTeacher";
import { deleteStudent } from "./endpoints/deleteStudent";
import { deleteTeacher } from "./endpoints/deleteTeacher";
import { getAgeById } from "./endpoints/getAgeById";
import { getAllClasses } from "./endpoints/getAllClasses";
import { getAllStudents } from "./endpoints/getAllStudents";
import { getAllTeachers } from "./endpoints/getAllTeachers";
import { updateStudent } from "./endpoints/updateStudent";
import { updateTeacher } from "./endpoints/updateTeacher";

app.post("/class", createClass);

app.post("/student", createStudent);

app.post("/teacher", createTeacher);

app.get("/student", getAllStudents);

app.get("/student/:id", getAgeById);

app.get("/teacher", getAllTeachers);

app.get("/class", getAllClasses);

app.put("/student", updateStudent);

app.put("/teacher", updateTeacher);

app.delete("/student/:id", deleteStudent);

app.delete("/teacher/:id", deleteTeacher);

