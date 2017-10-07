'use strict';

const assert = require('assert');
const rename = require('..');

describe('Main', () => {
  it('Callback is null', () => {
    assert.equal(rename('aaaa/bbbb/c'), 'aaaa/bbbb/c');
  });
  it('Modify name', () => {
    assert.equal(rename('aaaa/bbbb/c.a', (pathObj) => {
      pathObj.name = `__${pathObj.name}`;
    }), 'aaaa/bbbb/__c.a');
  });
  it('Modify name with dots', () => {
    assert.equal(rename('aaaa/bbbb/c.a', (pathObj) => {
      pathObj.name = `a.b.c.d`;
    }), 'aaaa/bbbb/a.b.c.d.a');
  });
  it('Modify ext', () => {
    assert.equal(rename('aaaa/bbbb/c.a', (pathObj) => {
      pathObj.ext = '.kk.dd';
    }), 'aaaa/bbbb/c.kk.dd');
  });
  it('Modify base', () => {
    assert.equal(rename('aaaa/bbbb/c.a', (pathObj) => {
      pathObj.base = 'haha';
    }), 'aaaa/bbbb/haha');
  });
  it('Erase name', () => {
    assert.equal(rename('aaaa/bbbb/c.a', (pathObj) => {
      pathObj.name = '';
    }), 'aaaa/bbbb/.a');
  });
  it('Erase ext', () => {
    assert.equal(rename('aaaa/bbbb/c.a', (pathObj) => {
      pathObj.ext = '';
    }), 'aaaa/bbbb/c');
  });
  it('Erase all', () => {
    assert.equal(rename('aaaa/bbbb/c.a', (pathObj) => {
      pathObj.name = pathObj.ext = '';
    }), 'aaaa/bbbb/');
  });
  it('Modify dir', () => {
    assert.equal(rename('aaaa/bbbb/c.a', (pathObj) => {
      pathObj.dir = 'mydir';
    }), 'mydir/c.a');
  });
  it('Erase dir', () => {
    assert.equal(rename('aaaa/bbbb/c.a', (pathObj) => {
      pathObj.dir = '';
    }), 'c.a');
  });
});
