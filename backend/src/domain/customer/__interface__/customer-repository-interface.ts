import { CustomerId } from '../customer-id'
import { Customer } from '../customer'

export interface ICustomerRepository {
  findById(customerId: CustomerId): Promise<Customer | null>;
  /*
  findAll(): Promise<Customer[]>;
  create(customer: Customer): Promise<void>;
  update(customer: Customer): Promise<void>;
  delete(customer: Customer): Promise<void>;
 */
}
