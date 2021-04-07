import { Request, Response } from "express";
import connection from "../connection";

export const deleteTeacher = async (
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
    DELETE FROM teacher_specialty
    WHERE teacher_id = ${id};
    `);

    await connection.raw(`
    DELETE FROM teacher
    WHERE id = ${id};
    `)

    if (result[0].length === 0) {
      errorCode = 404;
      throw new Error("Teacher not found");
    }

    res.status(200).send("Deleted successfully");
  } catch (error) {
    res.status(errorCode).send(error.message || error.sqlMessage);
  }
};
