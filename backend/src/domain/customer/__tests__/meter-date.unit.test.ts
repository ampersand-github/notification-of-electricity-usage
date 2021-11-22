import { OthersNumber, OthersNumberProps } from "../others-number";

describe("OthersNumber", () => {
  it("11桁は異常", () => {
    const data: OthersNumberProps = { othersNumber: 12345678901 };
    expect(() => {OthersNumber.create(data)}).toThrowError();
  });
  it("10桁は正常", () => {
    const data: OthersNumberProps = { othersNumber: 1234567890 };
    expect(OthersNumber.create(data)).toEqual(expect.any(OthersNumber));
  });
});
