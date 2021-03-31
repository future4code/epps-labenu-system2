import { Request, Response } from "express";
import connection from "../connection";

export const createTeacher = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400;

    try {
        await connection.raw(`
        INSERT INTO teacher (id, name, email, birth_date)
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

        res.status(200).send("Teacher created successfully!");
        
    } catch (error) {
        console.log(error.message);
        res.send(error.message || error.sqlMessage);
    }
}