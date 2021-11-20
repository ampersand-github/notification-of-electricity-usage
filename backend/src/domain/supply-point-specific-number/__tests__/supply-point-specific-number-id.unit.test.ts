import { SupplyPointSpecificNumberId } from "../supply-point-specific-number-id";

describe('SupplyPointSpecificNumberId', () => {
  it('createできる', () => {
    expect(SupplyPointSpecificNumberId.create()).toEqual(expect.any(SupplyPointSpecificNumberId));
  });

  it('restoreできる', () => {
    expect(SupplyPointSpecificNumberId.restore('test-id')).toEqual(expect.any(SupplyPointSpecificNumberId));
  });

  it('toStringできる', () => {
    expect(SupplyPointSpecificNumberId.restore('test-id').toString()).toEqual('test-id');
  });

  it('equalsできる', () => {
    expect(
      SupplyPointSpecificNumberId.restore('test-id').equals(SupplyPointSpecificNumberId.restore('test-id')),
    ).toBe(true);
    expect(
      SupplyPointSpecificNumberId.restore('test-id').equals(SupplyPointSpecificNumberId.restore('not-equal-id')),
    ).toBe(false);
  });
});
