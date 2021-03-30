import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { createStudent } from "./endpoints/createStudent";
import { getAllStudents } from "./endpoints/getAllStudents";

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/student", createStudent);

app.get("/student/all", getAllStudents);





const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});