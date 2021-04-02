import { Request, Response } from "express";
import connection from "../connection";

export const createStudent = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400;

    try {
        await connection.raw(`
        INSERT INTO student (id, name, email, birth_date)
        VALUES (
            "${req.body.id}",
            "${req.body.name}",
            "${req.body.email}",
            "${req.body.birthDate}"
        )
        `)

        if (!req.body.id || !req.body.name || !req.body.name || !req.body.birthDate) {
            errorCode = 402;
            throw new Error("Please check the fields.");
          }

        res.status(201).send({message: "Student created successfully!"});
        
    } catch (error) {
        console.log(error.message);
        res.send(error.message || error.sqlMessage);
    }
}