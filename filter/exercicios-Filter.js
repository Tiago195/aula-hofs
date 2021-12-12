const pokedex = require('../data')

// Retorne um array com os pokemons do tipo fire 
// Expected 
/* [
  {
    id: 4,
    name: 'charmander',
    types: [ { type: 'fire' } ],
    stats: [
      { base_stat: 39, name: 'hp' },
      { base_stat: 52, name: 'attack' },
      { base_stat: 43, name: 'defense' },
      { base_stat: 60, name: 'special-attack' },
      { base_stat: 65, name: 'speed' }
    ]
  },
  {
    id: 5,
    name: 'charmeleon',
    types: [ { type: 'fire' } ],
    stats: [
      { base_stat: 58, name: 'hp' },
      { base_stat: 64, name: 'attack' },
      { base_stat: 58, name: 'defense' },
      { base_stat: 80, name: 'special-attack' },
      { base_stat: 80, name: 'speed' }
    ]
  },
  {
    id: 6,
    name: 'charizard',
    types: [ { type: 'fire' }, { type: 'flying' } ],
    stats: [
      { base_stat: 78, name: 'hp' },
      { base_stat: 84, name: 'attack' },
      { base_stat: 78, name: 'defense' },
      { base_stat: 109, name: 'special-attack' },
      { base_stat: 100, name: 'speed' }
    ]
  }
] */
const procurarTipo = (tipo) => {
  //seu codigo
}

// Retorne um array com os pokemons que tenha todos os status maiores ou iguais a 80
// Expected 
/* [
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
  },
  {
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
  }
] */
const maisFortes = (numero) => {
  //seu codigo
}

// Retorne um array com todos os pokemons com mais de 1 tipo
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
  },
  {
    id: 6,
    name: 'charizard',
    types: [ { type: 'fire' }, { type: 'flying' } ],
    stats: [
      { base_stat: 78, name: 'hp' },
      { base_stat: 84, name: 'attack' },
      { base_stat: 78, name: 'defense' },
      { base_stat: 109, name: 'special-attack' },
      { base_stat: 100, name: 'speed' }
    ]
  }
] */
const doisTipos = () => {
  //seu codigo
}