import rename from '../';
import * as assert from 'assert';

const expect = assert.equal;

it('Callback is null', () => {
  expect(rename('aaaa/bbbb/c'), 'aaaa/bbbb/c');
});

it('Modify name', () => {
  expect(
    rename('aaaa/bbbb/c.a', pathObj => {
      return {
        name: `__${pathObj.name}`,
      };
    }),
    'aaaa/bbbb/__c.a',
  );
});

it('Modify name with dots', () => {
  expect(
    rename('aaaa/bbbb/c.a', _ => {
      return {
        name: `a.b.c.d`,
      };
    }),
    'aaaa/bbbb/a.b.c.d.a',
  );
});

it('Modify ext', () => {
  expect(
    rename('aaaa/bbbb/c.a', _ => {
      return {
        ext: '.kk.dd',
      };
    }),
    'aaaa/bbbb/c.kk.dd',
  );
});

it('Modify base', () => {
  expect(
    rename('aaaa/bbbb/c.a', _ => {
      return {
        base: 'haha',
      };
    }),
    'aaaa/bbbb/haha',
  );
});

it('Erase name', () => {
  expect(
    rename('aaaa/bbbb/c.a', _ => {
      return {
        name: '',
      };
    }),
    'aaaa/bbbb/.a',
  );
});

it('Erase ext', () => {
  expect(
    rename('aaaa/bbbb/c.a', _ => {
      return {
        ext: '',
      };
    }),
    'aaaa/bbbb/c',
  );
});

it('Erase all', () => {
  expect(
    rename('aaaa/bbbb/c.a', _ => {
      return {
        name: '',
        ext: '',
      };
    }),
    'aaaa/bbbb/',
  );
});

it('Modify dir', () => {
  expect(
    rename('aaaa/bbbb/c.a', _ => {
      return {
        dir: 'mydir',
      };
    }),
    'mydir/c.a',
  );
});

it('Erase dir', () => {
  expect(
    rename('aaaa/bbbb/c.a', _ => {
      return {
        dir: '',
      };
    }),
    'c.a',
  );
});
