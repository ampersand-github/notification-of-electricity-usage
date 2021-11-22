import { Customer } from 'src/domain/customer/customer'

export class CustomerOutputDto {
  public readonly name: string;
  public readonly address: string;
  public readonly meterDate: number;
  public readonly meterPlace: number;
  public readonly othersNumber: number;
  public constructor (customer: Customer) {
    this.name = customer.name
    this.address = customer.address
    this.meterDate = customer.customerNumber.meterDate
    this.meterPlace = customer.customerNumber.meterPlace
    this.othersNumber = customer.customerNumber.othersNumber
  }
}
