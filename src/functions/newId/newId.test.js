import newId from './newId.ts';

describe('newId', () => {
  test('it should return string with length 8 contains only a-z and 0-9', () => {
    expect(newId()).toMatch(/^[a-z\d]{8,8}$/);
  });
});
