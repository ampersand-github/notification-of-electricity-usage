import { Customer } from "src/domain/customer/customer";

export class CustomerOutputDto {
  public readonly name: string;
  public readonly address: string;
  public readonly meterDate: number;
  public readonly meterPlace: number;
  public readonly othersNumber: number;
  public readonly monthHistoryId: string;
  public readonly supplyPointSpecificNumberId: string;
  public readonly contractDetailsId: string;
  public readonly instrumentId: string;
  public constructor(customer: Customer) {
    this.name = customer.name;
    this.address = customer.address;
    this.meterDate = customer.customerNumber.meterDate;
    this.meterPlace = customer.customerNumber.meterPlace;
    this.othersNumber = customer.customerNumber.othersNumber;
    this.monthHistoryId = customer.monthHistoryId.toString();
    this.supplyPointSpecificNumberId =
      customer.supplyPointSpecificNumberId.toString();
    this.contractDetailsId = customer.contractDetailsId.toString();
    this.instrumentId = customer.instrumentId.toString();
  }
}
