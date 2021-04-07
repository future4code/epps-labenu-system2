import { Request, Response } from "express";
import connection from "../connection";
import { teachers } from "../types/teacher";

export const getAllTeachers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const teachers: teachers[] = await connection.raw(`
    SELECT teacher_id, name, email, birth_date, class_id, title as specialty 
    FROM teacher_specialty
    JOIN teacher
    ON teacher_specialty.teacher_id = teacher.id
    JOIN specialty
    ON teacher_specialty.specialty_id = specialty.id;
    `);

    if (!teachers.length) {
      res.statusCode = 404;
      throw new Error("Teacher not found");
    }

    res.status(200).send(teachers[0]);

  } catch (error) {
    res.send(error.message || error.sqlMessage);
  }
};
