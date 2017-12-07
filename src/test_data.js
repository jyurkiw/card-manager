const navConfig = [
  {
    'label': 'General Info',
    'clickCmd': 'generalInfo'
  },
  {
    'label': 'Boss Players',
    'children': [
      {
        'label': 'Boss Cards',
        'clickCmd': 'bossCards'
      },
      {
        'label': 'Mechanics Cards',
        'clickCmd': 'bossMechanics'
      }
    ]
  },
  {
    'label': 'Raider Players',
    'children': [
      {
        'label': 'Raider Cards',
        'clickCmd': 'raiderCards'
      },
      {
        'label': 'Gear Cards',
        'clickCmd': 'gearCards'
      }
    ]
  }
];

const bossMechanics = [
  {
    'id': 1,
    'name': 'Attack',
    'description': 'This action represents a basic boss melee attack.\n\n*Damage is based on boss statistics.*',
    'cost': '0',
    'mechanics': [
      { 'id': 1, 'name': 'Action'},
      { 'id': 2, 'name': 'Threat Target'}
    ]
  },
  {
    'id': 2,
    'name': 'Boss Move to Target',
    'description': 'The boss moves towards his threat target.\n\n*Movement is based on boss statistics.*',
    'cost': '3',
    'mechanics': [
      { 'id': 1, 'name': 'Action'},
      { 'id': 2, 'name': 'Threat Target'},
      { 'id': 3, 'name': 'Movement'}
    ]
  },
  {
    'id': 3,
    'name': 'Charge Forward 3 Spaces',
    'description': 'The boss moves forward up to three spaces and executes a standard melee attack.',
    'cost': '3',
    'mechanics': [
      { 'id': 1, 'name': 'Action'},
      { 'id': 2, 'name': 'Threat Target'},
      { 'id': 3, 'name': 'Movement'}
    ]
  },
  {
    'id': '4',
    'name': 'Charge Forward 7 Spaces',
    'description': 'The boss moves forward up to seven spaces and executes a standard melee attack.',
    'cost': '5',
    'mechanics': [
      { 'id': 1, 'name': 'Action'},
      { 'id': 2, 'name': 'Threat Target'},
      { 'id': 3, 'name': 'Movement'}
    ]
  },
  {
    'id': '5',
    'name': 'Charge Forward 15 Spaces',
    'description': 'The boss moves forward up to fifteen spaces and executes a standard melee attack.',
    'cost': '7',
    'mechanics': [
      { 'id': 1, 'name': 'Action'},
      { 'id': 2, 'name': 'Threat Target'},
      { 'id': 3, 'name': 'Movement'}
    ]
  },
  {
    'id': '6',
    'name': 'Extra Attack',
    'description': 'This attack is in addition to the standard boss white swing (default melee attack).\n\n*Damage is based on boss statistics*.',
    'cost': '15',
    'mechanics': [
      { 'id': 1, 'name': 'Action'},
      { 'id': 2, 'name': 'Threat Target'}
    ]
  },
  {
    'id': '7',
    'name': 'Move Target Back 3 Spaces',
    'description': 'The boss moves the target away from them three spaces.',
    'cost': '4',
    'mechanics': [
      { 'id': 1, 'name': 'Action'},
      { 'id': 2, 'name': 'Threat Target'},
      { 'id': 3, 'name': 'Forced Movement'}
    ]
  },
  {
    'id': '8',
    'name': 'Move Target Back 7 Spaces',
    'description': 'The boss moves the target away from them seven spaces.',
    'cost': '6',
    'mechanics': [
      { 'id': 1, 'name': 'Action'},
      { 'id': 2, 'name': 'Threat Target'},
      { 'id': 3, 'name': 'Forced Movement'}
    ]
  },
  {
    'id': '9',
    'name': 'Move Target Back 12 Spaces',
    'description': 'The boss moves the target away from them twelve spaces.',
    'cost': '9',
    'mechanics': [
      { 'id': 1, 'name': 'Action'},
      { 'id': 2, 'name': 'Threat Target'},
      { 'id': 3, 'name': 'Forced Movement'}
    ]
  }
];

const mechanicTypes = [
  'Action',
  'Threat Target',
  'Forced Movement',
  'Behavior',
  'Modifier (Attack)',
  'Modifier (Movement)',
  'Modifier (Target)',
  'Modifier (Threat)',
  'Modifier (Area)',
  'Trigger'
]

export const NavConfig = navConfig;
export const BossMechanics = bossMechanics;
export const MechanicTypes = mechanicTypes;
