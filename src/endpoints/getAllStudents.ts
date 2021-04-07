import { Request, Response } from "express";
import connection from "../connection";
import { students } from "../types/student";

export const getAllStudents = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const students: students[] = await connection.raw(`
    SELECT student_id, name, email, birth_date, class_id, title as hobby
    FROM student_hobby
    JOIN student
    ON student_hobby.student_id = student.id
    JOIN hobby
    ON student_hobby.hobby_id = hobby.id;
    `);

    if (!students.length) {
      res.statusCode = 404;
      throw new Error("Student not found");
    }

    res.status(200).send(students[0]);

  } catch (error) {
    res.send(error.message || error.sqlMessage);
  }
};
