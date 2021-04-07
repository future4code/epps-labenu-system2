# LABENUSYSTEM 🏦🎲

<h4>

<h4 align="center">
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/future4code/epps-labenu-system2"> <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/future4code/epps-labenu-system2">
</h4>

<h4 align='center'>
👉 Status: Concluído ✅👏
</h4>
<hr />

Você estuda na Labenu_ há tanto tempo que já parecem anos, não é? Então, hoje, vamos pedir para criar um sistema que represente o básico da nossa organização. 

Ele deve possuir, ao menos, as 3 entidades importantes:

1. Estudantes 

    Representa estudantes da nossa instituição. Eles devem possuir: id, nome, email, data de nascimento e os principais hobbies dele. 

    ```
    SELECT student_id, name, email, birth_date, class_id, title
    FROM student_hobby
    JOIN student
    ON student_hobby.student_id = student.id
    JOIN hobby
    ON student_hobby.hobby_id = hobby.id
    ```

    ``
    GET http://localhost:3006/student
    ``

    <br/>

2. Docente

    Representa docentes da nossa instituição. Eles devem possuir: id, nome, email, data de nascimento e todas as especialidades dele. Há 7 especialidades: React, Redux, CSS, Testes, Typescript, Programação Orientada a Objetos e Backend

    ```
    SELECT teacher_id, name, email, birth_date, class_id, title 
    FROM teacher_specialty
    JOIN teacher
    ON teacher_specialty.teacher_id = teacher.id
    JOIN specialty
    ON teacher_specialty.specialty_id = specialty.id;
    ```

    ``
    GET http://localhost:3006/teacher
    ``

    <br />

3. Turma

    Toda turma é composta das seguintes características: id, nome, data de início, data de término, lista de professores responsáveis, uma lista de alunos e módulo atual em que a turma está.

    O módulo pode assumir os valores de 1 a 7 ou `undefined`, indicando que as aulas dessa turma ainda não começaram. Para esse exercício, vamos considerar que existam dois tipos de turma: integral ou noturna. Há uma restrição para o nome das turmas noturnas: tem que terminar com `-na-night`.

    ```
    SELECT class.id, class.name, class.start_date, class.end_date, teacher.name, student.name, class.module 
    FROM teacher
    RIGHT JOIN class
    ON teacher.class_id = class.id
    RIGHT JOIN student
    ON student.class_id = teacher.class_id;
    ```

    ``
    GET http://localhost:3006/class
    ``

    <br />

As funcionalidades básicas são:

→ Criar estudante ✅

→ Criar docente ✅

→ Criar turma ✅

→ Adicionar estudante na turma ✅

→ Adicionar docente na turma ✅

→ Pegar a idade de algum estudante a partir do id ✅

<br/>

#### Desafios:

→ Exibir docentes ✅

→ Exibir estudantes ✅

→ Remover estudante ✅

→ Remover docente ✅

<br />
<hr />
<br />

## Tabelas no MySQL:
<br />

```
CREATE TABLE class(
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    module INT DEFAULT 0
);
```

```
CREATE TABLE student( 
    id INT NOT NULL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL, 
    email VARCHAR(50) NOT NULL UNIQUE, 
    birth_date DATE NOT NULL, 
    class_id INT NOT NULL, 
    FOREIGN KEY (class_id) REFERENCES class(id)
);
```

```
CREATE TABLE hobby(
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE
);
```

```
CREATE TABLE student_hobby(
    student_id INT NOT NULL,
    hobby_id INT NOT NULL,
    PRIMARY KEY (student_id, hobby_id),
    FOREIGN KEY (student_id) REFERENCES student(id),
    FOREIGN KEY (hobby_id) REFERENCES hobby(id)
);
```

```
CREATE TABLE teacher( 
    id INT NOT NULL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL, 
    email VARCHAR(50) UNIQUE NOT NULL, 
    birth_date DATE NOT NULL, 
    class_id INT NOT NULL, 
    FOREIGN KEY (class_id) REFERENCES class(id)
);
```

```
CREATE TABLE specialty(
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE
);
```

```
CREATE TABLE teacher_specialty( 
    teacher_id INT NOT NULL,
    specialty_id INT NOT NULL,
    PRIMARY KEY (teacher_id, specialty_id),
    FOREIGN KEY (teacher_id) REFERENCES teacher(id),
    FOREIGN KEY (specialty_id) REFERENCES specialty(id)
);
```

```
INSERT INTO specialty (id, title)
VALUES 
(1, "React"),
(2, "Redux"),
(3, "CSS"),
(4, "Testes"),
(5, "Typescript"),
(6, "Programação Orientada à Objetos"),
(7, "Back-end");
```
