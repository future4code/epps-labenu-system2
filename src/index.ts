import app from "./app"
import { createStudent } from "./endpoints/createStudent";
import { getAllStudents } from "./endpoints/getAllStudents";

app.post("/student", createStudent);

app.get("/student", getAllStudents);
