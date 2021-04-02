import app from "./app";
import { createClass } from "./endpoints/createClass";
import { createStudent } from "./endpoints/createStudent";
import { createTeacher } from "./endpoints/createTeacher";
import { getAgeById } from "./endpoints/getAgeById";
import { getAllStudents } from "./endpoints/getAllStudents";
import { getAllTeachers } from "./endpoints/getAllTeachers";


app.post("/student", createStudent);

app.post("/teacher", createTeacher);

app.post("/class", createClass);

app.get("/student", getAllStudents);

app.get("/student/:id", getAgeById);

app.get("/teacher", getAllTeachers);


