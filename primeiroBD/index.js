const { error } = require('console');

//criação da constante e importação do modulo.
const sqlite3 = require('sqlite3').verbose();

//acesso para o banco de dados.
const db = new sqlite3.Database('empresa.sqlite',(err)=>{
  if(err){
    return console.error(err.message);
  }
  //db.run("CREATE TABLE setor(idsetor int, nome varchar(40), ramal varchar(4), e_mail varchar(30))");

 //db.run("CREATE TABLE funcionario(matricula int primary key, id_setor int not null, nome varchar(40), nascimento date, telefone varchar(15))");
});

//inserção de valores.
//db.run("INSERT into setor(idsetor,nome,ramal,e_mail) values (1, 'FINANCEIRO', '4254', 'FINANCEIRO@EMPRESA.COM')");
//db.run("INSERT into setor(idsetor,nome,ramal,e_mail) values (2, 'PORTARIA', '4253', 'PORTARIA@EMPRESA.COM')");
//db.run("INSERT into setor(idsetor,nome,ramal,e_mail) values (3, 'SECRETARIA', '4237', 'SECRETARIA@EMPRESA.COM')");

//inserção de funcionarios.
/*
db.run("INSERT INTO FUNCIONARIO(matricula,id_setor,nome,nascimento,telefone) values(1234,1,'ANA','12-04-1978','01219219')");
db.run("INSERT INTO FUNCIONARIO(matricula,id_setor,nome,nascimento,telefone) values(1235,3,'IVO','12-12-2000','07280921')");
db.run("INSERT INTO FUNCIONARIO(matricula,id_setor,nome,nascimento,telefone) values(1236,2,'OTO','07-02-1987','06924324')");
db.run("INSERT INTO FUNCIONARIO(matricula,id_setor,nome,nascimento,telefone) values(1237,1,'CARINA','09-09-1990','02932176')");
*/

db.each("select matricula, nome from funcionario",(err,row)=>{
  if(err){
    console.error(err.message);
  }
  console.log(row.matricula + "\t" + row.nome);
});