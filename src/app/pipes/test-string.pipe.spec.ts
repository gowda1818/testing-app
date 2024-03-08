import { TestStringPipe } from './test-string.pipe';

describe('TestStringPipe', () => {
  it('create an instance', () => {
    const pipe = new TestStringPipe();
    expect(pipe).toBeTruthy();
  });

    const pipe = new TestStringPipe();

  it('transforms "abc" to "Abc"', () => {
    expect(pipe.transform('abc')).toBe('Abc');
  });

  it('transforms "abc def" to "Abc Def"', () => {
    expect(pipe.transform('abc def')).toBe('Abc Def');
  });
});
