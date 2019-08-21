const main = require('../..').default;
import * as fs from 'fs';
import * as assert from 'assert';

const expect = assert.equal;

describe('require this module', () => {
  it('Verify module members', () => {
    expect(typeof main, 'function');
  });

  it('Verify type definition files', async () => {
    expect(await fs.statSync('./dist/lib/main.d.ts').isFile(), true);
  });
});
