// O método filter() cria um novo array com todos os elementos que passaram no teste
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

// Exemplo_01 => retorne um array contendo apenas numeros pares
console.log(array.filter(numero => {
  return numero % 2 === 0
}))

// Exemplo_02 => retorne um array com as pessoas que contem a letra 'i' no nome
console.log(person.filter(({ nome }) => {
  return nome.includes('i')
}))

// Exemplo_03 => retorne um array com os cinco primeiros elementos de um array
console.log(array.filter((numero, index) => {
  if (index < 5)
    return numero
}))
