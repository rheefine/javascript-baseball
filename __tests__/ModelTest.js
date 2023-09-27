const Model = require('../src/Model/Model');

describe('Model 클래스 테스트', () => {
  test('savePlayerNum 기능 테스트', () => {
    // 조건
    const correctAmount = '123';

    // 실행
    const model = new Model();
    model.savePlayerNum('123');
    const expectAmount = model.getPlayerNum();

    // 평가
    expect(expectAmount).toEqual(correctAmount);
  });
});
