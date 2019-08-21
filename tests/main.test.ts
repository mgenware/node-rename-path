import rename from '../lib/main';

test('Callback is null', () => {
  expect(rename('aaaa/bbbb/c')).toBe('aaaa/bbbb/c');
});

test('Modify name', () => {
  expect(
    rename('aaaa/bbbb/c.a', pathObj => {
      return {
        name: `__${pathObj.name}`,
      };
    }),
  ).toBe('aaaa/bbbb/__c.a');
});

test('Modify name with dots', () => {
  expect(
    rename('aaaa/bbbb/c.a', _ => {
      return {
        name: `a.b.c.d`,
      };
    }),
  ).toBe('aaaa/bbbb/a.b.c.d.a');
});

test('Modify ext', () => {
  expect(
    rename('aaaa/bbbb/c.a', _ => {
      return {
        ext: '.kk.dd',
      };
    }),
  ).toBe('aaaa/bbbb/c.kk.dd');
});

test('Modify base', () => {
  expect(
    rename('aaaa/bbbb/c.a', _ => {
      return {
        base: 'haha',
      };
    }),
  ).toBe('aaaa/bbbb/haha');
});

test('Erase name', () => {
  expect(
    rename('aaaa/bbbb/c.a', _ => {
      return {
        name: '',
      };
    }),
  ).toBe('aaaa/bbbb/.a');
});

test('Erase ext', () => {
  expect(
    rename('aaaa/bbbb/c.a', _ => {
      return {
        ext: '',
      };
    }),
  ).toBe('aaaa/bbbb/c');
});

test('Erase all', () => {
  expect(
    rename('aaaa/bbbb/c.a', pathObj => {
      return {
        name: pathObj.ext = '',
      };
    }),
  ).toBe('aaaa/bbbb/');
});

test('Modify dir', () => {
  expect(
    rename('aaaa/bbbb/c.a', _ => {
      return {
        dir: 'mydir',
      };
    }),
  ).toBe('mydir/c.a');
});

test('Erase dir', () => {
  expect(
    rename('aaaa/bbbb/c.a', _ => {
      return {
        dir: '',
      };
    }),
  ).toBe('c.a');
});
