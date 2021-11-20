import { AggregateRoot } from '../__shared__/aggregate-root';
import { CustomerId } from './customer-id';
import { ICustomerDomain } from './__interface__/customer-domain-interface';

export class Customer extends AggregateRoot<ICustomerDomain, CustomerId> {
  public static create(props: ICustomerDomain): Customer {
    return new Customer(props, CustomerId.create());
  }

  public static restore(props: ICustomerDomain, id: CustomerId): Customer {
    return new Customer(props, id);
  }
  public get name(): ICustomerDomain['name'] {
    return this.props.name;
  }

  public get address(): ICustomerDomain['address'] {
    return this.props.address;
  }
}
