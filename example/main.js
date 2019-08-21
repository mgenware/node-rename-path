const rename = require('..').default;

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
