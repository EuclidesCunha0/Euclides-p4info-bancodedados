const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./banco/banco.db', (error) => {
    if (error) console.log(error);
});

db.serialize(() => {
    db.run(`create table if not exists TB_ALUNOS (
        ID integer,
        NOME_ALUNO text,
        primary key (ID autoincrement))`, (error) => {
        if (error) console.log(error);
    });
    db.run(`create table if not exists TB_ALUNO_DISCIPLINA (
        TB_ALUNOS_ID integer not null,
        TB_DISCIPLINAs_ID integer not null,
        NOTA real,
        PERIODO integer,
        FOREIGN KEY(TB_ALUNOS_ID) REFERENCES TB_ALUNOS(ID),
        FOREIGN KEY(TB_DISCIPLINAs_ID) REFERENCES TB_DISCIPLINAs(ID),
        primary key (TB_ALUNOS_ID, TB_DISCIPLINAs_ID))`, (error) => {
        if (error) console.log(error);
    });
    db.run(`create table if not exists TB_DISCIPLINAs (
        ID integer,
        NOME_DISCIPLINA text,
        primary key (ID autoincrement))`, (error) => {
        if (error) console.log(error);
    });
});