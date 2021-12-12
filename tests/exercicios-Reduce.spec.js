const { statusMaisForte, procurarTipoReduce, fichaPokedex } = require('../reduce/exercicios-Reduce');

describe('7 - Teste da Função statusMaisForte', () => {
  test('Teste se statusMaisForte é uma função', () => {
    expect(typeof statusMaisForte).toBe('function');
  })

  test('Teste se procurar tipo retorna um objeto', () => {
    expect(typeof statusMaisForte('hp')).toBe('object');
  })

  test('Teste se a função retorna o pokemon mais forte', () => {
    const result = {
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
    expect(statusMaisForte('hp')).toEqual(result);
  })
})

describe('8 - Teste da Função procurarTipoReduce', () => {
  test('Teste se procurarTipoReduce é uma função', () => {
    expect(typeof procurarTipoReduce).toBe('function');
  })

  test('Teste se procurar tipo retorna um array', () => {
    expect(typeof procurarTipoReduce('grass')).toBe('object');
  })

  test('Teste se a função retorna os pokemons de um tipo', () => {
    const result = [
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
    ]
    expect(procurarTipoReduce('grass')).toEqual(result);
  })
})

describe('9 - Teste da Função fichaPokedex', () => {
  test('Teste se fichaPokedex é uma função', () => {
    expect(typeof fichaPokedex).toBe('function');
  })

  test('Teste se procurar tipo retorna um objeto', () => {
    expect(typeof fichaPokedex()).toBe('object');
  })

  test('Teste se a função retorna um objeto com nome de cada pokemon que possui objetos com o tipo, status maisForte e status maisFraco', () => {
    const result = {
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
    }
    expect(fichaPokedex()).toEqual(result);
  })
})
