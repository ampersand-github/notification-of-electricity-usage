import { v4 as uuid } from 'uuid'
import { UniqueEntityId } from '../__shared__/unique-entity-id'

export class InstrumentId extends UniqueEntityId {
  private constructor (value: string) {
    super(value, 'InstrumentId')
  }

  public static create (): InstrumentId {
    return new InstrumentId(uuid())
  }

  public static restore (id: string): InstrumentId {
    return new InstrumentId(id)
  }
}
