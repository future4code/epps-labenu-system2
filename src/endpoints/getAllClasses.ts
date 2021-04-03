import { Request, Response } from "express";
import connection from "../connection";
import { classes } from "../types/class";

export const getAllClasses = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const classes: classes[] = await connection.raw(`
    SELECT class.id, class.name, class.start_date, class.end_date, teacher.name, student.name, class.module FROM teacher
    RIGHT JOIN class
    ON teacher.class_id = class.id
    RIGHT JOIN student
    ON student.class_id = teacher.class_id;
    `);

    if (!classes.length) {
      res.statusCode = 404;
      throw new Error("Class not found");
    }

    res.status(200).send(classes[0]);
  } catch (error) {
    res.send(error.message || error.sqlMessage);
  }
};
