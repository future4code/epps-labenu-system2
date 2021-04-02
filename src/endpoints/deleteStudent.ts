import { Request, Response } from "express";
import connection from "../connection";

export const deleteStudent = async (
  req: Request,
  res: Response
): Promise<any> => {
  let errorCode: number = 400;

  try {
    const id = req.params.id;

    if (isNaN(Number(id))) {
      errorCode = 422;
      throw new Error("Please only numeric values");
    }

    const result = await connection.raw(`
        DELETE FROM student_hobby
        WHERE student_id = ${id};
        `);

        await connection.raw(`
        DELETE FROM student
        WHERE id = ${id};
        `)

    if (result[0].length === 0) {
      errorCode = 404;
      throw new Error("Student not found");
    }

    res.status(200).send("Deleted successfully");

  } catch (error) {
    res.status(errorCode).send(error.message || error.sqlMessage);
  }
};
