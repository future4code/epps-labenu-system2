import app from "./app";
import { createClass } from "./endpoints/createClass";
import { createStudent } from "./endpoints/createStudent";
import { createTeacher } from "./endpoints/createTeacher";
import { getAgeById } from "./endpoints/getAgeById";
import { getAllStudents } from "./endpoints/getAllStudents";
import { getAllTeachers } from "./endpoints/getAllTeachers";
import { updateStudent } from "./endpoints/updateStudent";
import { updateTeacher } from "./endpoints/updateTeacher";


app.post("/class", createClass);

app.post("/student", createStudent);

app.put("/student", updateStudent);

app.post("/teacher", createTeacher);

app.put("/teacher", updateTeacher)

app.get("/student", getAllStudents);

app.get("/student/:id", getAgeById);

app.get("/teacher", getAllTeachers);


