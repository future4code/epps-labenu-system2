import { Request, Response } from "express";
import connection from "../connection";

export const getAgeById = async (req: Request, res: Response): Promise<any> => {
  let errorCode: number = 400;

  try {
    const id = req.params.id;

    if (isNaN(Number(id))) {
      errorCode = 422;
      throw new Error("Please only numeric values");
    }

    const result = await connection.raw(`
        SELECT ROUND(DATEDIFF("2021-01-01", birth_date)/365) as age
        FROM student
        WHERE id = ${id};
        `);

    if (result[0].length === 0) {
      errorCode = 404;
      throw new Error("Student not found");
    }

    res.status(200).send({ student: result[0][0] });
    
  } catch (error) {
    res.status(errorCode).send(error.message || error.sqlMessage);
  }
};
