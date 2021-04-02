import { Request, Response } from "express";
import connection from "../connection";
import { updateTeachers } from "../types/teacher";

export const updateTeacher = async (req: Request, res: Response): Promise<any> => {
    let errorCode: number = 400;

    try {

        const input: updateTeachers = {
            teacher_id: req.body.teacher_id,
            class_id: req.body.class_id
        }

        if (!input.teacher_id || !input.class_id) {
            errorCode = 422;
            throw new Error("Please check the fields.");
        }

        await connection.raw(`
        UPDATE teacher
        SET class_id = ${input.class_id}
        WHERE id = ${input.teacher_id}
        `);

        res.status(200).send({message: "Updated successfully!"});
        
    } catch (error) {
        res.status(errorCode).send(error.message || error.sqlMessage);
    }
}