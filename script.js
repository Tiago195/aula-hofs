
/* a funçao vai receber uma string, com letras maiusculas e minusculas de forma aleatora, e deve retonar as letras na posiçao impar minusculas e na posiçao par maiusculas, por exemplo, se ela receber 'VoU ao mERCadO', deve retornar vOu aO MeRcAdO */

// Sem hofs:
/*
 function parOuImpar(elemento) {
  let newString = ''
  for (let index = 0; index < elemento.length; index += 1) {
    if ((index + 1) % 2 !== 0) {
      newString += elemento[index].toLowerCase()
    } else {
      newString += elemento[index].toUpperCase()
    }
  }
  return newString
}
    Alguns testes:
console.log(parOuImpar('VoU ao mERCadO'))
console.log(parOuImpar('to testando ainda'))
console.log(parOuImpar('tO tesTANdo aINda'))
 */

// exercicios seu puto 
// façá com a hof

function parOuImpar(elemento) {
  return elemento.split('').reduce((a, b, i) => {
    if ((i + 1) % 2 !== 0) {
      a += b.toLowerCase()
    } else {
      a += b.toUpperCase()
    }
    return a
  }, '')
}
// const array = 'carlos andre antonio tiago matheus ruy gabriela larissa'

// console.log(array.split(' ').sort().map(e =>  e, menssgem: `Oi seu puto, meu nome é ${e}` })))
// console.log(['tugo', 'tiago'].sort())
// console.log([4, 1, 6, 7, -2.5, 2.5, 2, -6].sort((a, b) => a - b))
// console.log(parOuImpar('VoU ao mERCadO'))
// console.log(parOuImpar('to testando ainda'))
// console.log(parOuImpar('tO tesTANdo aINda'))

// teste()
// console.log(array)

// questao 1, retorner o pokemon com maior HP

// console.log(testandocaraio.reduce((a, b) => a.stats[0].base_stat < b.stats[0].base_stat ? b : a))

// const test = testandocaraio.reduce((acumulador, pokemon) => {
//   let atual = pokemon.stats.find(e => e.name === 'hp').base_stat
//   if (atual > acumulador) acumulador = atual
//   return acumulador
// }, 0)
// console.log(test, testandocaraio.find(e => e.stats.some(e => e.base_stat === test && e.name === 'hp')))

// console.log(pokedex.reduce((a, b) => {
//   if (a.stats.find(e => e.name === status).base_stat < b.stats.find(e => e.name === status).base_stat) return b
//   return a
// }))

// console.log(testandocaraio.sort((a, b) => b.stats[0].base_stat - a.stats[0].base_stat)[0])
//===========================================
// questao 2, retornar o pokemon mais lento

// questao 3, retorne um array com os pokemons do tipo grass 

// console.log(testandocaraio.filter(f => f.types.some(e => e.type === 'grass')))

// const array1 = []

// testandocaraio.forEach(e => {
//   if (e.types.some(e => e.type === 'grass')) array1.push(e)
// })
// console.log(array1)

// console.log(testandocaraio.reduce((a, b) => {
//   if (b.types.some(e => e.type === 'grass')) a.push(b)
//   return a

// }, []))
//============================================

// questao 4, verifique se existe o pokemon charizard no testandocaraio

// console.log(testandocaraio.some(e => e.name === 'charizard'))
// =========================================

//questao 5, verifique se todos os pokemons tem 2 tipos
// resultado false

// console.log(testandocaraio.every(e => e.types.length === 2))

// =======================================
// questao 6, retorne uma string com os nomes de todos os pokemons separados por virgula
// ex = bulbasaur, ivysaur, venusaur, charmander, charmeleon, charizard, squirtle, wartortle, blastoise


// console.log(testandocaraio.map(e => e.name).join(', '))

// testew

// console.log(pokedex.map(e => {
//   return {
//     name: e.name,
//     tipos: e.types.map(e => e.type),
//     statusMaisForte: e.stats.sort((a, b) => b.base_stat - a.base_stat)[0].name,
//   }
// }))

// console.log(testandocaraio.reduce((a, b) => {
//   const maisForte = b.stats.sort((a, b) => b.base_stat - a.base_stat)[0]
//   const maisFraco = b.stats.sort((a, b) => a.base_stat - b.base_stat)[0]
//   a[b.name] = {
//     tipo: b.types.map(e => e.type),
//     maisForte: { [maisForte.name]: maisForte.base_stat },
//     MaisFraco: { [maisFraco.name]: maisFraco.base_stat }
//   }
//   return a
// }, {}))

//estrutura de dados : array e objetos
//funçao e parametros

// return pokedex.filter(e => e.stats.every(e => e.base_stat >= numero))