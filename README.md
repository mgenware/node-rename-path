# node-rename-path

[![MEAN Module](https://img.shields.io/badge/MEAN%20Module-TypeScript-blue.svg)](https://github.com/mgenware/MEAN-Module)
[![Build Status](https://travis-ci.org/mgenware/node-rename-path.svg?branch=master)](http://travis-ci.org/mgenware/node-rename-path)
[![npm version](https://badge.fury.io/js/node-rename-path.svg)](https://badge.fury.io/js/node-rename-path)
[![Node.js Version](http://img.shields.io/node/v/node-rename-path.svg)](https://nodejs.org/en/)

Node.js path renaming made easy.

### Installation

```sh
# yarn
yarn add node-rename-path
# npm
npm install node-rename-path --save
```

## Example

```javascript
import rename from 'node-rename-path';

const PATH = 'documents/work/readme.md';
let results = '';

results = rename(PATH);
// Do nothing
console.log(results);
// -> 'documents/work/readme.md'

results = rename(PATH, pathObj => {
  return {
    name: 'day1_' + pathObj.name + '_notes',
  };
});
// Modify file name
console.log(results);
// -> documents/work/day1_readme_notes.md

results = rename(PATH, pathObj => {
  return {
    name: '___',
  };
});
// Reset file name
console.log(results);
// -> documents/work/___.md

results = rename(PATH, pathObj => {
  return {
    ext: '.a.b.c.d',
  };
});
// Change extension
console.log(results);
// -> documents/work/readme.a.b.c.d

results = rename(PATH, pathObj => {
  return {
    ext: '',
  };
});
// Remove extension
console.log(results);
// -> documents/work/readme

results = rename(PATH, pathObj => {
  return {
    base: 'brand-new.pdf',
  };
});
// Set both file name and extension all at once
console.log(results);
// -> documents/work/brand-new.pdf

results = rename(PATH, pathObj => {
  return {
    dir: '/root',
  };
});
// Set parent path
console.log(results);
// -> /root/readme.md
```
