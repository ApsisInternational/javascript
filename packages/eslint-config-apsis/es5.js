module.exports = {
  'extends': [
    'eslint-config-apsis/rules/best-practices',
    'eslint-config-apsis/rules/errors',
    'eslint-config-apsis/rules/legacy',
    'eslint-config-apsis/rules/node',
    'eslint-config-apsis/rules/strict',
    'eslint-config-apsis/rules/style',
    'eslint-config-apsis/rules/variables'
  ],
  'env': {
    'browser': true,
    'node': true,
    'jasmine': true
  },
  'globals': {
      'angular': true
  },
  'ecmaFeatures': {},
  'rules': {}
};
