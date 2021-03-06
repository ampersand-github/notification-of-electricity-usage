import { UniqueEntityId } from 'src/domain/__shared__/unique-entity-id'
import { v4 as uuid } from 'uuid'

export class CustomerNumberId extends UniqueEntityId {
  private constructor (value: string) {
    super(value, 'CustomerNumberId')
  }

  public static create (): CustomerNumberId {
    return new CustomerNumberId(uuid())
  }

  public static restore (id: string): CustomerNumberId {
    return new CustomerNumberId(id)
  }
}
