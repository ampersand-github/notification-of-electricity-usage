import { CustomerId } from '../customer-id'
import { Customer } from '../customer'

export interface ICustomerRepository {
  findById(userId: CustomerId): Promise<Customer | null>;
  findAll(): Promise<Customer[]>;
  register(user: Customer): Promise<void>;
  update(user: Customer): Promise<void>;
  delete(user: Customer): Promise<void>;
}
