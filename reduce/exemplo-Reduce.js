// O reduce é uma função muito poderosa, que permite que a gente combine todo o resultado da aplicação da função passada como parâmetro nos elementos do array em um único resultado.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const person = [
  {
    nome: 'Carlos',
    sobrenome: 'Rosa',
    idade: Math.floor(Math.random() * 30 + 18)
  },
  {
    nome: 'Felipe',
    sobrenome: 'Castanheira',
    idade: Math.floor(Math.random() * 30 + 18)
  },
  {
    nome: 'Gabi',
    sobrenome: 'Ferraz',
    idade: Math.floor(Math.random() * 30 + 18)
  }
]

// Exemplo_01 => Some todos os valores do array
console.log(array.reduce((acumulador, numero) => {
  return acumulador + numero
}, 0))

console.log(array.reduce((acumulador, numero) => {
  return acumulador + numero
}))

// Exemplo_02 => Retorne uma string com nome e sobrenome separado por virgula
console.log(person.reduce((acc, pessoa, index) => {
  acc[`pessoa ${index + 1}`] = `${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.idade}. Bem vindo a Trybe!!`
  return acc
}, {}))
// Exemplo_03 => Retorne o dobro de todos os numero pares
console.log(array.reduce((acc, numero) => {
  if (numero % 2 === 0) acc.push(numero * 2)
  return acc
}, []))