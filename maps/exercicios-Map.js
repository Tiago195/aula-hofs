const pokedex = require('../data')

// Retorne uma string com os nomes de todos os pokemons separados por virgula
// Expected = bulbasaur, ivysaur, venusaur, charmander, charmeleon, charizard, squirtle, wartortle, blastoise
// Dica: utiliza o metodo join()
const transformarString = () => {
  // Seu codigo
}

// Retorne um array de strings com os nomes de cada pokemon e o valor de seu special-attack.
// Dica: utilize find para encontrar o special-attack
// Expected 
/* [
  'bulbasaur, special-attack: 65',
  'ivysaur, special-attack: 80',
  'venusaur, special-attack: 100',
  'charmander, special-attack: 60',
  'charmeleon, special-attack: 80',
  'charizard, special-attack: 109',
  'squirtle, special-attack: 50',
  'wartortle, special-attack: 65',
  'blastoise, special-attack: 85'
] */
const nameStatusValor = (status) => {
  // Seu codigo
}

// Retorne um array de objetos no seguinte formato
// Expected
/* [
  {
    name: 'bulbasaur',
    tipos: [ 'poison', 'grass' ],
    statusMaisForte: 'special-attack'
  },
  {
    name: 'ivysaur',
    tipos: [ 'grass', 'poison' ],
    statusMaisForte: 'special-attack'
  },
  {
    name: 'venusaur',
    tipos: [ 'grass', 'poison' ],
    statusMaisForte: 'special-attack'
  },
  { name: 'charmander', tipos: [ 'fire' ], statusMaisForte: 'speed' },
  {
    name: 'charmeleon',
    tipos: [ 'fire' ],
    statusMaisForte: 'special-attack'
  },
  {
    name: 'charizard',
    tipos: [ 'fire', 'flying' ],
    statusMaisForte: 'special-attack'
  },
  { name: 'squirtle', tipos: [ 'water' ], statusMaisForte: 'defense' },
  { name: 'wartortle', tipos: [ 'water' ], statusMaisForte: 'defense' },
  { name: 'blastoise', tipos: [ 'water' ], statusMaisForte: 'defense' }
] */
const novoFormato = () => {
  // Seu codigo
}

module.exports = {
  transformarString,
  nameStatusValor,
  novoFormato,
}