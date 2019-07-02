module.exports = {
  extends: ['prettier', 'prettier/react', 'airbnb'],
  env: {
    browser: true,
  },
  rules: {
    'object-curly-newline': ['error', { minProperties: 5, consistent: true }],
    'import/no-unresolved': 'off',
  },
};
