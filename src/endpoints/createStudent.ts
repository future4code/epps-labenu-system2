import { Request, Response } from "express";
import connection from "../connection";
import { students } from "../types/student";

export const createStudent = async (
  req: Request,
  res: Response
): Promise<any> => {
  let errorCode: number = 400;

  try {
    const input: students = {
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      birth_date: req.body.birth_date,
      hobbies: req.body.hobbies,
      class_id: req.body.class_id,
    };

    if (
      !input.id ||
      !input.name ||
      !input.email ||
      !input.birth_date ||
      input.hobbies.length < 1
    ) {
      errorCode = 422;
      throw new Error("Please check the fields.");
    }

    await connection.raw(`
        INSERT INTO student (id, name, email, birth_date, class_id)
        VALUES (
            ${req.body.id},
            "${req.body.name}",
            "${req.body.email}",
            "${req.body.birth_date}",
            ${req.body.class_id}
        );
        `);

    for (let hobby of input.hobbies) {
      const idHobby = Math.floor(Math.random() * 1000000);

      await connection.raw(`
            INSERT INTO hobby (id, title)
            VALUES (
                ${idHobby},
                "${hobby}"
            )
            `);

      await connection.raw(`
            INSERT INTO student_hobby (student_id, hobby_id)
            VALUES (
                ${input.id},
                ${idHobby}
            )
            `);
    }

    res.status(201).send({ message: "Student created successfully!" });
    
  } catch (error) {
    res.status(errorCode).send(error.message || error.sqlMessage);
  }
};
