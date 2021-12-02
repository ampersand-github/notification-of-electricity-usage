import { v4 as uuid } from 'uuid'
import { UniqueEntityId } from '../__shared__/unique-entity-id'

export class VoltageId extends UniqueEntityId {
  private constructor (value: string) {
    super(value, 'VoltageId')
  }

  public static create (): VoltageId {
    return new VoltageId(uuid())
  }

  public static restore (id: string): VoltageId {
    return new VoltageId(id)
  }
}
