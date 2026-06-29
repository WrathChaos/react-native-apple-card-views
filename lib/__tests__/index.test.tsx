import * as Lib from '../index';

describe('package entry (barrel)', () => {
  it('exports AppleCard and AppOfTheDayCard as named exports', () => {
    expect(Lib.AppleCard).toBeDefined();
    expect(Lib.AppOfTheDayCard).toBeDefined();
  });

  it('does not regress the public export surface', () => {
    expect(Object.keys(Lib).sort()).toEqual(
      ['AppOfTheDayCard', 'AppleCard'].sort(),
    );
  });
});
