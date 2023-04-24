const { Random } = require('@woowacourse/mission-utils');
const { compareNum } = require('../src/utils/compareNum');
const { mkOpponentNum } = require('../src/utils/mkOpponentNum');

const mockRandoms = (value) => {
  Random.pickNumberInRange = jest.fn();
  Random.pickNumberInRange.mockReturnValue(value);
  Random.pickNumberInRange();
};

describe('utils 함수 테스트', () => {
  test('compareNum 테스트', () => {
    // 조건
    const testOpponentArray = [1, 2, 3];
    const testPlayerArrayList = [
      [1, 2, 3],
      [3, 2, 1],
      [3, 1, 2],
      [4, 5, 6],
    ];
    const correctStrikeBall = [
      { strike: 3, ball: 0 },
      { strike: 1, ball: 2 },
      { strike: 0, ball: 3 },
      { strike: 0, ball: 0 },
    ];

    // 실행
    const expectStrikeBall = testPlayerArrayList.map((value) =>
      compareNum(testOpponentArray, value),
    );

    // 평가
    expect(expectStrikeBall).toEqual(correctStrikeBall);
  });

  test('mkOpponentNum 함수 테스트', () => {
    // 조건
    const correctRandomNumber = '123';
    mockRandoms(['123']);

    // 실행
    const expectGeneratedNumber = mkOpponentNum();

    // 평가
    expect(expectGeneratedNumber).toEqual(correctRandomNumber);
  });
});
