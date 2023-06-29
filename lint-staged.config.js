module.exports = {
  // Check Typescript files
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // Lint and format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn eslint --fix ${filenames
      .map((filename) => `"${filename}"`)
      .join(' ')}`,
    `yarn prettier --write ${filenames
      .map((filename) => `"${filename}"`)
      .join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) =>
    `yarn prettier --write ${filenames
      .map((filename) => `"${filename}"`)
      .join(' ')}`,
};
