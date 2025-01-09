module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'root',
        'frontend',
        'backend',
        'shared',
        'admin-portal',
        'landing-page',
        'services',
        'microservices',
        'deps',
      ],
    ],
    'subject-case': [2, 'always', 'sentence-case'],
  },
};
