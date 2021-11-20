import {SupplyPointSpecificNumberId} from "../supply-point-specific-number-id";
import {ISupplyPointSpecificNumberDomain} from "../__interface__/supply-point-specific-number-domain-interface";
import {SupplyPointSpecificNumber} from "../supply-point-specific-number";

const supplyPointSpecificNumberProps: ISupplyPointSpecificNumberDomain = {
  address: '住所',
};

describe('SupplyPointSpecificNumber', () => {
  it('createできる', () => {
    expect(SupplyPointSpecificNumber.create(supplyPointSpecificNumberProps)).toEqual(expect.any(SupplyPointSpecificNumber));
  });

  it('restoreできる', () => {
    const supplyPointSpecificNumberId: SupplyPointSpecificNumberId = SupplyPointSpecificNumberId.restore('test-id');
    expect(SupplyPointSpecificNumber.restore(supplyPointSpecificNumberProps, supplyPointSpecificNumberId)).toEqual(
      expect.any(SupplyPointSpecificNumber),
    );
    expect(
        SupplyPointSpecificNumber.restore(supplyPointSpecificNumberProps, supplyPointSpecificNumberId).id.equals(supplyPointSpecificNumberId),
    ).toBe(true);
  });
});
