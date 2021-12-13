// O método map() invoca a função callback passada por argumento para cada elemento do Array 
// e devolve um novo Array como resultado da transformação dos elementos, de mesmo tamanho.
// map((elemento, index, array))
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const person = [
  {
    nome: 'Carlos',
    sobrenome: 'Rosa'
  },
  {
    nome: 'Felipe',
    sobrenome: 'Castanheira'
  },
  {
    nome: 'Gabi',
    sobrenome: 'Ferraz'
  }
]
// Exemplo_01 => retorne um array com todos os elementos dobrados
console.log(array.map(numeros => numeros * 2))
// Exemplo_02 => retorne um array com os elementos multiplicados pela sua posição
// console.log(array.map((numeros, multiplicador) => {
//   return numeros * multiplicador
// }))
// Exemplo_03 => retorne um array com apenas os nomes
// console.log(person.map(pessoa => {
//   return pessoa.nome
// }))
// Exemplo_04 => retorne um array com o nome completo
// console.log(person.map(({nome, sobrenome}) => {
//   return `${nome} ${sobrenome}`
// }))
