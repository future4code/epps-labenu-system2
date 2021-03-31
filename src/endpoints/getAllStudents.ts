import { Request, Response } from "express";
import connection from "../connection";

import { students } from "../types/student"

export const getAllStudents = async (req: Request, res: Response): Promise<void> => {

    try {
        const students: students[] = await connection.raw(`
           SELECT id, name, email, birth_date
           FROM student
        `);
  
        if (!students.length) {
          res.statusCode = 404;
          throw new Error("Student not found");
        }
  
        res.status(200).send(students);

      } catch (error) {
          
        console.log(error);
        res.send(error.message || error.sqlMessage);
      }
    }
  ;