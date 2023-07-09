/* eslint-env node */

// Reference: https://github.com/microsoft/rushstack/tree/main/eslint/eslint-patch
// Patches the ESLint engine so that its module resolver will load relative
// to the folder of the referencing config file, rather than the project folder,
// to allow a shared ESLint config to bring along its own plugins,
// rather than imposing peer dependencies on every consumer of this config.
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,

  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
