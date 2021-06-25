/* eslint-disable arrow-body-style */
import * as assert from 'assert';
import * as nodepath from 'path';
import rename from '../dist/main.js';

function p(path: string): string {
  return path.split('/').join(nodepath.sep);
}

it('Callback is null', () => {
  assert.strictEqual(rename('aaaa/bbbb/c'), 'aaaa/bbbb/c');
});

it('Modify name', () => {
  assert.strictEqual(
    rename(p('aaaa/bbbb/c.a'), (pathObj) => {
      return {
        name: `__${pathObj.name}`,
      };
    }),
    p('aaaa/bbbb/__c.a'),
  );
});

it('Modify name with dots', () => {
  assert.strictEqual(
    rename(p('aaaa/bbbb/c.a'), (_) => {
      return {
        name: 'a.b.c.d',
      };
    }),
    p('aaaa/bbbb/a.b.c.d.a'),
  );
});

it('Modify ext', () => {
  assert.strictEqual(
    rename(p('aaaa/bbbb/c.a'), (_) => {
      return {
        ext: '.kk.dd',
      };
    }),
    p('aaaa/bbbb/c.kk.dd'),
  );
});

it('Modify base', () => {
  assert.strictEqual(
    rename(p('aaaa/bbbb/c.a'), (_) => {
      return {
        base: 'haha',
      };
    }),
    p('aaaa/bbbb/haha'),
  );
});

it('Erase name', () => {
  assert.strictEqual(
    rename(p('aaaa/bbbb/c.a'), (_) => {
      return {
        name: '',
      };
    }),
    p('aaaa/bbbb/.a'),
  );
});

it('Erase ext', () => {
  assert.strictEqual(
    rename(p('aaaa/bbbb/c.a'), (_) => {
      return {
        ext: '',
      };
    }),
    p('aaaa/bbbb/c'),
  );
});

it('Erase all', () => {
  assert.strictEqual(
    rename(p('aaaa/bbbb/c.a'), (_) => {
      return {
        name: '',
        ext: '',
      };
    }),
    p('aaaa/bbbb/'),
  );
});

it('Modify dir', () => {
  assert.strictEqual(
    rename(p('aaaa/bbbb/c.a'), (_) => {
      return {
        dir: 'mydir',
      };
    }),
    p('mydir/c.a'),
  );
});

it('Erase dir', () => {
  assert.strictEqual(
    rename(p('aaaa/bbbb/c.a'), (_) => {
      return {
        dir: '',
      };
    }),
    p('c.a'),
  );
});
