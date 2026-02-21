export const BASE_URL = __ENV.BASE_URL || 'https://restful-booker.herokuapp.com';

export const TEST_OPTIONS = {
  load: {
    stages: [
      { duration: '30s', target: 10 },
      { duration: '1m', target: 30 },
      { duration: '30s', target: 0 },
    ],
  },

  stress: {
    stages: [
      { duration: '30s', target: 50 },
      { duration: '1m', target: 150 },
      { duration: '30s', target: 0 },
    ],
  },

  spike: {
    stages: [
      { duration: '10s', target: 10 },
      { duration: '10s', target: 200 },
      { duration: '20s', target: 200 },
      { duration: '10s', target: 0 },
    ],
  }
};