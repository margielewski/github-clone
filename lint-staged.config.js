module.exports = {
  // Run type-check on changes to TypeScript files
  '**/*.ts?(x)': () => 'yarn lint',
  // Run ESLint on changes to JavaScript/TypeScript files
  '**/*.(ts|js)?(x)': () => `yarn prettier:fix`,
};
