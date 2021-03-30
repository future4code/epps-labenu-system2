import { Request, Response } from "express";
import { connection } from "../connection";

export const createStudent = async (req: Request, res: Response): Promise<void> => {

    try {
        await connection.raw(`
        INSERT INTO student (id, name, email, birthDate, hobby)
        VALUES (
            ${req.body.id},
            "${req.body.name}",
            "${req.body.email}",
            "${req.body.birthDate}",
            "${req.body.hobby}"
        )
        `)

        res.status(200).send("Student successfully created!");
        
    } catch (error) {
        console.log(error.message);
        res.send(error.message || error.sqlMessage);
    }
}