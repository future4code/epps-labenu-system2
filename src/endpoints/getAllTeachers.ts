import { Request, Response } from "express";
import connection from "../connection";
import { teachers } from "../types/teacher"

export const getAllTeachers = async (req: Request, res: Response): Promise<void> => {

    try {
        const teachers: teachers[] = await connection.raw(`
           SELECT id, name, email, birth_date
           FROM teacher
        `);
  
        if (!teachers.length) {
          res.statusCode = 404;
          throw new Error("Teacher not found");
        }
  
        res.status(200).send(teachers[0]);

      } catch (error) {
          
        console.log(error);
        res.send(error.message || error.sqlMessage);
      }
    }
  ;