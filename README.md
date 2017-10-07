# node-rename-path
Node.js path renaming made easy.

### Installation
```sh
# yarn
yarn add node-rename-path
# npm
npm install node-rename-path --save
```

### Run tests
```sh
# yarn
yarn test
# npm
npm test
```

## Example
```javascript
const rename = require('node-rename-path');
const PATH = 'documents/work/readme.md';

rename(PATH);
// Do nothing
// -> 'documents/work/readme.md'


rename(PATH, (pathObj) => {
  pathObj.name = 'day1_' + pathObj.name + '_notes';
});
// Modify file name
// -> documents/work/day1_readme_notes.md

rename(PATH, (pathObj) => {
  pathObj.name = '___';
});
// Reset file name
// -> documents/work/___.md

rename(PATH, (pathObj) => {
  pathObj.ext = '.a.b.c.d';
});
// Change extension
// -> documents/work/readme.a.b.c.d

rename(PATH, (pathObj) => {
  pathObj.ext = '';
});
// Remove extension
// -> documents/work/readme

rename(PATH, (pathObj) => {
  pathObj.base = 'brand-new.pdf';
});
// Set both file name and extension all at once
// -> documents/work/brand-new.pdf

rename(PATH, (pathObj) => {
  pathObj.dir = '/root';
});
// Set parent path
// -> /root/readme.md
```