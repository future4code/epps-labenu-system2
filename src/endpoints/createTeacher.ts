import { Request, Response } from "express";
import connection from "../connection";
import { SPECIALTY, teachers } from "../types/teacher";

export const createTeacher = async (req: Request, res: Response): Promise<any> => {
    let errorCode: number = 400;

    try {

        const input: teachers = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            birth_date: req.body.birth_date,
            specialties: req.body.specialties,
            class_id: req.body.class_id
        }

        if (!input.id || !input.name || !input.email || !input.birth_date || input.specialties.length < 1) {
            errorCode = 422;
            throw new Error("Please check the fields.");
        }

        await connection.raw(`
        INSERT INTO teacher (id, name, email, birth_date, class_id)
        VALUES (
            ${req.body.id},
            "${req.body.name}",
            "${req.body.email}",
            "${req.body.birth_date}",
            ${req.body.class_id}
        );
        `)

        for (let specialty of input.specialties) {

            await connection.raw(`
            INSERT INTO teacher_specialty (teacher_id, specialty_id)
            VALUES (
                ${input.id},
                ${SPECIALTY[specialty]}
            )
            `)
        }

        res.status(201).send({message: "Teacher created successfully!"});
        
    } catch (error) {
        res.status(errorCode).send(error.message || error.sqlMessage);
    }
}