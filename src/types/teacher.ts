export type teachers = {
  id: string;
  name: string;
  email: string;
  birth_date: string;
  specialties: SPECIALTY[];
  class_id: number;
};

export enum SPECIALTY {
  REACT = 1,
  REDUX = 2,
  CSS = 3,
  TESTES = 4,
  TYPESCRIPT = 5,
  POO = 6,
  BACKEND = 7,
}

export type updateTeachers = {
  teacher_id: number;
  class_id: number;
};
