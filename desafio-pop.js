

// DESAFIO DELETANDO ELEMENTOS
// um prof acidentalmente lançou 5 notas no sistema p/ um aluno (10,6,8,5.5 e 10)
// para corrigir remova a ultima nota e faca a media

const notas = [10,6,8,5.5,10]

notas.pop()

const media =(notas[0]+notas[1]+notas[2]+notas[3])/notas.length

console.log(`A média é ${media}`)
