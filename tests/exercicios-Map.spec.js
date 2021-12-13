const { transformarString, nameStatusValor, novoFormato } = require('../maps/exercicios-Map');

describe('4 - Teste da Função transformarString', () => {
  test('Teste se transformarString é uma função', () => {
    expect(typeof transformarString).toBe('function');
  })

  test('Teste se procurar tipo retorna uma string', () => {
    expect(typeof transformarString()).toBe('string');
  })

  test('Teste se a função retorna os nomes separados por vírgula', () => {
    const result = 'bulbasaur, ivysaur, venusaur, charmander, charmeleon, charizard, squirtle, wartortle, blastoise';
    expect(transformarString()).toBe(result);
  })
})

describe('5 - Teste da Função nameStatusValor', () => {
  test('Teste se nameStatusValor é uma função', () => {
    expect(typeof nameStatusValor).toBe('function');
  })

  test('Teste se procurar tipo retorna uma array', () => {
    expect(typeof nameStatusValor()).toBe('object');
  })

  test('Teste se a função retorna os nomes e os ataques separados por vírgula', () => {
    const result = [
      'bulbasaur, special-attack: 65',
      'ivysaur, special-attack: 80',
      'venusaur, special-attack: 100',
      'charmander, special-attack: 60',
      'charmeleon, special-attack: 80',
      'charizard, special-attack: 109',
      'squirtle, special-attack: 50',
      'wartortle, special-attack: 65',
      'blastoise, special-attack: 85'
    ]
    expect(nameStatusValor()).toEqual(result);
  })
})

describe('6 - Teste da Função novoFormato', () => {
  test('Teste se novoFormato é uma função', () => {
    expect(typeof novoFormato).toBe('function');
  })

  test('Teste se procurar tipo retorna uma array', () => {
    expect(typeof novoFormato()).toBe('object');
  })

  test('Teste se a função retorna um array com objetos contendo nome, tipos e statusMaisForte', () => {
    const result = [
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
    ];
    expect(novoFormato()).toEqual(result);
  })
})
