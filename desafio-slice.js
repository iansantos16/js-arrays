// desafio sala dividida ... divida os alunos da sala abaixo em duas listas com as mesmas quantidades de alunos
// 'João','Jualiana','Ana','Caio','Lara','Marjorie','Guilherme','Aline','Fabiana','Andre','Carlos','Paulo','Bia','Vivian','Isabela','Vinicius','Renan,'Renata','Daisy','Camilo'.


const alunos = ['João','Jualiana','Ana','Caio','Lara','Marjorie','Guilherme','Aline','Fabiana','Andre','Carlos','Paulo','Bia','Vivian','Isabela','Vinicius','Renan','Renata','Daisy','Camilo']

const sala1 = alunos.slice(0, alunos.length/2) // 0 ate o 10
const sala2 = alunos.slice(alunos.length/2)    // do 10 em diante

console.log(sala1)
console.log(sala2)

