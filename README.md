# node-rename-path

[![Build Status](https://github.com/mgenware/node-rename-path/workflows/Build/badge.svg)](https://github.com/mgenware/node-rename-path/actions)
[![MEAN Module](https://img.shields.io/badge/MEAN%20Module-TypeScript-blue.svg)](https://github.com/mgenware/MEAN-Module)
[![npm version](https://badge.fury.io/js/node-rename-path.svg)](https://badge.fury.io/js/node-rename-path)
[![Node.js Version](http://img.shields.io/node/v/node-rename-path.svg)](https://nodejs.org/en/)

Node.js path renaming made easy.

### Installation

```sh
# yarn
yarn add node-rename-path
```

## Example

```js
import rename from 'node-rename-path';

const PATH = 'documents/work/readme.md';
let results = '';

// Do nothing
results = rename(PATH);
console.log(results);
// -> 'documents/work/readme.md'

// Change file name
results = rename(PATH, (pathObj) => {
  return {
    name: 'day1_' + pathObj.name + '_notes',
  };
});
console.log(results);
// -> documents/work/day1_readme_notes.md

// Reset file name
results = rename(PATH, (pathObj) => {
  return {
    name: '___',
  };
});
console.log(results);
// -> documents/work/___.md

// Change extension
results = rename(PATH, (pathObj) => {
  return {
    ext: '.a.b.c.d',
  };
});
console.log(results);
// -> documents/work/readme.a.b.c.d

// Remove extension
results = rename(PATH, (pathObj) => {
  return {
    ext: '',
  };
});
console.log(results);
// -> documents/work/readme

// Set both file name and extension all at once
results = rename(PATH, (pathObj) => {
  return {
    base: 'brand-new.pdf',
  };
});
console.log(results);
// -> documents/work/brand-new.pdf

// Update directory path
results = rename(PATH, (pathObj) => {
  return {
    dir: '/root',
  };
});
console.log(results);
// -> /root/readme.md
```
