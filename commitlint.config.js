import { defineConfig } from '@commitlint/config-conventional';

export default defineConfig({
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
        'deps',
      ],
    ],
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
    'scope-empty': [2, 'never'],
    'subject-case': [2, 'always', 'sentence-case'],
    'body-max-line-length': [2, 'always', 100],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
  },
});
