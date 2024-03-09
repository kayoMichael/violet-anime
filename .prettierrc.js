module.exports = {
  endOfLine: 'lf',
  printWidth: 80,
  tabWidth: 2,
  trailingComma: 'es5',
  singleQuote: true,
  jsxSingleQuote: true,
  semi: true,
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};
