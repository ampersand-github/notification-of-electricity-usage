import { Customer } from 'src/domain/customer/customer'
import { CustomerId } from 'src/domain/customer/customer-id'
import { ICustomerRepository } from 'src/domain/customer/__interface__/customer-repository-interface'
import { CustomerOutputDto } from './__dto__/customer-output-dto'

export class FindByIdUsecase {
  public constructor (readonly repository: ICustomerRepository) {}

  public async do (id: string): Promise<CustomerOutputDto> {
    const customer: Customer = await this.repository.findById(CustomerId.restore(id))
    return new CustomerOutputDto(customer)
  }
}
