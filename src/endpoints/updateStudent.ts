import { Request, Response } from "express";
import connection from "../connection";
import { updateStudents } from "../types/student";

export const updateStudent = async (req: Request, res: Response): Promise<any> => {
    let errorCode: number = 400;

    try {

        const input: updateStudents = {
            student_id: req.body.student_id,
            class_id: req.body.class_id
        }

        if (!input.student_id || !input.class_id) {
            errorCode = 422;
            throw new Error("Please check the fields.");
        }

        await connection.raw(`
        UPDATE student
        SET class_id = ${input.class_id}
        WHERE id = ${input.student_id}
        `);

        res.status(200).send({message: "Updated successfully!"});
        
    } catch (error) {
        res.status(errorCode).send(error.message || error.sqlMessage);
    }
}