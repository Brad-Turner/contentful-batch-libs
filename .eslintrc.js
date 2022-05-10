module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'plugin:jest/recommended',
  ],
  plugins: [
    'standard',
    'promise',
  ],
  env: {
    node: true,
    'jest/globals': true,
  },
  rules: {
    semi: [2, 'always'],
    'comma-dangle': [2, 'always-multiline'],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
  },
};
