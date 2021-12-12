const { maisFortes, doisTipos, procurarTipo } = require('../filter/exercicios-Filter');

describe('1 - Teste da Função procurarTipo', () => {
  test('Teste se procurarTipo é uma função', () => {
    expect(typeof procurarTipo).toBe('function');
  })

  test('Teste se procurar tipo retorna um array', () => {
    expect(typeof procurarTipo('fire')).toBe('object');
  })

  test('Teste se a função retorna todos os pokemons de determinado tipo', () => {
    const arrayEsperado = [
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
    ]
    expect(procurarTipo('fire')).toEqual(arrayEsperado);
  })
})

describe('2 - Teste da Função maisFortes', () => {
  test('Teste se maisFortes é uma função', () => {
    expect(typeof maisFortes).toBe('function');
  })

  test('Teste se maisFortes retorna um array', () => {
    expect(typeof maisFortes(50)).toBe('object');
  })

  test('Teste se a função retorna os pokemons com todos os base_stat maiores ou iguais a um valor', () => {
    const arrayEsperado = [
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
    ]
    expect(maisFortes(80)).toEqual(arrayEsperado);
  })
})

describe('3 - Teste da Função doisTipos', () => {
  test('Teste se doisTipos é uma função', () => {
    expect(typeof doisTipos).toBe('function');
  })

  test('Teste se doisTipos retorna um array', () => {
    expect(typeof doisTipos()).toBe('object');
  })

  test('Teste se a função retorna os pokemons com mais de um tipo', () => {
    const arrayEsperado = [
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
    ]
    expect(doisTipos()).toEqual(arrayEsperado);
  })
})
