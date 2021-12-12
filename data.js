const pokedex = [
  {
    id: 1,
    name: 'bulbasaur',
    types: [
      {
        type: 'poison'
      },
      {
        type: 'grass'
      },
    ],
    stats: [
      {
        name: 'hp',
        base_stat: 45,
      },
      {
        name: 'attack',
        base_stat: 49,
      },
      {
        name: 'defense',
        base_stat: 49,
      },
      {
        name: 'special-attack',
        base_stat: 65,
      },
      {
        name: 'speed',
        base_stat: 45,
      }
    ]
  },
  {
    id: 2,
    name: 'ivysaur',
    types: [
      {
        type: 'grass'
      },
      {
        type: 'poison'
      }
    ],
    stats: [
      {
        base_stat: 60,
        name: 'hp'
      },
      {
        base_stat: 62,
        name: 'attack'
      },
      {
        base_stat: 63,
        name: 'defense'
      },
      {
        base_stat: 80,
        name: 'special-attack'
      },
      {
        base_stat: 60,
        name: 'speed'
      }
    ]
  },
  {
    id: 3,
    name: 'venusaur',
    types: [
      {
        type: 'grass'
      },
      {
        type: 'poison'
      }
    ],
    stats: [
      {
        base_stat: 80,
        name: 'hp'
      },
      {
        base_stat: 82,
        name: 'attack'
      },
      {
        base_stat: 83,
        name: 'defense'
      },
      {
        base_stat: 100,
        name: 'special-attack'
      },
      {
        base_stat: 80,
        name: 'speed'
      }
    ]
  },
  {
    id: 4,
    name: 'charmander',
    types: [
      {
        type: 'fire'
      }
    ],
    stats: [
      {
        base_stat: 39,
        name: 'hp'
      },
      {
        base_stat: 52,
        name: 'attack'
      },
      {
        base_stat: 43,
        name: 'defense'
      },
      {
        base_stat: 60,
        name: 'special-attack',
      },
      {
        base_stat: 65,
        name: 'speed'
      }
    ]
  },
  {
    id: 5,
    name: 'charmeleon',
    types: [
      {
        type: 'fire'
      }
    ],
    stats: [
      {
        base_stat: 58,
        name: 'hp'
      },
      {
        base_stat: 64,
        name: 'attack'
      },
      {
        base_stat: 58,
        name: 'defense'
      },
      {
        base_stat: 80,
        name: 'special-attack',
      },
      {
        base_stat: 80,
        name: 'speed'
      }
    ]
  },
  {
    id: 6,
    name: 'charizard',
    types: [
      {
        type: 'fire'
      },
      {
        type: 'flying'
      }
    ],
    stats: [
      {
        base_stat: 78,
        name: 'hp'
      },
      {
        base_stat: 84,
        name: 'attack'
      },
      {
        base_stat: 78,
        name: 'defense'
      },
      {
        base_stat: 109,
        name: 'special-attack',
      },
      {
        base_stat: 100,
        name: 'speed'
      }
    ]
  },
  {
    id: 7,
    name: 'squirtle',
    types: [
      {
        type: 'water'
      }
    ],
    stats: [
      {
        base_stat: 44,
        name: 'hp'
      },
      {
        base_stat: 48,
        name: 'attack'
      },
      {
        base_stat: 65,
        name: 'defense'
      },
      {
        base_stat: 50,
        name: 'special-attack',
      },
      {
        base_stat: 43,
        name: 'speed'
      }
    ]
  },
  {
    id: 8,
    name: 'wartortle',
    types: [
      {
        type: 'water'
      }
    ],
    stats: [
      {
        base_stat: 59,
        name: 'hp'
      },
      {
        base_stat: 63,
        name: 'attack'
      },
      {
        base_stat: 80,
        name: 'defense'
      },
      {
        base_stat: 65,
        name: 'special-attack',
      },
      {
        base_stat: 58,
        name: 'speed'
      }
    ]
  },
  {
    id: 9,
    name: 'blastoise',
    types: [
      {
        type: 'water'
      }
    ],
    stats: [
      {
        base_stat: 89,
        name: 'hp'
      },
      {
        base_stat: 83,
        name: 'attack'
      },
      {
        base_stat: 100,
        name: 'defense'
      },
      {
        base_stat: 85,
        name: 'special-attack',
      },
      {
        base_stat: 88,
        name: 'speed'
      }
    ]
  }

]

module.exports = pokedex