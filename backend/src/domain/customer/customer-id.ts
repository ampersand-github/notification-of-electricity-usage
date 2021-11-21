import { v4 as uuid } from 'uuid'
import { UniqueEntityId } from '../__shared__/unique-entity-id'

export class CustomerId extends UniqueEntityId {
  private constructor (value: string) {
    super(value, 'CustomerId')
  }

  public static create (): CustomerId {
    return new CustomerId(uuid())
  }

  public static restore (id: string): CustomerId {
    return new CustomerId(id)
  }
}
