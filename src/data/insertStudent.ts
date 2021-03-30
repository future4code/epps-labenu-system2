// import knex from 'knex';
// import { connection } from '../index';

// export default async function insertStudent(name: string, email: string, birthDate: Date):Promise<void> {
//     const result = await connection.raw(`
//         INSERT INTO student (name, email, birthDate) 
//         VALUES (
//             "${name}",
//             "${email}",
//             "${birthDate}"
//         )
//     `)
    
//     return result[0][0];
// }