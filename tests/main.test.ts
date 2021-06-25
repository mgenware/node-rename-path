/* eslint-disable arrow-body-style */
import * as assert from 'assert';
import rename from '../dist/main.js';

it('Callback is null', () => {
  assert.strictEqual(rename('aaaa/bbbb/c'), 'aaaa/bbbb/c');
});

it('Modify name', () => {
  assert.strictEqual(
    rename('aaaa/bbbb/c.a', (pathObj) => {
      return {
        name: `__${pathObj.name}`,
      };
    }),
    'aaaa/bbbb/__c.a',
  );
});

it('Modify name with dots', () => {
  assert.strictEqual(
    rename('aaaa/bbbb/c.a', (_) => {
      return {
        name: `a.b.c.d`,
      };
    }),
    'aaaa/bbbb/a.b.c.d.a',
  );
});

it('Modify ext', () => {
  assert.strictEqual(
    rename('aaaa/bbbb/c.a', (_) => {
      return {
        ext: '.kk.dd',
      };
    }),
    'aaaa/bbbb/c.kk.dd',
  );
});

it('Modify base', () => {
  assert.strictEqual(
    rename('aaaa/bbbb/c.a', (_) => {
      return {
        base: 'haha',
      };
    }),
    'aaaa/bbbb/haha',
  );
});

it('Erase name', () => {
  assert.strictEqual(
    rename('aaaa/bbbb/c.a', (_) => {
      return {
        name: '',
      };
    }),
    'aaaa/bbbb/.a',
  );
});

it('Erase ext', () => {
  assert.strictEqual(
    rename('aaaa/bbbb/c.a', (_) => {
      return {
        ext: '',
      };
    }),
    'aaaa/bbbb/c',
  );
});

it('Erase all', () => {
  assert.strictEqual(
    rename('aaaa/bbbb/c.a', (_) => {
      return {
        name: '',
        ext: '',
      };
    }),
    'aaaa/bbbb/',
  );
});

it('Modify dir', () => {
  assert.strictEqual(
    rename('aaaa/bbbb/c.a', (_) => {
      return {
        dir: 'mydir',
      };
    }),
    'mydir/c.a',
  );
});

it('Erase dir', () => {
  assert.strictEqual(
    rename('aaaa/bbbb/c.a', (_) => {
      return {
        dir: '',
      };
    }),
    'c.a',
  );
});
