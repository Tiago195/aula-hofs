const pokedex = require('../data')

// Retorne o pokemon com maior HP
// Expected 
/* {
  id: 9,
  name: 'blastoise',
  types: [ { type: 'water' } ],
  stats: [
    { base_stat: 89, name: 'hp' },
    { base_stat: 83, name: 'attack' },
    { base_stat: 100, name: 'defense' },
    { base_stat: 85, name: 'special-attack' },
    { base_stat: 88, name: 'speed' }
  ]
} */
const statusMaisForte = (status) => {
  // Seu codigo
}

// Retorne um array com os pokemons do tipo grass 
// Expected 
/* [
  {
    id: 1,
    name: 'bulbasaur',
    types: [ { type: 'poison' }, { type: 'grass' } ],
    stats: [
      { name: 'hp', base_stat: 45 },
      { name: 'attack', base_stat: 49 },
      { name: 'defense', base_stat: 49 },
      { name: 'special-attack', base_stat: 65 },
      { name: 'speed', base_stat: 45 }
    ]
  },
  {
    id: 2,
    name: 'ivysaur',
    types: [ { type: 'grass' }, { type: 'poison' } ],
    stats: [
      { base_stat: 60, name: 'hp' },
      { base_stat: 62, name: 'attack' },
      { base_stat: 63, name: 'defense' },
      { base_stat: 80, name: 'special-attack' },
      { base_stat: 60, name: 'speed' }
    ]
  },
  {
    id: 3,
    name: 'venusaur',
    types: [ { type: 'grass' }, { type: 'poison' } ],
    stats: [
      { base_stat: 80, name: 'hp' },
      { base_stat: 82, name: 'attack' },
      { base_stat: 83, name: 'defense' },
      { base_stat: 100, name: 'special-attack' },
      { base_stat: 80, name: 'speed' }
    ]
  }
] */
const procurarTipoReduce = (tipo) => {
  // Seu codigo
}

// Retorne um objeto no seguinte formato
//Expected 
/* {
  bulbasaur: {
    tipo: [ 'poison', 'grass' ],
    maisForte: { 'special-attack': 65 },
    MaisFraco: { hp: 45 }
  },
  ivysaur: {
    tipo: [ 'grass', 'poison' ],
    maisForte: { 'special-attack': 80 },
    MaisFraco: { hp: 60 }
  },
  venusaur: {
    tipo: [ 'grass', 'poison' ],
    maisForte: { 'special-attack': 100 },
    MaisFraco: { hp: 80 }
  },
  charmander: {
    tipo: [ 'fire' ],
    maisForte: { speed: 65 }, 
    MaisFraco: { hp: 39 }
    },
  charmeleon: {
    tipo: [ 'fire' ],
    maisForte: { 'special-attack': 80 },
    MaisFraco: { hp: 58 }
  },
  charizard: {
    tipo: [ 'fire', 'flying' ],
    maisForte: { 'special-attack': 109 },
    MaisFraco: { hp: 78 }
  },
  squirtle: {
    tipo: [ 'water' ],
    maisForte: { defense: 65 },
    MaisFraco: { speed: 43 }
  },
  wartortle: {
    tipo: [ 'water' ],
    maisForte: { defense: 80 },
    MaisFraco: { speed: 58 }
  },
  blastoise: {
    tipo: [ 'water' ],
    maisForte: { defense: 100 },
    MaisFraco: { attack: 83 }
  }
} */
const fichaPokedex = () => {
  // Seu codigo
}

module.exports = {
  statusMaisForte,
  procurarTipoReduce,
  fichaPokedex,
}
