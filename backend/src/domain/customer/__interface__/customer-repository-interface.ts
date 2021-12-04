import { CustomerId } from '../customer-id'
import { Customer } from '../customer'

export interface ICustomerRepository {
  findById(customerId: CustomerId): Promise<Customer | null>;
  findAll(): Promise<Customer[]>;
}
