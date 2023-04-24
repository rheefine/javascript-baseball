const {
  checkCorrectMainNumber,
  checkCorrectMainNumbersize,
  checkCorrectMainNumberRange,
  checkDuplicationMainNumber,
  checkOneOrTwo,
} = require('../src/validation/validation');

describe('Validation Test', () => {
  test.each(['aaa', '1a1', 'ㄱㄴㄷ', '!23'])(
    '입력한 값이 숫자가 아니면 예외가 발생한다.',
    () => {
      expect((input) => {
        checkCorrectMainNumber(input.split('').map(Number));
      }).toThrow();
    },
  );

  test.each(['1', '1234'])(
    '입력한 값의 길이가 3이 아니면 예외가 발생한다.',
    () => {
      expect((input) => {
        checkCorrectMainNumbersize(input.split('').map(Number));
      }).toThrow();
    },
  );

  test.each(['012', '103'])(
    '입력한 숫자가 1에서 9사이의 값이 아니라면 예외가 발생한다.',
    () => {
      expect((input) => {
        checkCorrectMainNumberRange(input.split('').map(Number));
      }).toThrow();
    },
  );

  test.each(['111', '233'])(
    '입력한 값에 중복이 있다면 예외가 발생한다.',
    () => {
      expect((input) => {
        checkDuplicationMainNumber(input.split('').map(Number));
      }).toThrow();
    },
  );

  test.each(['3', '12', 'a', 'ㄱ', '!'])(
    '입력한 값이 1이나 2가 아니라면 예외가 발생한다.',
    () => {
      expect((input) => {
        checkOneOrTwo(input);
      }).toThrow();
    },
  );
});
