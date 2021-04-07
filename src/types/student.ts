export type students = {
  id: string;
  name: string;
  email: string;
  birth_date: string;
  hobbies: string[];
  class_id: number;
};

export type hobbies = {
  id: string;
  title: string;
};

export type updateStudents = {
  student_id: number;
  class_id: number;
};
