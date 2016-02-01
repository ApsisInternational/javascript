# eslint-config-apsis

This package provides Apsis' .eslintrc as an extensible shared config.

## Usage

1. `npm install --save-dev eslint-config-apsis babel-eslint `
2. add `"extends": "apsis"` to your .eslintrc

See [Apsis's Javascript styleguide](https://github.com/ApsisInternational/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like
anything involving regexes. Perhaps in a distant future, we could use literate
programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
