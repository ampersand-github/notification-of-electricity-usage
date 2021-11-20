import { CustomerNumber } from "../customer-number";
import { CustomerNumberId } from "../customer-number-id";
import { ICustomerNumberDomain } from "../__interface__/customer-number-domain-interface";

const CustomerNumberProps: ICustomerNumberDomain = {
  meterDate: 10,
  meterPlace: "aaa",
};

describe("CustomerNumber", () => {
  it("createできる", () => {
    expect(CustomerNumber.create(CustomerNumberProps)).toEqual(
      expect.any(CustomerNumber)
    );
  });

  it("restoreできる", () => {
    const customerNumberId: CustomerNumberId =
      CustomerNumberId.restore("test-id");
    expect(
      CustomerNumber.restore(CustomerNumberProps, customerNumberId)
    ).toEqual(expect.any(CustomerNumber));
    expect(
      CustomerNumber.restore(CustomerNumberProps, customerNumberId).id.equals(
        customerNumberId
      )
    ).toBe(true);
  });
});
