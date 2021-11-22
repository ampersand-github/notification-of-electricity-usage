import { CustomerNumber } from "../customer-number";
import { CustomerNumberId } from "../customer-number-id";
import { MeterDate } from "../meter-date";
import { MeterPlace } from "../meter-place";
import { OthersNumber } from "../others-number";
import { ICustomerNumberDomain } from "../__interface__/customer-number-domain-interface";

describe("CustomerNumber", () => {
  const customerNumberProps: ICustomerNumberDomain = {
    meterDate: MeterDate.create({ meterDate: 10 }),
    meterPlace: MeterPlace.create({ meterPlace: 11 }),
    othersNumber: OthersNumber.create({ othersNumber: 1234567890 }),
  };

  it("createできる", () => {
    expect(CustomerNumber.create(customerNumberProps)).toEqual(
      expect.any(CustomerNumber)
    );
  });

  it("restoreできる", () => {
    const customerNumberId: CustomerNumberId =
      CustomerNumberId.restore("test-id");
    expect(
      CustomerNumber.restore(customerNumberProps, customerNumberId)
    ).toEqual(expect.any(CustomerNumber));
    expect(
      CustomerNumber.restore(customerNumberProps, customerNumberId).id.equals(
        customerNumberId
      )
    ).toBe(true);
  });
});
