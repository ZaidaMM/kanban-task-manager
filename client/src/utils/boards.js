export const boards = [
  {
    _id: 1,
    name: 'Platform Launch',
    // path: '/',
    columns: [
      {
        _id: 1,
        name: 'Todo',
        color: 'blue',
        tasks: [
          {
            _id: 1,
            title: 'Build UI for onboarding flow',
            description: '',
            status: 'Todo',
            subtasks: [
              {
                title: 'Sign up page',
                isCompleted: true,
              },
              {
                title: 'Sign in page',
                isCompleted: false,
              },
              {
                title: 'Welcome page',
                isCompleted: false,
              },
            ],
          },
          {
            _id: 2,
            title: 'Build UI for search',
            description: '',
            status: 'Todo',
            subtasks: [
              {
                title: 'Search page',
                isCompleted: false,
              },
            ],
          },
          {
            _id: 3,
            title: 'Build settings UI',
            description: '',
            status: 'Todo',
            subtasks: [
              {
                title: 'Account page',
                isCompleted: false,
              },
              {
                title: 'Billing page',
                isCompleted: false,
              },
            ],
          },
          {
            _id: 4,
            title: 'QA and test all major user journeys',
            description:
              'Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.',
            status: 'Todo',
            subtasks: [
              {
                title: 'Internal testing',
                isCompleted: false,
              },
              {
                title: 'External testing',
                isCompleted: false,
              },
            ],
          },
        ],
      },
      {
        _id: 2,
        name: 'Doing',
        // color: 'blue',
        tasks: [
          {
            _id: 1,
            title: 'Build UI for onboarding flow',
            description: '',
            status: 'Todo',
            subtasks: [
              {
                title: 'Sign up page',
                isCompleted: true,
              },
              {
                title: 'Sign in page',
                isCompleted: false,
              },
              {
                title: 'Welcome page',
                isCompleted: false,
              },
            ],
          },
          {
            _id: 2,
            title: 'Build UI for onboarding flow',
            description: '',
            status: 'Todo',
            subtasks: [
              {
                title: 'Sign up page',
                isCompleted: true,
              },
              {
                title: 'Sign in page',
                isCompleted: false,
              },
              {
                title: 'Welcome page',
                isCompleted: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    _id: 2,
    name: 'Marketing Plan',
    // path: '/',
  },
  {
    _id: 3,
    title: 'Roadmap',
    // path: '/',
  },
];
