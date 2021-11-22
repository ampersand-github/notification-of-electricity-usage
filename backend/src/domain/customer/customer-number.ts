import { AggregateRoot } from '../__shared__/aggregate-root'
import { CustomerNumberId } from './customer-number-id'
import { ICustomerNumberDomain } from './__interface__/customer-number-domain-interface'

export class CustomerNumber extends AggregateRoot<
  ICustomerNumberDomain,
  CustomerNumberId
> {
  public static create (props: ICustomerNumberDomain): CustomerNumber {
    return new CustomerNumber(props, CustomerNumberId.create())
  }

  public static restore (
    props: ICustomerNumberDomain,
    id: CustomerNumberId
  ): CustomerNumber {
    return new CustomerNumber(props, id)
  }

  public get meterDate (): ICustomerNumberDomain['meterDate'] {
    return this.props.meterDate
  }

  public get meterPlace (): ICustomerNumberDomain['meterPlace'] {
    return this.props.meterPlace
  }

  public get othersNumber (): ICustomerNumberDomain['othersNumber'] {
    return this.props.othersNumber
  }
}
