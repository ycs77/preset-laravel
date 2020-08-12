<p align="center">
  <h1 align="center">Laravel Yarn Initialize - Lucas</h1>
  <p align="center">
    <a href="https://github.com/use-preset/use-preset/releases"><img alt="npx use-preset ycs77/preset-laravel-yarn" src="https://img.shields.io/badge/use--preset-laravel--yarn-blue?style=flat-square"></a>
    &nbsp;
    <a href="https://www.npmjs.com/package/use-preset"><img alt="use-preset version" src="https://img.shields.io/npm/v/use-preset?color=32c854&style=flat-square&label=use-preset"></a>
  </p>
  <br />
  <p align="center">
    <code>use-preset</code> is a scaffolding tool for developers. <a href="https://docs.usepreset.dev/">Read the documentation</a> for more information.
  </p>
  <br />
  <pre align="center">npx use-preset ycs77/preset-laravel-yarn</pre>
  <br />
  <p align="center">See more <a href="https://github.com/ycs77/presets-list">Lucas's Presets</a></p>
<p>

# About

This preset initializes yarn dependencies to a fresh Laravel application.

# Installation

This preset is intended to be installed into a fresh Laravel application. Follow the [Laravel installation instructions](https://laravel.com/docs/installation) to ensure you have a working environment before continuing.

**Then, run the following command**:

```bash
npx use-preset ycs77/preset-laravel-yarn
```

# Modifications

- Removal of the `package-lock.json` file
- Addition of `vue-template-compiler` (whether you install Vue or not, Laravel Mix needs it)
