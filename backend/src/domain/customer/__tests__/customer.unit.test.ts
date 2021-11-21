import { Customer } from "../customer";
import { CustomerId } from "../customer-id";
import { ICustomerDomain } from "../__interface__/customer-domain-interface";
import { HistoryId } from "../../history/history-id";
import { SupplyPointSpecificNumberId } from "../../supply-point-specific-number/supply-point-specific-number-id";
import { ContactDetailsId } from "../../contact-details/contact-details-id";
import { InstrumentId } from "../../instrument/instrument-id";
import { CustomerNumber } from "../customer-number";

describe("Customer", () => {
  const customerProps: ICustomerDomain = {
    name: "名前",
    address: "東京都・・・",
    customerNumber: CustomerNumber.create({
      meterDate: 10,
      meterPlace: 10,
      othersNumber: 1234567890,
    }),
    historyId: HistoryId.create(),
    supplyPointSpecificNumberId: SupplyPointSpecificNumberId.create(),
    contractDetailsId: ContactDetailsId.create(),
    instrumentId: InstrumentId.create(),
  };
  it("createできる", () => {
    expect(Customer.create(customerProps)).toEqual(expect.any(Customer));
  });

  it("restoreできる", () => {
    const customerId: CustomerId = CustomerId.restore("test-id");
    expect(Customer.restore(customerProps, customerId)).toEqual(
      expect.any(Customer)
    );
    expect(
      Customer.restore(customerProps, customerId).id.equals(customerId)
    ).toBe(true);
  });
});
