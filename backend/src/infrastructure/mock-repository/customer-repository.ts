import { Customer } from 'src/domain/customer/customer'
import { CustomerId } from 'src/domain/customer/customer-id'
import { ICustomerRepository } from 'src/domain/customer/__interface__/customer-repository-interface'
import { PrismaService } from '../prisma/prisma.service'

/* eslint-disable */
export class CustomerRepository implements ICustomerRepository {
  public constructor(readonly prismaService: PrismaService) {}

  findById(customerId: CustomerId): Promise<Customer | null> {
    return Promise.resolve(undefined);
  }

  findAll(): Promise<Customer[]> {
    return Promise.resolve([]);
  }
}
