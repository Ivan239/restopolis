import currentDate from './currentDate.ts';

describe('currentDate', () => {
  test('it should return YYYY-MM-DDTHH:MM string without input data', () => {
    expect(currentDate()).toMatch(
      /^\d{4}-(0[1-9]|1[012])-([012]\d|3[01])T([01]\d|2[0-3]):([0-5]\d)$/,
    );
  });
  test('it should return YYYY-MM-DDTHH:MM string with input data', () => {
    expect(currentDate(5)).toMatch(
      /^\d{4}-(0[1-9]|1[012])-([012]\d|3[01])T([01]\d|2[0-3]):([0-5]\d)$/,
    );
  });
});
