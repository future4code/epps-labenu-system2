import connection from "../connection";

export const getAgeById = async (id: string): Promise<any> => {

    try {
        const result = await connection.raw(`
            SELECT name, (birthdate/365) AS age
            FROM student
            WHERE id = "${id}";
        `)

        return result[0][0]

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}