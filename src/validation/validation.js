const MESSAGE = Object.freeze({
  invalid_type: '[ERROR] 숫자만 입력하실 수 있습니다.',
  invalid_size: '[ERROR] 세 개의 숫자를 입력해 주세요.',
  invalid_range: '[ERROR] 각각의 숫자는 1부터 9사이의 숫자여야 합니다.',
  invalid_duplication: '[ERROR] 중복된 숫자는 입력할 수 없습니다',
  invalid_one_or_two: '[ERROR] 1 또는 2를 입력해 주세요.',
});

const validation = {
  checkCorrectMainNumber(input) {
    input.forEach((number) => {
      if (Number.isNaN(number)) throw new Error(MESSAGE.invalid_type);
    });
  },

  checkCorrectMainNumbersize(input) {
    if (input.length !== 3) throw new Error(MESSAGE.invalid_size);
  },

  checkCorrectMainNumberRange(input) {
    input.forEach((number) => {
      if (number < 1 || number > 9) throw new Error(MESSAGE.invalid_range);
    });
  },

  checkDuplicationMainNumber(input) {
    const setInput = new Set(input);
    if (setInput.size !== 3) throw new Error(MESSAGE.invalid_duplication);
  },

  checkOneOrTwo(input) {
    if (!(input === '1' || input === '2'))
      throw new Error(MESSAGE.invalid_one_or_two);
  },
};

module.exports = validation;
