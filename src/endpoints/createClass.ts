import { Request, Response } from "express";
import connection from "../connection";
import { classes, TYPE } from "../types/class"

export const createClass = async (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {

        const input: classes = {
            id: req.body.id,
            name: req.body.name,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            module: 0,
            type: req.body.type
        }

        if (!input.id || !input.name || !input.start_date || !input.end_date || !input.type) {
            errorCode = 422;
            throw new Error("Please check the fields.");
        }

        if (input.type !== TYPE.INTEGRAL && input.type !== TYPE.NOTURNO) {
            errorCode = 422;
            throw new Error("The possible fields are: 'full' or 'night'.");
        }

        if (input.type === TYPE.NOTURNO) {
            input.name = input.name+="-na-night"
        }

        await connection.raw(`
        INSERT INTO class (id, name, start_date, end_date, module)
        VALUES (
            ${input.id},
            "${input.name}",
            "${input.start_date}",
            "${input.end_date}",
            ${input.module}   
        )
        `)

        res.status(201).send({message: "Class created successfully!"})
        
    } catch (error) {
        res.status(errorCode).send(error.message || error.sqlMessage);
    }
}