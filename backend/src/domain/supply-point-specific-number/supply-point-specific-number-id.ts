import { v4 as uuid } from 'uuid'
import { UniqueEntityId } from '../__shared__/unique-entity-id'

export class SupplyPointSpecificNumberId extends UniqueEntityId {
  private constructor (value: string) {
    super(value, 'SupplyPointSpecificNumberId')
  }

  public static create (): SupplyPointSpecificNumberId {
    return new SupplyPointSpecificNumberId(uuid())
  }

  public static restore (id: string): SupplyPointSpecificNumberId {
    return new SupplyPointSpecificNumberId(id)
  }
}
