const main = require('../..').default;
import * as fs from 'fs';

describe('require this module', () => {
  test('Verify module members', () => {
    // TODO: replace "main.add" to one of your module members
    expect(typeof main).toBe('function');
  });

  test('Verify type definition files', () => {
    expect(fs.statSync('./dist/lib/main.d.ts').isFile()).toBeTruthy();
  });
});
